import { BasePage } from './BasePage';

class CartPage extends BasePage {
  readonly PAGE_TITLE = 'Your Cart';
  readonly REMOVE_BUTTON_TEXT = 'Remove';
  readonly CHECKOUT_BUTTON_TEXT = 'Checkout';
  readonly CONTINUE_SHOPPING_BUTTON_TEXT = 'Continue Shopping';

  cartItem() {
    return cy.get('.cart_item');
  }

  itemQuantity() {
    return cy.get('.cart_quantity');
  }

  itemName() {
    return cy.get('.inventory_item_name');
  }

  itemDescription() {
    return cy.get('.inventory_item_desc');
  }

  itemPrice() {
    return cy.get('.inventory_item_price');
  }

  removeButton() {
    return cy.get('.cart_button');
  }

  checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }
}

export const cartPage = new CartPage();
