class Homepage {
  get loginFormLink() {
    return cy.get('[href="/auth/login"]');
  }
  get registerFormLink() {
    return cy.get('[href="/auth/register"]');
  }
  get darkMode() {
    return cy.get(
      'input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]'
    );
  }
  get searchInputFieldMainPage() {
    return cy.get("input[id *= r1]");
  }
  get bedroomsDropdownListMainPage() {
    return cy.get('div[id*="r2"][class *= "MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-x7gxcu"]');
  }
  get twoPlusBedroomsNumberMainPage() {
    return cy.get('ul li[class *="MuiButtonBase-root"][data-value = "2"]');
  }
  get cityInputFieldMainPage() {
    return cy.get(
      'div[class*="MuiFormControl"] div[class*="MuiInputBase-root"] input[id*="r4"]'
    );
  }
  get startSearchButtonMainPage() {
    return cy.get('button[class *= "MuiButtonBase"]');
  }
}

export default new Homepage();
