import {Then, When} from "cypress-cucumber-preprocessor/steps";
import data from '/cypress/fixtures/data.json';
const {Faker} = require('/cypress/helper/faker.js');

const {LoginPage} = require('../../e2e/pageobjects/login.page');

When(/^I click on the submit button in the login page$/, function  () {
    LoginPage.clickSubmitButton();
});

Then(/^I should see the "([^"]*)" error message on the login page$/, function  (message) {
    LoginPage.getErrorMessage().should("contain.text", message);
});
Then(/^Username and password fields must be highlighted with red color$/, function () {
    LoginPage.getUsernameInput().should("have.css", "border-bottom-color", "rgb(226, 35, 26)");
    LoginPage.getPasswordInput().should("have.css", "border-bottom-color", "rgb(226, 35, 26)");
});
When(/^I enter "([^"]*)" username into the username field$/, function (value) {
    if(value === "valid") {
        LoginPage.getUsernameInput().type(data.valid_username);
    } else if(value === "invalid") {
        LoginPage.getUsernameInput().type(Faker.generateRandomString(8));
    }
});