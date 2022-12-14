@ProfilePageUser
Feature: User HomePage

  Background:
    Given user is already on login page
    When user fill email address field with data "user2@gmail.com"
    And fill password field with data "qwerty"
    And click login button
    Then see modal successfully login
    When click OK button modal

  Scenario: User goto owner profile page
    Given user is already on home page
    When click user profile button

  Scenario: User goto user edit profile page
    Given user is already on home page
    When click user profile button
    And user click edit profile button

  Scenario: User goto user edit profile page
    Given user is already on home page
    When click user profile button
    And user click my schedule button

  Scenario: User goto my venues page
    Given user is already on home page
    When click user profile button
    And user click my venues button

  Scenario: User goto my venues page
    Given user is already on home page
    When click user profile button
    And user click my booking list button

  Scenario: User logout from Profile page
    Given user is already on home page
    When click user profile button
    And user click logout button on profile page

  Scenario: User logout from Profile page
    Given user is already on home page
    When click user profile button
    And user click profile image
