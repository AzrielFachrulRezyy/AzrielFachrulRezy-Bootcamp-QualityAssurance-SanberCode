describe("QUIZ 3 Sanbercode - Quailty Assurance - Azriel FachrulRezy", () => {
  const url =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  beforeEach(() => {
    cy.visit(url);
  });

  it("LOGIN - 01 | Login valid", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("LOGIN - 02 | Tanpa password", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('button[type="submit"]').click();
    cy.contains("Required").should("be.visible");
  });

  it("LOGIN - 03 | Tanpa username", () => {
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Required").should("be.visible");
  });

  it("LOGIN - 04 | Password salah", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin001");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("LOGIN - 05 | Username salah", () => {
    cy.get('input[name="username"]').type("AdminXYZ");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("LOGIN - 06 | Kedua field kosong", () => {
    cy.get('button[type="submit"]').click();
    cy.contains("Required").should("be.visible");
  });

  it("LOGIN - 07 | Responsif mobile (375px)", () => {
    cy.viewport(375, 812);
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("LOGIN - 08 | Responsif tablet (768px)", () => {
    cy.viewport(768, 1024);
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("LOGIN - 09 | Responsif desktop (1280px)", () => {
    cy.viewport(1280, 800);
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("LOGIN - 10 | Placeholder username benar", () => {
    cy.get('input[name="username"]').should(
      "have.attr",
      "placeholder",
      "Username"
    );
  });

  it("LOGIN - 11 | Placeholder password benar", () => {
    cy.get('input[name="password"]').should(
      "have.attr",
      "placeholder",
      "Password"
    );
  });

  it("LOGIN - 12 | Tombol Login tampil & enabled", () => {
    cy.get('button[type="submit"]').should("be.visible").and("not.be.disabled");
  });

  it("LOGIN - 13 | Logo OrangeHRM tampil", () => {
    cy.get('img[alt="company-branding"]').should("be.visible");
  });

  it("LOGIN - 14 | Password masking", () => {
    cy.get('input[name="password"]').should("have.attr", "type", "password");
  });

  it("LOGIN - 15 | Error tidak muncul lebih dari satu", () => {
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-field-error-message")
      .its("length")
      .should("be.greaterThan", 0);
  });

  it("LOGIN - 16 | Refresh browser lalu login", () => {
    cy.reload();
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("LOGIN - 17 | Login dengan slow typing", () => {
    cy.get('input[name="username"]').type("Admin", { delay: 250 });
    cy.get('input[name="password"]').type("admin123", { delay: 250 });
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("LOGIN - 18 | Login menggunakan tombol Enter", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123{enter}");
    cy.url().should("include", "/dashboard");
  });
});
