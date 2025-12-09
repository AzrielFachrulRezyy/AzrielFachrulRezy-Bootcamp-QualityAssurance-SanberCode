const loginPage = require("/cypress/pages/LoginPage");
const data = require("/cypress/data/loginData");

describe("Azriel FachrulRezy - Tugas Materi 17 - Menggunakan Format POM", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("TC01 - Login valid berhasil", () => {
    loginPage.typeUsername(data.validUser.username);
    loginPage.typePassword(data.validUser.password);

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("dashboard");

    loginPage.clickLogin();
    cy.wait("@dashboard").its("response.statusCode").should("eq", 200);
  });

  it("TC02 - Password salah", () => {
    loginPage.typeUsername(data.invalidPassword.username);
    loginPage.typePassword(data.invalidPassword.password);
    loginPage.clickLogin();
    loginPage.elements.errorMessage().should("contain", "Invalid credentials");
  });

  it("TC03 - Username salah", () => {
    loginPage.typeUsername(data.invalidUsername.username);
    loginPage.typePassword(data.invalidUsername.password);
    loginPage.clickLogin();
    loginPage.elements.errorMessage().should("contain", "Invalid credentials");
  });

  it("TC04 - Username kosong", () => {
    loginPage.typePassword(data.emptyUser.password);
    loginPage.clickLogin();
    loginPage.elements.requiredMessage().should("be.visible");
  });

  it("TC05 - Password kosong", () => {
    loginPage.typeUsername(data.emptyPassword.username);
    loginPage.clickLogin();
    loginPage.elements.requiredMessage().should("be.visible");
  });

  it("TC06 - Kedua field kosong", () => {
    loginPage.clickLogin();
    loginPage.elements.requiredMessage().should("have.length.greaterThan", 0);
  });

  it("TC07 - Placeholder username benar", () => {
    loginPage.elements
      .username()
      .should("have.attr", "placeholder", "Username");
  });

  it("TC08 - Placeholder password benar", () => {
    loginPage.elements
      .password()
      .should("have.attr", "placeholder", "Password");
  });

  it("TC09 - Password masking", () => {
    loginPage.elements.password().should("have.attr", "type", "password");
  });

  it("TC10 - Tombol Login tampil & enabled", () => {
    loginPage.elements
      .loginButton()
      .should("be.visible")
      .and("not.be.disabled");
  });

  it("TC11 - Login menggunakan tombol Enter", () => {
    loginPage.typeUsername(data.validUser.username);
    loginPage.typePassword(data.validUser.password + "{enter}");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("dashboard");

    cy.wait("@dashboard").its("response.statusCode").should("eq", 200);
  });

  it("TC12 - Login responsif pada mobile (375px)", () => {
    cy.viewport(375, 812);

    loginPage.typeUsername(data.validUser.username);
    loginPage.typePassword(data.validUser.password);

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("dashboard");

    loginPage.clickLogin();
    cy.wait("@dashboard").its("response.statusCode").should("eq", 200);
  });
});
