class LoginPage {
  get emailInputField() {
    return cy.get('[name="email"]');
  }
  get passwordInputField() {
    return cy.get('[name="password"]');
  }
  get loginButton() {
    return cy.contains("Login");
  }
  get InvalidDataAlert() {
    return cy.get('[role="alert"]');
  }

  login(email, password) {
    this.emailInputField.type(email);
    this.passwordInputField.type(password);
    this.loginButton.click();
  }
}
export default new LoginPage();
