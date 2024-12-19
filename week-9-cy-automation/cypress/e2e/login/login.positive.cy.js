import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import user from "../../fixtures/testData/userCredentials.json"


describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Login").click()

  });

  it("Should log in with existing account as a user", () => {
    loginPage.login(user.email, user.password);

    dashboardPage.fullUserNm.should("have.text", "Yuliia  Kuzmenko");
    dashboardPage.roleLbl.should("have.text", "role: realtor");
    cy.title().should("eq", "User: Profile | Delek Homes");
    dashboardPage.userIconBtn.click();
    dashboardPage.userEmail.should("have.text", "ynevmyvaka@gmail.com");

  });
});