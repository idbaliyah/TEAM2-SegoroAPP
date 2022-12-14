@ProfilePage
  Feature: Profile Page
    Testing feature profile page as admin

    Background: Admin successfully login
      Given admin already on login page
      When fill email address field with email "admin2@mail.com"
      And fill password field with password "qwerty"
      And click login button
      Then see modal successfully login
      But admin click OK button modal success login


    Scenario: Admin go to home page
      Given admin already on profile page
      When click home button from profile page

#    Scenario: Admin go to venue page
#      Given admin already on profile page
#      When click venue button from profile page
#
#    Scenario: Admin logout of the home page
#      Given admin already on profile page
#      When click logout button from profile page
#      Then see modal logout from profile page
#      But click OK button modal logout from profile page
#
#    Scenario: Admin go to edit profile
#      Given admin already on profile page
#      When click edit profile button sidebar from profile page
#
#    Scenario: Admin go to schedule page
#      Given admin already on profile page
#      When click schedule button sidebar from profile page
#
#    Scenario: Admin go to dashboard page
#      Given admin already on profile page
#      When click dashboard button sidebar from profile page
#
#    Scenario: Admin logout of the home page
#      Given admin already on profile page
#      When click logout button sidebar from profile page
#      Then see modal logout from profile page
#      But click OK button modal logout from profile page
