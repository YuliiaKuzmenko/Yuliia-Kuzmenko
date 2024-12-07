import allListingPage from "../../page_objects/all.listing.page";
import homePage from "../../page_objects/home.page";

describe("Search homePage", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]').click();
  });

  it("Should search by keyword", () => {
    homePage.searchFld.click();
    homePage.searchFld.type("Spectrum");
    homePage.startSearchBtn.click();

    // Verify listing property on the listing page
    allListingPage.searchListFld
      .should("have.value", "Spectrum")
      .should("be.visible");
    allListingPage.propertyItm
      .contains("Promenade at Irvine Spectrum")
      .should("be.visible");
  });

  it("Should search by bedrooms count", () => {
    homePage.searchFld.click();
    homePage.searchFld.type("Spectrum");
    homePage.bedroomsFld.click();
    homePage.twoPlusBedroomsNum.click();
    homePage.startSearchBtn.click();

    // Verify listing bedrooms number on the listing page
    allListingPage.bedroomsFld.should("have.text", "2+").should("be.visible");
    allListingPage.propertyBedroomsNum.contains("2").should("be.visible");
  });

  it("Should search by city", () => {
    homePage.searchFld.click().type("Spectrum");
    homePage.bedroomsFld.click();
    homePage.twoPlusBedroomsNum.click();
    homePage.city.click().type("Irvine");
    homePage.startSearchBtn.click();

    // Verify listing city on the listing page
    allListingPage.propertyCity.contains("City: Irvine").should("be.visible");
  });

  it("Should search by price", () => {
    cy.visit(
      "/featured-listings?price=500000-8400000&keyword=Spectrum&bedrooms=2&city=Irvine"
    );
    allListingPage.propertyPriceLbl
    .contains("$ 560,000").should("be.visible")
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
