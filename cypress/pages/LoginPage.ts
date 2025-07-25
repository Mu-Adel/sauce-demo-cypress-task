class LoginPage {
  username() {
    return cy.get('[data-test="username"]');
  }

  password() {
    return cy.get('[data-test="password"]');
  }

  loginButton() {
    return cy.get('[data-test="login-button"]');
  }
}

export const loginPage = new LoginPage();
