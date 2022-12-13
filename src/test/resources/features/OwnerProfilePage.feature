@ProfilePageOwner
Feature: Owner HomePage

  Background:
    Given user is already on login page
    When user fill email address field with data "user1@mail.com"
    And fill password field with data "qwerty"
    And click login button
    Then see modal successfully login
    When click OK button modal

  Scenario: Owner goto owner profile page
    Given owner is already on home page
    When click owner profile button

  Scenario: Owner goto owner edit profile page
    Given owner is already on home page
    When click owner profile button
    And owner click edit profile button

  Scenario: Owner goto owner edit profile page
    Given owner is already on home page
    When click owner profile button
    And owner click my schedule button

  Scenario: Owner goto my venues page
    Given owner is already on home page
    When click owner profile button
    And owner click my venues button

  Scenario: Owner goto my venues page
    Given owner is already on home page
    When click owner profile button
    And owner click my booking list button

  Scenario: Owner logout from Profile page
    Given owner is already on home page
    When click owner profile button
    And owner click logout button on profile page

  Scenario: Owner logout from Profile page
    Given owner is already on home page
    When click owner profile button
    And owner click profile image
#    And owner choose image profile