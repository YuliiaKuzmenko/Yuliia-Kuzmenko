class Homepage {
  get loginBtn() {
      return cy.get('[href="/auth/login"]');
  }
  get registerBtn() {
      return cy.get('[href="/auth/register"]');
  }
  get darkMode(){
      return cy.get('input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]')
  }
  get searchFldMnPg() {
      return cy.get('input[id *= r1]');
  }
  get bedroomsFldMnPg() {
      return cy.get('div[id*="r2"][class *= "MuiSelect-select"]');
  }
  get twoPlusBedroomsNumMnPg() {
      return cy.get('ul li[class *="MuiButtonBase-root"][data-value = "2"]');
  }
  get cityMnPg() {
      return cy.get('div[class*="MuiFormControl"] div[class*="MuiInputBase-root"] input[id*="r4"]');
  }
  get startSearchBtnMnPg() {
      return cy.get('button[class *= "MuiButtonBase"]');
    }
  
}

export default new Homepage();