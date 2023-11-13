import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {CartPage} from "../../e2e/pageobjects/cart.page";
import {ProductPage} from "../../e2e/pageobjects/product.page";

const {InventoryPage} = require('../../e2e/pageobjects/inventory.page');

When(/^I click add to cart button near the first item$/, function () {
    InventoryPage.getAddToCartButton().first().click();
});
Then(/^Cart item number must be increased by 1$/, function () {
    InventoryPage.getShoppingCartBadge().should('contain.text', '1');
});
When(/^I click "([^"]*)" button near the first item$/, function () {
    InventoryPage.getRemoveFromCartButton().first().click();
});
Then(/^Cart item number must be decreased by 1$/, function () {
    InventoryPage.getShoppingCartBadge().should('not.exist');
});
When(/^I click on the cart button at the top right corner$/, function () {
    InventoryPage.clickCartButton();
});
Then(/^Product list shouldn`t have any items$/, function () {
    CartPage.getCartItems().should('not.exist');
});
When(/^I click to the title of the first product$/, function () {
    InventoryPage.clickItemLink().first().click();
});
When(/^I click remove button on the product page$/, function () {
    ProductPage.clickRemoveButton();
});
Then(/^"([^"]*)" item should be in the cart$/, function (title) {
    CartPage.getItemLabel().should('contain.text', title);
});