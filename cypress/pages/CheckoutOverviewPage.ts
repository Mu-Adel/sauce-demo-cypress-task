import { BasePage } from './BasePage';

class CheckoutOverviewPage extends BasePage {
  readonly PAGE_TITLE = 'Checkout: Overview';
  readonly CANCEL_BUTTON_TEXT = 'Cancel';
  readonly FINISH_BUTTON_TEXT = 'Finish';

  productItem() {
    return cy.get('.cart_item');
  }

  paymentInfoLabel() {
    return cy.get('[data-test="payment-info-label"]');
  }

  paymentInfoValue() {
    return cy.get('[data-test="payment-info-value"]');
  }

  shippingInfoLabel() {
    return cy.get('[data-test="shipping-info-label"]');
  }

  shippingInfoValue() {
    return cy.get('[data-test="shipping-info-value"]');
  }

  priceTotalLabel() {
    return cy.get('[data-test="total-info-label"]');
  }

  itemTotalValue() {
    return cy.get('[data-test="subtotal-label"]');
  }

  taxValue() {
    return cy.get('[data-test="tax-label"]');
  }

  totalValue() {
    return cy.get('[data-test="total-label"]');
  }

  finishButton() {
    return cy.get('[data-test="finish"]');
  }
}

export const checkoutOverviewPage = new CheckoutOverviewPage();
