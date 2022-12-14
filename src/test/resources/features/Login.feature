@Login
  Feature: Login Page
    Login to page SegoroAPP as USER

    @Positive @admin
    Scenario: User success login with valid username and password
      Given user is already on login page
      When user fill email address field with data "user2@gmail.com"
      And fill password field with data "qwerty"
      And click login button
      Then see modal successfully login
      When click OK button modal

    Scenario: User unsuccess login with valid username and password
      Given user is already on login page
      When user fill email address field with data "user2@mail.com"
      And fill password field with data "qwerty"
      And click login button
      Then see modal successfully login
      When click OK button modal

