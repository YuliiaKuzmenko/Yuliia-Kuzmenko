import featuredListingsPage from "../../page_objects/featuredListingsPage";
import homePage from "../../page_objects/home.page";
import listingData from "../../fixtures/testData/listingPropertyData.json";
import { createEstateObject } from "../../support/apiHelpers";

let bedrooms = [];

describe("Listing page", () => {
  before(() => {
    cy.visit("/");
    homePage.darkMode.click();
    cy.loginApi();
    createEstateObject(listingData, "img.png");
  });

  it("Search by keyword should be displayed on listing page", () => {
    cy.visit("/featured-listings");
    featuredListingsPage.searchListingInputField.type(listingData.keyword);
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

  it("Search by number of bedrooms should be displayed on listing page", () => {
    cy.visit("/featured-listings");
    featuredListingsPage.listingCityInputField.type(listingData.city);
    featuredListingsPage.bedroomsListingDropdownList.click();
    featuredListingsPage.twoPlusListingBedroomsNumber.click();
    featuredListingsPage.listingStartSearchButton.click();
    featuredListingsPage.listingMoreInfoButton.first().click();
    featuredListingsPage.currentPropertyBedroomsNumber
      .contains(listingData.bedrooms)
      .should("be.visible");
  });

  it("Search by price should be displayed on listing page", () => {
    cy.visit(
      "/featured-listings?price=500000-8400000&keyword=Spectrum&bedrooms=2&city=Irvine"
    );
    featuredListingsPage.listingPropertyPriceLabel
      .invoke("text") // Get the text content of the price element
      .then((text) => {
        const price = parseInt(text.replace(/[^\d]/g, ""), 10); // Remove non-numeric characters and parse as a number
        expect(price).to.be.within(500000, 8400000); // Assert that the price is within the range
      });

    featuredListingsPage.listingMoreInfoButton.first().click();
    featuredListingsPage.currentPropertyPrice
      .invoke("text") // Get the text content of the price element
      .then((text) => {
        const price = parseInt(text.replace(/[^\d]/g, ""), 10); // Remove non-numeric characters and parse as a number
        expect(price).to.be.within(500000, 8400000); // Assert that the price is within the range
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
});
