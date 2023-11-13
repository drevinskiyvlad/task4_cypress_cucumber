Feature: Footer

  Scenario: Footer links
    Given I am logined to account
    And I am on the "inventory" page
    When I click on the "Twitter" link
    Then I should be on the "twitter" page
    When Return to the "inventory" page
    And I click on the "Facebook" link
    Then I should be on the "facebook" page
    When Return to the "inventory" page
    And I click on the "LinkedIn" link
    Then I should be on the "linkedin" page