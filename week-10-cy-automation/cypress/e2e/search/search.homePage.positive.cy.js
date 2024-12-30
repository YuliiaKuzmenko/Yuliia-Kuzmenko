import featuredListingsPage from "../../page_objects/featuredListingsPage";
import homePage from "../../page_objects/home.page";
import listingData from "../../fixtures/testData/listingPropertyData.json";
import { createEstateObject } from "../../support/apiHelpers";

let bedrooms = [];

describe("Search homePage", () => {
  before(() => {
    cy.visit("/");
    homePage.darkMode.click();
    cy.loginApi();
    createEstateObject(listingData, "img.png");
  });

  it("Should search by keyword", () => {
    cy.visit("/");
    homePage.searchInputFieldMainPage.type(listingData.keyword);
    homePage.startSearchButtonMainPage.click();

    featuredListingsPage.searchListingInputField
      .should("have.value", listingData.keyword)
      .should("be.visible");
    featuredListingsPage.listingPropertyTitle
      .contains(listingData.title)
      .should("be.visible");
  });

  it("Should search by bedrooms count", () => {
    cy.visit("/");
    homePage.darkMode.click();
    homePage.bedroomsDropdownListMainPage.click();
    homePage.twoPlusBedroomsNumberMainPage.click();
    homePage.startSearchButtonMainPage.click();

    featuredListingsPage.propertiesInSearchList.each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          const match = text.split("Bedrooms: ")[1];
          if (match) {
            bedrooms.push(parseInt(match.split(" ")[0], 10));
          }
        });
    });

    cy.then(() => {
      bedrooms.forEach((element) => {
        expect(element).to.be.at.least(2);
      });
    });
  });

  it("Should search by city", () => {
    cy.visit("/");
    homePage.darkMode.click();
    homePage.cityInputFieldMainPage.type(listingData.city);
    homePage.startSearchButtonMainPage.click();
    featuredListingsPage.listingPropertyCityName
      .contains(listingData.city)
      .should("be.visible");
    featuredListingsPage.listingPropertyTitle
      .contains(listingData.title)
      .should("be.visible");
    featuredListingsPage.listingPropertyBedroomsNumber
      .contains(listingData.bedrooms)
      .should("be.visible");
    featuredListingsPage.listingPropertyPriceLabelDRMode
      .contains("$ 580,000")
      .should("be.visible");
    featuredListingsPage.listingMoreInfoButton.first().click();
    featuredListingsPage.currentPropertyTitle
      .contains(listingData.title)
      .should("be.visible");
    featuredListingsPage.currentPropertyBedroomsNumber
      .first()
      .contains(listingData.bedrooms)
      .should("be.visible");
    featuredListingsPage.currentPropertyPrice
      .contains("$ 580,000")
      .should("be.visible");
  });

  it("Should search by price", () => {
    cy.visit(
      "/featured-listings?price=500000-8400000&keyword=Spectrum&bedrooms=2&city=Irvine"
    );
    featuredListingsPage.listingPriceVefification
      .invoke("text")
      .then((text) => {
        const tmp = parseInt(text.replace("$ ", "").replace(/,/g, ""), 10);
        expect(tmp).to.be.above(500000);
        expect(tmp).to.be.below(840000);
      });
  });
});

after(() => {
  // Visit the listings page
  cy.visit(
    "/featured-listings?price=500000-10000000&keyword=Yuliia+API+Test+Promenade+at+Irvine+Spectrum"
  );

  // Click on the "More Info" button to navigate to the listing details page
  featuredListingsPage.listingMoreInfoButton.first().click();

  // Extract the ID from the URL
  cy.url().then((currentUrl) => {
    const id = currentUrl.split("/").pop(); // Extract the ID from the URL
    cy.log("Extracted ID:", id);

    // Use the extracted ID to send a DELETE request
    cy.request({
      method: "DELETE",
      url: `/api/estate-objects/${id}`, // Use the extracted ID
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`, // Add authorization token
      },
    }).then((response) => {
      // Validate the response
      expect(response.status).to.eq(200);
      cy.log("Listing successfully removed");
    });
  });
});
