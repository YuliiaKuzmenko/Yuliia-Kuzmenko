class FeaturedListingsPage{
    get searchListingFld() {
        return cy.get('div[class *= "MuiGrid-root MuiGrid-item MuiGrid-grid-xs-t"] input[class *= "Mui"]');
      }
    get bedroomsListingFld() {
        return cy.get('div:nth-of-type(2) [id*="r"][role][class *= "MuiSelect-select"]');
    }
    get listingBedroomsFld() {
        return cy.get ('ul li[data-value = "2"]');
    }
    get listingCityFld() {
        return cy.get('input[id*="r4"][class*="MuiInputBase-input MuiOutlinedInput-input css-h3f2gu"]');
    }
    get listingStartSearchBtn() {
        return cy.get('button[class*="MuiButtonBase-root MuiB"]')
    }
    get itemsInSearchList() {
        return cy.get(".MuiCard-root")
    }
    get listingPropertyItemTitle() {
        return cy.get('div[class *= "MuiGrid-root"] div[class *= "MuiPaper-root MuiPaper-elevation MuiPaper"]');
      }
    get listingPropertyBedroomsNum() {
        return cy.get('div:nth-of-type(4)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]');
    }
    get listingPropertyCity() {
        return cy.get('div:nth-of-type(5)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
    }
    get listingPropertyPriceLbl() {
        return cy.get('div[class*="MuiBox-root css-6yrxxf"]');
    }
    get listingMoreInfoBtn() {
        return cy.get('a[class *= "MuiButtonBase-root"]');
     }
    get propertyTitle(){
        return cy.get('h3[class*="MuiTypography-root MuiTypography-h3"]');
    }
     get propertyBedroomsNum(){
        return cy.get('div:nth-of-type(6)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
    }
    get propertyPrice(){
        return cy.get('.MuiGrid-container.MuiGrid-root.MuiGrid-spacing-xs-2.css-isbt42 > div:nth-of-type(1)');
    }
}
export default new FeaturedListingsPage();