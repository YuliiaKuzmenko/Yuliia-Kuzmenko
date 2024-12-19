import { faker } from "@faker-js/faker";

import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameInpt.type("Yuliia");
    registrationPage.lastNameInpt.type("Kuzmenko");
    registrationPage.emailInpt.type(email);
    registrationPage.passwordInpt.type(password);
    registrationPage.submitBtn.click();

    //Verify user role, name, url and page title
    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.fullNameLbl.should("have.text", "Yuliia  Kuzmenko");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");

    //Click user icon and logout button
    dashboardPage.userIconBtn.click();
    dashboardPage.logoutBtn.click();

    //Click login btn and login with new user
    loginPage.loginBtn.click();
    loginPage.login(email, password);

    //Verify user role and title
    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.fullNameLbl.should("have.text", "Yuliia  Kuzmenko");
  });
});