const LoginPage = {
    visit: () => cy.visit('/'),
    getErrorMessage: () => cy.get('.error-message-container.error h3'),
    getUsernameInput: () => cy.get('#user-name'),
    getPasswordInput: () => cy.get('#password'),
    clickSubmitButton: () => cy.get('input[type="submit"]').click(),

    login: (username, password) => {
        LoginPage.getUsernameInput().type(username);
        LoginPage.getPasswordInput().type(password);
    },
};

module.exports = { LoginPage };