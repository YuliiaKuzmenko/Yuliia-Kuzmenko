class Home_search {
    get searchFld() {
        return cy.get('input[id *= r1]');
    }
    get bedroomsFld() {
        return cy.get('div[id*="r2"][class *= "MuiSelect-select"]');
    }
    get twoPlusBedroomsNum() {
        return cy.get('ul li[class *="MuiButtonBase-root"][data-value = "2"]');
    }
    get city() {
        return cy.get('div[class*="MuiFormControl"] div[class*="MuiInputBase-root"] input[id*="r4"]');
    }
    get startSearchBtn() {
        return cy.get('button[class *= "MuiButtonBase"]');
      }
    
}

export default new Home_search();