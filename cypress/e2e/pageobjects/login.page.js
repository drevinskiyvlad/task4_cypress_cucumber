const LoginPage = {

    getErrorMessage: () => cy.get('[data-test="error"]'),
    getUsernameInput: () => cy.get('#user-name'),
    getPasswordInput: () => cy.get('#password'),
    clickSubmitButton: () => cy.get('input[type="submit"]').click(),


    enterUsername: (username) =>
        LoginPage.getUsernameInput().type(username),
    enterPassword: (password) =>
        LoginPage.getPasswordInput().type(password),

    login: (username, password) => {
        LoginPage.getUsernameInput().type(username);
        LoginPage.getPasswordInput().type(password);
    },

    visit: () => cy.visit('/'),
    verify: () => LoginPage.getUsernameInput().should('be.visible'),
};

module.exports = {LoginPage};