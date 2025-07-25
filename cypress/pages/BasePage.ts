export abstract class BasePage {
  abstract readonly PAGE_TITLE: string;

  readonly header = new Header();

  pageTitle() {
    return cy.get('[data-test="title"]');
  }

  footer() {
    return cy.get('.[data-test="footer"]');
  }
}

class Header {
  logo() {
    return cy.get('.app_logo');
  }

  menuButton() {
    return cy.get('#react-burger-menu-btn');
  }

  cartButton() {
    return cy.get('.shopping_cart_link');
  }

  cartButtonBadge() {
    return cy.get('.shopping_cart_badge');
  }
}
