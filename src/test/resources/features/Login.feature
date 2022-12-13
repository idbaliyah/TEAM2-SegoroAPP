@Login
  Feature: Login Page
    Testing feature login as Admin

    Scenario: Admin successfully login
      Given admin already on login page
      When fill email address field with email "admin2@mail.com"
      And fill password field with password "qwerty"
      And click login button
      Then see modal successfully login
      But admin click OK button modal success login