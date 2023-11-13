Feature: Checkout

  Scenario: Checkout with valid credentials
    Given I am logined to account
    And I am on the "inventory" page
    When I add "Sauce Labs Backpack" to cart
    Then Cart item number must be "increased" by "1"
    When I click on the cart icon
    Then I am on the "cart" page
    When I click on the "checkout" button
    Then I am on the "checkout-step-one" page
    When I fill the first-name field with "valid" first name
    And I fill the last-name field with "valid" last name
    And I fill the postal-code field with "valid" postal code
    And I click on the "continue" button
    Then I am on the "checkout-step-two" page
    When I click on the "finish" button
    Then I am on the "checkout-complete" page
    And I see the "checkout-complete" message
    When I click on the "back home" button
    Then I am on the "inventory" page
    And Cart item number must be 0

  Scenario: Checkout without first name
    Given I am logined to account
    And I am on the "checkout-step-one" page
    When I fill the last-name field with "valid" last name
    And I fill the postal-code field with "valid" postal code
    And I click on the "continue" button
    Then "Fist name" "Last name" and "Postal code" fields must be highlighted with "red" color
    And I see the "empty first name" error message

  Scenario: Checkout without last name
    Given I am logined to account
    And I am on the "checkout-step-one" page
    When I fill the first-name field with "valid" first name
    And I fill the postal-code field with "valid" postal code
    And I click on the "continue" button
    Then "Fist name" "Last name" and "Postal code" fields must be highlighted with "red" color
    And I see the "empty last name" error message

  Scenario: Checkout without postal code
    Given I am logined to account
    And I am on the "checkout-step-one" page
    When I fill the first-name field with "valid" first name
    And I fill the last-name field with "valid" last name
    And I click on the "continue" button
    Then "Fist name" "Last name" and "Postal code" fields must be highlighted with "red" color
    And I see the "empty postal code" error message

  Scenario: Checkout with empty fields
    Given I am logined to account
    And I am on the "checkout-step-one" page
    When I click on the "continue" button
    Then "Fist name" "Last name" and "Postal code" fields must be highlighted with "red" color
    And I see the "empty first name" error message