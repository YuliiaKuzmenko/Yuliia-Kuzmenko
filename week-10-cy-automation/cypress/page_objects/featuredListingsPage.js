class FeaturedListingsPage {
  get searchListingInputField() {
    return cy.get(
      'div[class *= "MuiGrid-root MuiGrid-item MuiGrid-grid-xs-t"] input[class *= "Mui"]'
    );
  }
  get bedroomsListingDropdownList() {
    return cy.get(
      'div:nth-of-type(2) [id*="r2"][role][class *= "MuiSelect-select"]'
    );
  }
  get twoPlusListingBedroomsNumber() {
    return cy.get('ul li[data-value = "2"]');
  }
  get listingCityInputField() {
    return cy.get(
      'input[id*="r4"][class*="MuiInputBase-input MuiOutlinedInput-input css-yzm7vx"]'
    );
  }
  get listingStartSearchButton() {
    return cy.get('button[class*="MuiButtonBase-root MuiB"]');
  }
  get propertiesInSearchList() {
    return cy.get(".MuiCard-root");
  }
  get listingPropertyTitle() {
    return cy.get(
      'div[class *= "MuiGrid-root"] div[class *= "MuiPaper-root MuiPaper-elevation MuiPaper"]'
    );
  }
  get listingPropertyBedroomsNumber() {
    return cy.get(
      'div:nth-of-type(3)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]'
    );
  }
  get listingPropertyCityName() {
    return cy.get('#root > div > div.MuiBox-root.css-0 > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.css-1h77wgb > div > div > div.MuiCardContent-root.css-lmipfk > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.css-1na5d0x > div:nth-child(5)');
  }
  get listingPropertyPriceLabelDRMode() {
    return cy.get('div[class*="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-szgt2f"] div div[class*="MuiBox-root css-6yrxxf"]');
  }
  get listingPropertyPriceLabel() {
    return cy.get('#root > div > div.MuiBox-root.css-0 > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.css-1h77wgb > div:nth-child(1) > div > div.MuiBox-root.css-79elbk > div.MuiBox-root.css-dc9kff');
  }
  get listingPriceVefification() {
    return cy.get(
      '[class*="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3"] [class="MuiBox-root css-79elbk"]'
    );
  }
  get listingMoreInfoButton() {
    return cy.get('div:nth-of-type(1) [class *= "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeM"]');
  }
  get currentPropertyTitle() {
    return cy.get('h3[class*="MuiTypography-root MuiTypography-h3"]');
  }
  get currentPropertyBedroomsNumber() {
    return cy.get(
      'div:nth-of-type(6)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]'
    );
  }
  get currentPropertyLotSize() {
    return cy.get(
      'div:nth-of-type(3)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]'
    );
  }
  get currentPropertyGarage() {
    return cy.get(
      'div:nth-of-type(5)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]'
    );
  }
  get currentPropertyPrice() {
    return cy.get(
      ".MuiGrid-container.MuiGrid-root.MuiGrid-spacing-xs-2.css-isbt42 > div:nth-of-type(1)"
    );
  }
}
export default new FeaturedListingsPage();
