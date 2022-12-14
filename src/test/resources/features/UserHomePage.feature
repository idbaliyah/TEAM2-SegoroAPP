  @HomePage
  Feature: Home Page
    User on home page

    Background:
      Given user is already on login page
      When user fill email address field with data "user2@gmail.com"
      And fill password field with data "qwerty"
      And click login button
      Then see modal successfully login
      When click OK button modal

    Scenario: User goto venue page
      Given user is already on home page
      When click venue button

    Scenario: User goto user page
      Given user is already on home page
      When click user button

    Scenario: User goto order history page
      Given user is already on home page
      When click booking history button

    Scenario: User goto pay venue page
      Given user is already on home page
      When click pay venue button

    Scenario: User goto schedule page
      Given user is already on home page
      When click my schedule button

    Scenario: User logout form segoroapp
      Given user is already on home page
      When click logout button