import { BasePage } from './BasePage';

class CheckoutCompletePage extends BasePage {
  readonly PAGE_TITLE = 'Checkout: Complete!';
  readonly BACK_HOME_BUTTON_TEXT = 'Back Home';
  readonly THANK_YOU_MESSAGE_HEADER = 'Thank you for your order!';
  readonly THANK_YOU_MESSAGE_TEXT =
    'Your order has been dispatched, and will arrive just as fast as the pony can get there!';

  successIcon() {
    return cy.get('.pony_express');
  }

  thankYouMessageHeader() {
    return cy.get('[data-test="complete-header"]');
  }

  thankYouMessageText() {
    return cy.get('[data-test="complete-text"]');
  }

  backHomeButton() {
    return cy.get('[data-test="back-to-products"]');
  }
}

export const checkoutCompletePage = new CheckoutCompletePage();
