Feature: Login

  Scenario: Login with valid credentials
    Given I am on the "login" page
    When I enter "valid" username into the username field
    Then Username must be entered to the field
    When I enter "valid" password into the password field
    Then Password must be entered to the field
    When I click on the submit button in the login page
    Then I should be on the "inventory" page
    And I should see the products and carts sections

  Scenario: Login with invalid password
    Given I am on the "login" page
    When I enter "valid" username into the username field
    Then Username must be entered to the field
    When I enter "invalid" password into the password field
    Then Password must be entered to the field
    When I click on the submit button in the login page
    Then I should see the "Epic sadface: Username and password do not match any user in this service" error message on the login page
    And Username and password fields must be highlighted with red color

  Scenario: Login with invalid username
    Given I am on the "login" page
    When I enter "invalid" username into the username field
    Then Username must be entered to the field
    When I enter "valid" password into the password field
    Then Password must be entered to the field
    When I click on the submit button in the login page
    Then I should see the "Epic sadface: Username and password do not match any user in this service" error message on the login page
    And Username and password fields must be highlighted with red color

  Scenario: Login with invalid username and password
    Given I am on the "login" page
    When I enter "invalid" username into the username field
    Then Username must be entered to the field
    When I enter "invalid" password into the password field
    Then Password must be entered to the field
    When I click on the submit button in the login page
    Then I should see the "Epic sadface: Username and password do not match any user in this service" error message on the login page
    And Username and password fields must be highlighted with red color
#
  Scenario: Login with empty username and password fields
    Given I am on the "login" page
    When I click on the submit button in the login page
    Then I should see the "Epic sadface: Username is required" error message on the login page
    And Username and password fields must be highlighted with red color

  Scenario: Logout
    Given I am logged in to my account
    When I click on the menu button on the inventory page
    Then I should see the logout button in the menu
    When I click on the logout button in the menu
    Then I should be on the "login" page
    And Username and password fields must be empty

  Scenario: Login with locked user
    Given I am on the "login" page
    When I enter "locked user" username into the username field
    Then Username must be entered to the field
    When I enter "valid" password into the password field
    Then Password must be entered to the field
    When I click on the submit button in the login page
    Then I should see the "Epic sadface: Sorry, this user has been locked out." error message on the login page