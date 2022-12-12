@Login
  Feature: Login Page
    Login to page SegoroAPP as ADMIN

    @Positive @admin
    Scenario: Admin success login with valid username and password
      Given user is already on login page
      When user fill email address field with data "admin2@mail.com"
      And fill password field with data "qwerty"
      And click login button
      Then see modal successfully login
      When click OK button modal

  @Positive @owner
  Scenario: Owner success login with valid username and password
    Given user is already on login page
    When user fill email address field with data "user1@mail.com"
    And fill password field with data "qwerty"
    And click login button
    Then see modal successfully login
    When click OK button modal