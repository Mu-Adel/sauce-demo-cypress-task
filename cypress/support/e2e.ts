import './commands';
import 'cypress-mochawesome-reporter/register';

beforeEach(() => {
  /* This request sometimes hangs and takes a long time to resolve
    slowing the load of the page as the page load event wont fire till all page resources are loaded
    so we can intercept it and destroy it to load the page much faster and eliminate flakiness */
  cy.intercept('GET', '**/aFTR7PB1QTsUX8KYvumzEYOtbYf-Vlg.woff2', req => {
    req.destroy();
  });
});
