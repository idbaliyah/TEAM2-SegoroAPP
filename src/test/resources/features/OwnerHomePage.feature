@HomePageOwner
Feature: Owner HomePage

  Background:
    Given user is already on login page
    When user fill email address field with data "user1@mail.com"
    And fill password field with data "qwerty"
    And click login button
    Then see modal successfully login
    When click OK button modal

  Scenario: Owner goto venue page
    Given owner is already on home page
    When owner click venue button

  Scenario: Owner goto owner profile page
    Given owner is already on home page
    When click owner profile button

  Scenario: Owner goto order history page
    Given owner is already on home page
    When click owner booking history button

  Scenario: Owner goto pay venue page
    Given owner is already on home page
    When click owner pay venue button

  Scenario: Owner goto schedule page
    Given owner is already on home page
    When click owner my schedule button

  Scenario: Owner logout form Segoroapp
    Given owner is already on home page
    When click owner logout button
    And wait logout pop up
    Then click OK Logout