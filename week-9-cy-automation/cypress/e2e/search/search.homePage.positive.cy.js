import featuredListingsPage from "../../page_objects/featuredListingsPage";
import homePage from "../../page_objects/home.page";

let bedrooms = [];

describe("Search homePage", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.darkMode.click();
  });

  it("Should search by keyword", () => {
    homePage.searchFldMnPg.click().type("Spectrum");
    homePage.startSearchBtnMnPg.click();

    // Verify listing property on the listing page
    featuredListingsPage.searchListingFld
      .should("have.value", "Spectrum")
      .should("be.visible");
    featuredListingsPage.listingPropertyItemTitle
      .contains("Promenade at Irvine Spectrum")
      .should("be.visible");
  });

  it("Should search by bedrooms count", () => {
    homePage.bedroomsFldMnPg.click();
    homePage.twoPlusBedroomsNumMnPg.click();
    homePage.startSearchBtnMnPg.click();
    
    featuredListingsPage.itemsInSearchList.each(($el) => {
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
  homePage.cityMnPg.click().type("Irvine");
  homePage.startSearchBtnMnPg.click();
  // Verify listing city on the listing page
  featuredListingsPage.listingPropertyCity.contains("City: Irvine").should("be.visible");
  featuredListingsPage.listingMoreInfoBtn.click();
  });

  it("Should search by price", () => {
    cy.visit(
      "/featured-listings?price=500000-8400000&keyword=Spectrum&bedrooms=2&city=Irvine"
    );
    featuredListingsPage.listingPropertyPriceLbl
    .contains("$ 560,000").should("be.visible")
  });
});