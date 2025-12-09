describe("Tugas Materi 16 Azriel FachrulRezy (Intercept) ", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("LOGIN - 01 | Login valid", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");

    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary").its("response.statusCode").should("eq", 200);
  });

  it("LOGIN - 07 | Responsif mobile (375px)", () => {
    cy.viewport(375, 812);
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");

    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary").its("response.statusCode").should("eq", 200);
  });

  it("LOGIN - 08 | Responsif tablet (768px)", () => {
    cy.viewport(768, 1024);
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");

    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary").its("response.statusCode").should("eq", 200);
  });

  it("LOGIN - 09 | Responsif desktop (1280px)", () => {
    cy.viewport(1280, 800);
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");

    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary").its("response.statusCode").should("eq", 200);
  });

  it("LOGIN - 16 | Refresh browser lalu login", () => {
    cy.reload();
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");

    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary").its("response.statusCode").should("eq", 200);
  });

  it("LOGIN - 17 | Login dengan slow typing", () => {
    cy.get('input[name="username"]').type("Admin", { delay: 250 });
    cy.get('input[name="password"]').type("admin123", { delay: 250 });

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");

    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary").its("response.statusCode").should("eq", 200);
  });

  it("LOGIN - 18 | Login menggunakan tombol Enter", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123{enter}");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");

    cy.wait("@actionSummary").its("response.statusCode").should("eq", 200);
  });
});
