@HomePage
  Feature: Home Page
    Testing feature Home page as Admin

    Background: Admin successfully login
      Given admin already on login page
      When fill email address field with email "admin2@mail.com"
      And fill password field with password "qwerty"
      And click login button
      Then see modal successfully login
      But admin click OK button modal success login

    Scenario: Admin go to home page
      Given admin already on main page
      When click home button

    Scenario: Admin go to venue page
      Given admin already on main page
      When click venue button

    Scenario: Admin go to profile page
      Given admin already on main page
      When click admin button

    Scenario: Admin logout of the home page
      Given admin already on main page
      When click logout button
      Then see modal logout
      But click OK button modal logout

    Scenario: Admin go to booking history page
      Given admin already on main page
      When click booking history button

    Scenario: Admin go to pay venue page
      Given admin already on main page
      When click pay venue button

    Scenario: Admin go to schedule page
      Given admin already on main page
      When click schedule button
