class newListing {
  get setDemoValuesButton() {
    return cy.get(
      "button[class*= 'MuiButtonBase-root MuiButton-root MuiButton-c']"
    );
  }
  get estateTitle() {
    return cy.get('input[id*="r1"]');
  }
  get Description() {
    return cy.get('textarea[id*="r2"]');
  }
  get City() {
    return cy.get('input[id*="r3"]');
  }
  get Address() {
    return cy.get('input[id*="r4"]');
  }
  get zipCode() {
    return cy.get('input[id*="r5"]');
  }
  get stateDropdownList() {
    return cy.get('div[id*="r6"]');
  }
  get price() {
    return cy.get('input[id*="r7"]');
  }
  get stateCA() {
    return cy.get('ul li[data-value="CA"]');
  }
  get bedroomsInputField() {
    return cy.get(
      'div:nth-of-type(2) :nth-child(3) input[class*="MuiInputBase-input MuiOutlinedInput-input css-yzm7vx"]'
    );
  }
  get bathroomsInputField() {
    return cy.get(
      'div:nth-of-type(2) :nth-child(4) input[class*="MuiInputBase-input MuiOutlinedInput-input css-yzm7vx"]'
    );
  }
  get garageInputField() {
    return cy.get(
      'div:nth-of-type(2) :nth-child(5) input[class*="MuiInputBase-input MuiOutlinedInput-input css-yzm7vx"]'
    );
  }
  get sqftInputField() {
    return cy.get(
      'div:nth-of-type(2) :nth-child(6) input[class*="MuiInputBase-input MuiOutlinedInput-input css-yzm7vx"]'
    );
  }
  get lotSizeInputField() {
    return cy.get(
      'div:nth-of-type(2) :nth-child(7) input[class*="MuiInputBase-input MuiOutlinedInput-input css-yzm7vx"]'
    );
  }
  get dropDown() {
    return cy.get('div[role*="presentation"]');
  }
  get pusblishToggle() {
    return cy.get('input[class*="PrivateSwitchBase"][name*="isPublished"]');
  }
  get postButton() {
    return cy.get('button[class*="MuiButtonBase-root"][type="submit"][id*="rd"]');
  }
}

export default new newListing();
