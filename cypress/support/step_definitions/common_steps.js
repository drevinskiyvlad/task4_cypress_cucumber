import {Given} from "cypress-cucumber-preprocessor/steps";

const {LoginPage} = require('../../e2e/pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the "([^"]*)" page$/, function (page) {
    pages[page].visit()
});