@Tes @LoginAdmin
Feature: Login Page
  Login to page SegoroAPP as ADMIN

  @Positive
  Scenario: Admin success login with valid username and password
    Given admin is already on login page
    When admin fill email address field with data "admin@mail.com"
    And fill password field with data "qwerty"
    And click login button
    But click OK button after login successfully
