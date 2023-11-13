import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {CartPage} from "../../e2e/pageobjects/cart.page";
import {CheckoutStepOnePage} from "../../e2e/pageobjects/checkout_step_one.page";
import {CheckoutStepTwoPage} from "../../e2e/pageobjects/checkout_step_two.page";
import {CheckoutCompletePage} from "../../e2e/pageobjects/checkout_complete.page";
import data from '../../fixtures/data.json';
import {InventoryPage} from "../../e2e/pageobjects/inventory.page";


When(/^I click on the checkout button at cart page$/, function () {
    CartPage.clickCheckoutButton();
});
When(/^I enter first name into first name field$/, function () {
    CheckoutStepOnePage.enterFirstName(data.valid_first_name);
});
When(/^I enter last name into last name field$/, function () {
    CheckoutStepOnePage.enterLastName(data.valid_last_name);
});
When(/^I enter postal code into postal code field$/, function () {
    CheckoutStepOnePage.enterPostalCode(data.valid_postal_code);
});
When(/^I click on the continue button on the checkout step one page$/, function () {
    CheckoutStepOnePage.clickSubmitButton();
});
When(/^I click on the finish button on the checkout step two page$/, function () {
    CheckoutStepTwoPage.clickSubmitButton();
});
Then(/^I see the "([^"]*)" message$/, function (message) {
    CheckoutCompletePage.getCompleteText().should('contain.text', message);
});
When(/^I click on the "([^"]*)" button$/, function () {
    CheckoutCompletePage.clickBackHomeButton();
});
Then(/^Cart item number must be (\d+)$/, function () {
    InventoryPage.getShoppingCartBadge().should('not.exist');
});
Then(/^Fist name Last name and Postal code fields must be highlighted with red color$/, function () {
    CheckoutStepOnePage.getFirstNameInput().should("have.css", "border-bottom-color", "rgb(226, 35, 26)");
    CheckoutStepOnePage.getLastNameInput().should("have.css", "border-bottom-color", "rgb(226, 35, 26)");
    CheckoutStepOnePage.getPostalCodeInput().should("have.css", "border-bottom-color", "rgb(226, 35, 26)");
});
Then(/^I see the "([^"]*)" error message on the checkout step one page$/, function (message) {
    CheckoutStepOnePage.getErrorMessage().should("contain.text", message);
});