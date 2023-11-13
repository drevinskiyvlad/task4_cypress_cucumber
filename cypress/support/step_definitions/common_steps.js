import {Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import data from '../../fixtures/data.json';

const {LoginPage} = require('../../e2e/pageobjects/login.page');
const {InventoryPage} = require('../../e2e/pageobjects/inventory.page');
const {CartPage} = require('../../e2e/pageobjects/cart.page');
const {ProductPage} = require('../../e2e/pageobjects/product.page');
const {CheckoutStepOnePage} = require('../../e2e/pageobjects/checkout_step_one.page');
const {CheckoutStepTwoPage} = require('../../e2e/pageobjects/checkout_step_two.page');
const {CheckoutCompletePage} = require('../../e2e/pageobjects/checkout_complete.page');


const pages = {
    login: LoginPage,
    inventory: InventoryPage,
    cart: CartPage,
    product: ProductPage,
    checkout_step_one: CheckoutStepOnePage,
    checkout_step_two: CheckoutStepTwoPage,
    checkout_complete: CheckoutCompletePage
}

Given(/^I am on the "([^"]*)" page$/, function (page) {
    pages[page].visit();
});

Given(/^I am logged in to my account$/, function () {
    LoginPage.visit();
    LoginPage.login(data.valid_username, data.valid_password);
    LoginPage.clickSubmitButton();
});

Then(/^I should be on the "([^"]*)" page$/, function (page) {
    pages[page].verify();
});
