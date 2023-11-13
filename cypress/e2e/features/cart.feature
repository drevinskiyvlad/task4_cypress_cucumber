Feature: Cart

  Scenario: Remove item from cart
    Given I am logined into account
    And I am on the "inventory" page
    When I click "Add to cart" button near the "Sauce Labs Backpack" item
    Then Cart item number must be increased by 1
    When I click "Remove" button near the first item
    Then Cart item number must be decreased by 1
    When I click on the "cart" button at the top right corner
    Then I should be on the "Cart" page
    And Product list shouldn`t have "Sauce Labs Backpack" item

  Scenario: Saving the card after logout
    Given I am logined into account
    And I am on the "inventory" page
    When I click "Add to cart" button near the "Sauce Labs Backpack" item
    Then Cart item number must be increased by 1
    When I click on the "cart" button at the top right corner
    Then I should be on the "Cart" page
    And "Sauce Labs Backpack" item should be in the cart
    When I click on the "menu" button at the top left corner
    And I click on the "logout" button
    Then I should be on the "login" page
    When I enter "valid" username into the username field
    And I enter "valid" password into the password field
    And I click on the "login" button in the login page
    Then I should be on the "inventory" page
    When I click on the "cart" button at the top right corner
    Then I should be on the "Cart" page
    And "Sauce Labs Backpack" item should be in the cart