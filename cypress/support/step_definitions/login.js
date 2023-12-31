import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import data from '../../fixtures/data.json';

const {Faker} = require('../../helper/faker.js');
const {LoginPage} = require('../../e2e/pageobjects/login.page');
const {InventoryPage} = require('../../e2e/pageobjects/inventory.page');

When(/^I click on the submit button in the login page$/, function () {
    LoginPage.clickSubmitButton();
});
Then(/^Username and password fields must be highlighted with red color$/, function () {
    LoginPage.getUsernameInput().should("have.css", "border-bottom-color", "rgb(226, 35, 26)");
    LoginPage.getPasswordInput().should("have.css", "border-bottom-color", "rgb(226, 35, 26)");
});
When(/^I enter "([^"]*)" username into the username field$/, function (value) {
    switch (value) {
        case "valid":
            LoginPage.enterUsername(data.valid_username);
            break;
        case "invalid":
            LoginPage.enterUsername(Faker.generateRandomString(8));
            break;
        case "locked user":
            LoginPage.enterUsername(data.locked_out_user);
            break;
    }
});
When(/^I enter "([^"]*)" password into the password field$/, function (value) {
    if (value === "valid") {
        LoginPage.enterPassword(data.valid_password);
    } else if (value === "invalid") {
        LoginPage.enterPassword(Faker.generateRandomString(8));
    }
});
Then(/^Username must be entered to the field$/, function () {
    LoginPage.getUsernameInput().should("not.have.value", "");
});
Then(/^Password must be entered to the field$/, function () {
    LoginPage.getPasswordInput().should("not.have.value", "");
});
Then(/^I should see the products and carts sections$/, function () {
    InventoryPage.verify();
});
Then(/^Username and password fields must be empty$/, function () {
    LoginPage.getUsernameInput().should("have.value", "");
    LoginPage.getPasswordInput().should("have.value", "");
});
When(/^I click on the menu button on the inventory page$/, function () {
    InventoryPage.clickMenuButton();
});
Then(/^I should see the logout button in the menu$/, function () {
    InventoryPage.getLogoutButton().should("be.visible");
});
When(/^I click on the logout button in the menu$/, function () {
    InventoryPage.clickLogoutButton();
});
Then(/^I should see the "([^"]*)" error message on the login page$/, function (message) {
    LoginPage.getErrorMessage().should("contain.text", message);
});