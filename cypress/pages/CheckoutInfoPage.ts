import { BasePage } from './BasePage';

class CheckoutInfoPage extends BasePage {
  readonly PAGE_TITLE = 'Checkout: Your Information';
  readonly CANCEL_BUTTON_TEXT = 'Cancel';
  readonly CONTINUE_BUTTON_TEXT = 'Continue';

  firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  continueButton() {
    return cy.get('[data-test="continue"]');
  }
}

export const checkoutInfoPage = new CheckoutInfoPage();
