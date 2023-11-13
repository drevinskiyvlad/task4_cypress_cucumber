import Page from './page.js';

class CheckoutCompletePage extends Page {

    completeText = cy.get('h2.complete-header')
    backHomeButton = cy.get('#back-to-products')

    open() {
        return super.open('checkout-complete');
    }
}

export default new CheckoutCompletePage();
