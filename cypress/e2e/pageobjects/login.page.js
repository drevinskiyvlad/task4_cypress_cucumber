const LoginPage = {
    visit: () => cy.visit('/'),
    getErrorMessage: () => cy.get('[data-test="error"]'),
    getUsernameInput: () => cy.get('#user-name'),
    getPasswordInput: () => cy.get('#password'),
    clickSubmitButton: () => cy.get('input[type="submit"]').click(),

    verify: () => {
        LoginPage.getUsernameInput().should('be.visible')
        LoginPage.getPasswordInput().should('be.visible')
    },

    login: (username, password) => {
        LoginPage.getUsernameInput().type(username);
        LoginPage.getPasswordInput().type(password);
    },
};

module.exports = { LoginPage };