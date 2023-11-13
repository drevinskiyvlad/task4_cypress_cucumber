Feature: Login

  Scenario: Login with valid credentials
    Given I am on the "login" page
    When I enter valid username into the username field
    Then Username must be entered to the field
    When I enter valid password into the password field
    Then Password must be entered to the field
    When I click on the "login" button in the login page
    Then I should be on the "inventory" page
    And I should see the "products" and "carts" sections

  Scenario: Login with invalid password
    Given I am on the "login" page
    When I enter "valid" username into the username field
    Then Username must be entered to the field
    When I enter "invalid" password into the password field
    Then Password must be entered to the field
    When I click on the "login" button in the login page
    Then I should see the "invalid username or password" error message
    And "Username" and "password" fields must be highlighted with "red" color

  Scenario: Login with invalid username
    Given I am on the "login" page
    When I enter "invalid" username into the username field
    Then Username must be entered to the field
    When I enter "valid" password into the password field
    Then Password must be entered to the field
    When I click on the "login" button in the login page
    Then I should see the "invalid username or password" error message
    And "Username" and "password" fields must be highlighted with "red" color


  Scenario: Login with invalid username and password
    Given I am on the "login" page
    When I enter "invalid" username into the username field
    Then Username must be entered to the username field
    When I enter "invalid" password into the password field
    Then Password must be entered to the password field
    When I click on the "login" button in the login page
    Then I should see the "invalid username or password" error message
    And "Username" and "password" fields must be highlighted with "red" color

  Scenario: Login with empty username and password fields
    When I click on the "login" button in the login page
    Then I should see the "empty username" error message

  Scenario: Logout
    Given I am logined to account
    And I am on the "inventory" page
    When I click on the "menu" button at the top left corner
    Then I should see the "logout" button in the menu
    When I click on the "logout" button in the menu
    Then I should be on the "login" page
    And Username and password fields must be empty

  Scenario: Login with locked user
    Given I am on the "login" page
    When I enter "locked user" username into the username field
    Then Username must be entered to the field
    When I enter "valid" password into the password field
    Then Password must be entered to the field
    When I click on the "login" button in the login page
    Then I should see the "locked out user" error message