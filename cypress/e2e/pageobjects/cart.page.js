const CartPage = {

    getCartList: () => cy.get('.cart_list'),
    getCartItems: () => cy.get('.cart_item'),
    getItemLabel: () => cy.get('.inventory_item_name:last-of-type'),
    clickCheckoutButton: () => cy.get('#checkout').click(),

    visit: () => cy.visit('/inventory.html'),
    verify: () => CartPage.getCartList().should('be.visible'),
}

module.exports = {CartPage};