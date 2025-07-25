import { BasePage } from './BasePage';

class ProductsPage extends BasePage {
  readonly PAGE_TITLE = 'Products';
  readonly ADD_TO_CART_BUTTON_TEXT = 'Add to cart';
  readonly REMOVE_BUTTON_TEXT = 'Remove';

  productItem() {
    return cy.get('.inventory_item');
  }

  productImage() {
    return cy.get('.inventory_item_img');
  }

  productName() {
    return cy.get('.inventory_item_name');
  }

  productDescription() {
    return cy.get('.inventory_item_desc');
  }

  productPrice() {
    return cy.get('.inventory_item_price');
  }

  addToCartButton() {
    return cy.get('.pricebar .btn_inventory');
  }
}

export const productsPage = new ProductsPage();
