import Page from './page.js';

class CheckoutStepTwoPage extends Page {

    itemLabel = cy.get('.inventory_item_name')
    submitButton = cy.get('#finish')

    open() {
        return super.open('checkout-step-two.html');
    }
}

export default new CheckoutStepTwoPage();
