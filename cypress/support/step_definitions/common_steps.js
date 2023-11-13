import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import data from '../../fixtures/data.json';
const {LoginPage} = require('../../e2e/pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the "([^"]*)" page$/, function (page) {
    pages[page].visit();
});

Given(/^I am logined to account$/, function () {
    LoginPage.visit();
    LoginPage.login(data.valid_username, data.valid_password);
    LoginPage.clickSubmitButton();
});

Then(/^I should be on the "([^"]*)" page$/, function (title) {
    cy.title().should("eq", title);
});
