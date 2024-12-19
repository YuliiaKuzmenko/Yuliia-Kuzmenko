class DashboardPage {
  get roleLbl() {
    return cy.get("a p");
  }
  get fullNameLbl() {
    return cy.get("h6");
  }
  get fullUserNm() {
    return cy.get("h6");
  }

  //User icon menu
  get userIconBtn() {
    return cy.get('button [class*= "MuiAvatar-root"]');
  }
  get userEmail() {
    return cy.get('div[class = "MuiBox-root css-1y19tqg"]');
  }
  get logoutBtn() {
    return cy.contains("Logout");
  }
}

export default new DashboardPage();

