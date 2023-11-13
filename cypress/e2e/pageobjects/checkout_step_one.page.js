const CheckoutStepOnePage = {

    getCheckoutForm: () => cy.get('#checkout_info_container'),
    getFirstNameInput: () => cy.get('#first-name'),
    getLastNameInput: () => cy.get('#last-name'),
    getPostalCodeInput: () => cy.get('#postal-code'),
    getErrorMessage: () => cy.get('.error h3'),
    clickSubmitButton: () => cy.get('#continue').click(),

    enterFirstName: (firstName) =>
        CheckoutStepOnePage.getFirstNameInput().type(firstName),
    enterLastName: (lastName) =>
        CheckoutStepOnePage.getLastNameInput().type(lastName),
    enterPostalCode: (postalCode) =>
        CheckoutStepOnePage.getPostalCodeInput().type(postalCode),

    visit: () => cy.visit('/checkout-step-one.html'),
    verify: () => CheckoutStepOnePage.getCheckoutForm().should('be.visible')
}

module.exports = {CheckoutStepOnePage};