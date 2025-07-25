import { loginPage } from '../pages';

Cypress.Commands.add('login', (username, password) => {
  cy.fixture('credentials.json').then(credentials => {
    loginPage.username().type(username ?? credentials.username);
    loginPage.password().type(password ?? credentials.password);
    loginPage.loginButton().click();
  });
});
