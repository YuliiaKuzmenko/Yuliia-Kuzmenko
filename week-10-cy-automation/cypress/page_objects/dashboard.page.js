class DashboardPage {
  get roleLabel() {
    return cy.get("a p");
  }
  get fullNameLabel() {
    return cy.get("h6");
  }
  get fullUserName() {
    return cy.get("h6");
  }

  //User icon menu
  get userIconButton() {
    return cy.get('button [class*= "MuiAvatar-root"]');
  }
  get userEmail() {
    return cy.get('div[class = "MuiBox-root css-1y19tqg"]');
  }
  get logoutButton() {
    return cy.contains("Logout");
  }
}

export default new DashboardPage();

