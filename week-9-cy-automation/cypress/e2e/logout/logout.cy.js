import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import user from "../../fixtures/data.json"

describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log out", () => {
    //Click login button on homepage
    homePage.loginBtn.click();

    // Type in username/password
    loginPage.login(user.email, user.password);
    loginPage.passwordInpt.type("12345678");
    //Click login button
    loginPage.loginBtn.click();
    //Verify user role and title
    dashboardPage.roleLbl.should("have.text", "role: user");
    //Verify name as well
    cy.title().should("eq", "User: Profile | Delek Homes");

    //Click on user icon
    dashboardPage.userIconBtn.click();
    dashboardPage.logoutBtn.click();

    cy.contains("Sign in to Delek Homes").should("be.visible");
  });
});
