import featuredListingsPage from "../../page_objects/featuredListingsPage";
import homePage from "../../page_objects/home.page";

let bedrooms = [];

describe("Search homePage", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.darkMode.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInputFieldMainPage.click().type("Spectrum");
    homePage.startSearchButtMainPage.click();

    featuredListingsPage.searchListingInputField
      .should("have.value", "Spectrum")
      .should("be.visible");
    featuredListingsPage.listingPropertyTitle
      .contains("Promenade at Irvine Spectrum")
      .should("be.visible");
  });

  it("Should search by bedrooms count", () => {
    homePage.bedroomsDropdownListMainPage.click();
    homePage.twoPlusBedroomsNumberMainPage.click();
    homePage.startSearchButtMainPage.click();

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
    homePage.cityInputFieldMainPage.click().type("Irvine");
    homePage.startSearchButtMainPage.click();
    featuredListingsPage.listingPropertyCityName
      .contains("City: Irvine")
      .should("be.visible");
    featuredListingsPage.listingPropertyTitle
      .contains("Promenade at Irvine Spectrum")
      .should("be.visible");
    featuredListingsPage.listingPropertyBedroomsNumber
      .contains("2")
      .should("be.visible");
    featuredListingsPage.listingPropertyPriceLabel
      .contains("$ 560,000")
      .should("be.visible");
    featuredListingsPage.listingMoreInfoButton.click();
    featuredListingsPage.currentPropertyTitle
      .contains("Promenade at Irvine Spectrum")
      .should("be.visible");
    featuredListingsPage.currentPropertyBedroomsNumber
      .contains("2")
      .should("be.visible");
    featuredListingsPage.currentPropertyPrice
      .contains("$ 560,000")
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
        expect(tmp).to.be.above(5000000);
        expect(tmp).to.be.below(8400000);
      });
  });
});
