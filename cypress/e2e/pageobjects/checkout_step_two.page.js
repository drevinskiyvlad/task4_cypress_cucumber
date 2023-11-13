const CheckoutStepTwoPage = {

    visit: () => cy.visit('/checkout-step-two.html'),
    getItemLabel: () => cy.get('.inventory_item_name'),
    clickSubmitButton: () => cy.get('#finish').click(),

    verify: () => {
        CheckoutStepTwoPage.getItemLabel().should('be.visible')
    },
}

module.exports = { CheckoutStepTwoPage };
