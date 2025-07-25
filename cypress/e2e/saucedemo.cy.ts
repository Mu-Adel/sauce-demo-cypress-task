import { cartPage, checkoutCompletePage, checkoutInfoPage, checkoutOverviewPage, productsPage } from '../pages';

describe('Sauce Demo E2E Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login();
    productsPage.pageTitle().should('be.visible').and('have.text', productsPage.PAGE_TITLE);
  });

  it('should allow a user to select 3 random items and checkout', () => {
    productsPage
      .productItem()
      .its('length')
      .then(itemCount => {
        const randomIndices = Cypress._.sampleSize(
          Array.from({ length: itemCount }, (_, i) => i),
          3
        );
        randomIndices.forEach((item, i) => {
          productsPage.addToCartButton().eq(item).should('have.text', productsPage.ADD_TO_CART_BUTTON_TEXT);
          productsPage.addToCartButton().eq(item).click();
          productsPage.addToCartButton().eq(item).should('have.text', productsPage.REMOVE_BUTTON_TEXT);
          productsPage.header
            .cartButtonBadge()
            .should('be.visible')
            .and('have.text', i + 1);
        });
      });
    productsPage.header.cartButton().click();

    cartPage.pageTitle().should('be.visible').and('have.text', cartPage.PAGE_TITLE);
    cartPage.cartItem().should('be.visible').and('have.length', 3);
    cartPage.checkoutButton().should('have.text', cartPage.CHECKOUT_BUTTON_TEXT).click();

    checkoutInfoPage.pageTitle().should('be.visible').and('have.text', checkoutInfoPage.PAGE_TITLE);
    checkoutInfoPage.firstNameInput().type('Test');
    checkoutInfoPage.lastNameInput().type('User');
    checkoutInfoPage.postalCodeInput().type('12345');
    checkoutInfoPage.continueButton().click();

    checkoutOverviewPage.pageTitle().should('be.visible').and('have.text', checkoutOverviewPage.PAGE_TITLE);
    checkoutOverviewPage.productItem().should('be.visible').and('have.length', 3);
    checkoutOverviewPage
      .itemTotalValue()
      .invoke('text')
      .then(itemTotal => {
        const itemTotalValue = parseFloat(itemTotal.split('$')[1]);
        checkoutOverviewPage
          .taxValue()
          .invoke('text')
          .then(tax => {
            const taxValue = parseFloat(tax.split('$')[1]);
            checkoutOverviewPage
              .totalValue()
              .invoke('text')
              .then(total => {
                const totalValue = parseFloat(total.split('$')[1]);
                expect(totalValue).to.equal(itemTotalValue + taxValue);
              });
          });
      });
    checkoutOverviewPage.finishButton().should('have.text', checkoutOverviewPage.FINISH_BUTTON_TEXT).click();

    checkoutCompletePage.pageTitle().should('be.visible').and('have.text', checkoutCompletePage.PAGE_TITLE);
    checkoutCompletePage.thankYouMessageHeader().should('have.text', checkoutCompletePage.THANK_YOU_MESSAGE_HEADER);
    checkoutCompletePage.thankYouMessageText().should('have.text', checkoutCompletePage.THANK_YOU_MESSAGE_TEXT);
  });
});
