class RegistrationPage {
  get firstNameInputField() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInputField() {
    return cy.get('[name="lastName"]');
  }
  get emailInputField() {
    return cy.get('[name="email"]');
  }
  get passwordInputField() {
    return cy.get('[name="password"]');
  }
  get submitButton() {
    return cy.get('[type="submit"]');
  }

  get firstNameInputError() {
    return cy.get('[id*=":r5:-helper-text"]');
  }
  get lastNameInputError() {
    return cy.get('[id*=":r6:-helper-text"]');
  }
  get emailInputError() {
    return cy.get('[id*=":r7:-helper-text"]');
  }
  get passwordInputError() {
    return cy.get('[id*=":r8:-helper-text"]');
  }
}

export default new RegistrationPage();
