class listingSearch{
    get searchListFld() {
        return cy.get('div[class *= "MuiGrid-root MuiGrid-item MuiGrid-grid-xs-t"] input[class *= "Mui"]');
      }
    get bedroomsFld() {
        return cy.get('div:nth-of-type(2) [id*="r"][role][class *= "MuiSelect-select"]');
    }
    get chossingBedroomsNum() {
        return cy.get ('ul li[data-value = "2"]');
    }
    get city() {
        return cy.get('input[id*="r9"][class*="MuiInputBase-input MuiOutlinedInput-input css-yzm7vx"]');
    }
    get startSearchBtn() {
        return cy.get('button[class*="MuiButtonBase-root MuiB"]')
    }
    get propertyItm() {
        return cy.get('div[class *= "MuiGrid-root"] div[class *= "MuiPaper-root MuiPaper-elevation MuiPaper"]');
      }
    get propertyBedroomsNum() {
        return cy.get('div:nth-of-type(4)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]');
    }
    get propertyCity() {
        return cy.get('div:nth-of-type(5)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
    }
    get propertyPriceLbl() {
        return cy.get('div[class*="MuiBox-root css-6yrxxf"]');
    }
    get moreInfoBtn() {
        return cy.get('a[class *= "MuiButtonBase-root"]');
      }
}
export default new listingSearch();