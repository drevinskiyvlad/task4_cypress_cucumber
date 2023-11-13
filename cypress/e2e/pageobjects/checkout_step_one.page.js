import Page from './page.js';

class CheckoutStepOnePage extends Page {

    checkoutForm = cy.get('#checkout_info_container')
    firstNameInput = cy.get('#first-name')
    lastNameInput = cy.get('#last-name')
    postalCodeInput = cy.get('#postal-code')
    submitButton = cy.get('#continue')
    errorMessage = cy.get('.error h3')

    async enterData(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    open() {
        return super.open('checkout-step-one.html');
    }
}

export default new CheckoutStepOnePage();
