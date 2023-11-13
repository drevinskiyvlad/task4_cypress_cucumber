const CheckoutStepTwoPage = {

    getItemLabel: () => cy.get('.inventory_item_name'),
    clickSubmitButton: () => cy.get('#finish').click(),

    visit: () => cy.visit('/checkout-step-two.html'),
    verify: () => CheckoutStepTwoPage.getItemLabel().should('be.visible'),
}

module.exports = {CheckoutStepTwoPage};
