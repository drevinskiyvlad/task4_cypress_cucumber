import Page from './page.js';

class CartPage extends Page {

    itemLabel = cy.get('.inventory_item_name:last-of-type')
    checkoutButton = cy.get('#checkout')
    errorMessage = cy.get('#error')

    open() {
        return super.open('cart.html');
    }
}

export default new CartPage();
