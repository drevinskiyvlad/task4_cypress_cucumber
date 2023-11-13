const CheckoutCompletePage = {

    visit: () => cy.visit('/checkout-complete.html'),
    getCompleteText: () => cy.get('h2.complete-header'),
    clickBackHomeButton: () => cy.get('#back-to-products').click(),
    getContainer: () => cy.get('#checkout_complete_container'),

    verify: () => {
        CheckoutCompletePage.getContainer().should('be.visible')
    },
}

module.exports = { CheckoutCompletePage };
