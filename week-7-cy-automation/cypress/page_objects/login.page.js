import homePage from "./home.page";

class LoginPage {
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[name="password"]');
  }
  get loginBtn() {
    return cy.contains("Login");
  }
  get InvalidDataAlr() {
    return cy.get('[role="alert"]');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginBtn.click();
  }
}
export default new LoginPage();