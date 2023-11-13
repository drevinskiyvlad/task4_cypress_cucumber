import Page from './page.js';

class LoginPage extends Page {

    inputUsername = cy.get('#user-name')
    inputPassword = cy.get('#password')
    inputUsernameCrossSign = cy.get('.form_group #user-name+svg.error_icon')
    inputPasswordCrossSign = cy.get('.form_group #password+svg.error_icon')
    errorMessage = cy.get('.error-message-container.error h3')
    submitButton = cy.get('input[type="submit"]')


    open() {
        return super.open('');
    }
}

export default new LoginPage();
