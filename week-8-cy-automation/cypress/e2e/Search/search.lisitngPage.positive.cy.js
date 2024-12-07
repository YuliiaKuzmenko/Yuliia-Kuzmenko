import allListingPage from "../../page_objects/all.listing.page";
import listingPage from "../../page_objects/listing.page";

describe("Listing page", () => {
    beforeEach(() => {
      cy.visit("/featured-listings?price=500000-10000000");
      cy.get('input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]').click();
    });
  
    it("Search by keyword should be displayed on listing page", () => {
    allListingPage.searchListFld.click().type("Spectrum");
    allListingPage.startSearchBtn.click();
    allListingPage.propertyItm.contains("Spectrum").should("be.visible");
    allListingPage.moreInfoBtn.click();
    listingPage.propertyTitle.contains("Spectrum").should("be.visible");
    });
  
    it("Search by number of bedrooms should be displayed on listing page", () => {;
    allListingPage.searchListFld.click().type("Spectrum");
    allListingPage.bedroomsFld.click();
    allListingPage.chossingBedroomsNum.click();
    allListingPage.startSearchBtn.click();
    allListingPage.moreInfoBtn.click();
    listingPage.propertyBedroomsNum.contains("2").should("be.visible");
    });
  
    it("Search by price should be displayed on listing page", () => {
      cy.visit("/featured-listings?price=500000-8400000&keyword=Spectrum&bedrooms=2&city=Irvine");
      allListingPage.propertyPriceLbl
      .contains("$ 560,000").should("be.visible")
      allListingPage.moreInfoBtn.click();
      listingPage.propertyPrice.contains("$ 560,000").should("be.visible");
    });
  
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
});