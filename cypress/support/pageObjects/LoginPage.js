class LoginPage {
  elements = {
    username: () => cy.get('input[name="username"]'),
    password: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get(".oxd-alert-content-text"),
    requiredMessage: () => cy.get(".oxd-input-field-error-message"),
  };

  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  typeUsername(username) {
    this.elements.username().clear().type(username);
  }

  typePassword(password) {
    this.elements.password().clear().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }
}

export default new LoginPage();
