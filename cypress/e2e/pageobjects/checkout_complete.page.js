const CheckoutCompletePage = {

    getCompleteText: () => cy.get('h2.complete-header'),
    getContainer: () => cy.get('#checkout_complete_container'),
    clickBackHomeButton: () => cy.get('#back-to-products').click(),

    visit: () => cy.visit('/checkout-complete.html'),
    verify: () => CheckoutCompletePage.getContainer().should('be.visible'),
}

module.exports = {CheckoutCompletePage};
