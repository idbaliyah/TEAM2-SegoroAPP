@VenuePageUser
Feature: User Venue Page

  Background:
    Given user is already on login page
    When user fill email address field with data "user2@gmail.com"
    And fill password field with data "qwerty"
    And click login button
    Then see modal successfully login
    When click OK button modal

  Scenario: User goto venue page
    Given user is already on home page
    When user click venue button

  Scenario: User search a venue
    Given user is already on home page
    When user click venue button
    And user fill search with data "Gor Soemantri"

  Scenario: User click filter button
    Given user is already on home page
    When user click venue button
    And user click filter button

  Scenario: User see venue details
    Given user is already on home page
    When user click venue button
    Then user click venue card details

  Scenario: User goto venue page
    Given user is already on home page
    When user click venue card on home page