Feature: Cart

  Background:
    Given I am logged in to my account
    When I click add to cart button near the first item
    Then Cart item number must be increased by 1


  Scenario: Remove item from cart from inventory page
    When I click "Remove" button near the first item
    Then Cart item number must be decreased by 1
    When I click on the cart button at the top right corner
    Then I should be on the "cart" page
    And Product list shouldn`t have any items

  Scenario: Remove item from cart from the product details
    When I click to the title of the first product
    Then I should be on the "product" page
    When I click remove button on the product page
    Then Cart item number must be decreased by 1
    When I click on the cart button at the top right corner
    Then I should be on the "cart" page
    And Product list shouldn`t have any items

  Scenario: Saving the card after logout
    When I click on the cart button at the top right corner
    Then I should be on the "cart" page
    And "Sauce Labs Backpack" item should be in the cart
    When I click on the menu button on the inventory page
    Then I should see the logout button in the menu
    When I click on the logout button in the menu
    Then I should be on the "login" page
    When I enter "valid" username into the username field
    And I enter "valid" password into the password field
    And I click on the submit button in the login page
    Then I should be on the "inventory" page
    When I click on the cart button at the top right corner
    Then I should be on the "cart" page
    And "Sauce Labs Backpack" item should be in the cart