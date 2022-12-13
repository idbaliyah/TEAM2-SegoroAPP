@VenuePageOwner
Feature: Owner Venue Page

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

  Scenario: Owner search a venue
    Given owner is already on home page
    When owner click venue button
    And owner fill search with data "Gor Soemantri"

  Scenario: Owner click filter button
    Given owner is already on home page
    When owner click venue button
    And owner click filter button

  Scenario: Owner see venue details
    Given owner is already on home page
    When owner click venue button
    Then owner click venue card details

  Scenario: Owner goto venue page
    Given owner is already on home page
    When owner click venue card on home page