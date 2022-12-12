@HomePage
  Feature: Home Page
    Admin on home page

    Background:
      Given user is already on login page
      When user fill email address field with data "admin2@mail.com"
      And fill password field with data "qwerty"
      And click login button
      Then see modal successfully login
      When click OK button modal

    Scenario: Admin goto venue page
      Given admin is already on home page
      When click venue button

    Scenario: Admin goto admin page
      Given admin is already on home page
      When click admin button

    Scenario: Admin goto order history page
      Given admin is already on home page
      When click booking history button

    Scenario: Admin goto pay venue page
      Given admin is already on home page
      When click pay venue button

    Scenario: Admin goto schedule page
      Given admin is already on home page
      When click my schedule button

    Scenario: Admin logout form segoroapp
      Given admin is already on home page
      When click logout button