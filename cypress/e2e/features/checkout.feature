Feature: Checkout

  Background:
    Given I am logged in to my account
    When I click add to cart button near the first item
    Then Cart item number must be increased by 1
    When I click on the cart button at the top right corner
    Then I should be on the "cart" page
    When I click on the checkout button at cart page
    Then I should be on the "checkout_step_one" page

  Scenario: Checkout with valid credentials
    When I enter first name into first name field
    And I enter last name into last name field
    And I enter postal code into postal code field
    And I click on the continue button on the checkout step one page
    Then I should be on the "checkout_step_two" page
    When I click on the finish button on the checkout step two page
    Then I should be on the "checkout_complete" page
    And I see the "Thank you for your order!" message
    When I click on the "back home" button
    Then I should be on the "inventory" page
    And Cart item number must be 0

  Scenario: Checkout without first name
    When I enter last name into last name field
    And I enter postal code into postal code field
    And I click on the continue button on the checkout step one page
    Then Fist name Last name and Postal code fields must be highlighted with red color
    And I see the "Error: First Name is required" error message on the checkout step one page

  Scenario: Checkout without last name
    When I enter first name into first name field
    And I enter postal code into postal code field
    And I click on the continue button on the checkout step one page
    Then Fist name Last name and Postal code fields must be highlighted with red color
    And I see the "Error: Last Name is required" error message on the checkout step one page

  Scenario: Checkout without postal code
    When I enter first name into first name field
    And I enter last name into last name field
    And I click on the continue button on the checkout step one page
    Then Fist name Last name and Postal code fields must be highlighted with red color
    And I see the "Error: Postal Code is required" error message on the checkout step one page

  Scenario: Checkout with empty fields
    And I click on the continue button on the checkout step one page
    Then Fist name Last name and Postal code fields must be highlighted with red color
    And I see the "Error: First Name is required" error message on the checkout step one page