$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Home.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page",
  "description": "Testing feature Home page as Admin",
  "id": "home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.before({
  "duration": 7050564600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 186914300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 508053700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 744281400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 657486900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 4126697300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 6198007000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Admin go to home page",
  "description": "",
  "id": "home-page;admin-go-to-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "admin already on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click home button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeStepDef.adminAlreadyOnMainPage()"
});
formatter.result({
  "duration": 1359400,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickHomeButton()"
});
formatter.result({
  "duration": 632634400,
  "status": "passed"
});
formatter.after({
  "duration": 3933659400,
  "status": "passed"
});
formatter.before({
  "duration": 2886766500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 51300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 258867400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 676854400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 627096900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 3606488300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 3007140500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Admin go to venue page",
  "description": "",
  "id": "home-page;admin-go-to-venue-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "admin already on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "click venue button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeStepDef.adminAlreadyOnMainPage()"
});
formatter.result({
  "duration": 212200,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickVenueButton()"
});
formatter.result({
  "duration": 598999300,
  "status": "passed"
});
formatter.after({
  "duration": 4306926000,
  "status": "passed"
});
formatter.before({
  "duration": 3889071400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 61300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 358285900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 720736600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 671032100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 3029799900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 2575161900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Admin go to profile page",
  "description": "",
  "id": "home-page;admin-go-to-profile-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "admin already on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "click admin button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeStepDef.adminAlreadyOnMainPage()"
});
formatter.result({
  "duration": 215400,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickAdminButton()"
});
formatter.result({
  "duration": 682750400,
  "status": "passed"
});
formatter.after({
  "duration": 4155473300,
  "status": "passed"
});
formatter.before({
  "duration": 3658692700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 76800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 539204500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 735131800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 642194400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 3650181200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 2840885700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Admin logout of the home page",
  "description": "",
  "id": "home-page;admin-logout-of-the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "admin already on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "click logout button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "see modal logout",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click OK button modal logout",
  "keyword": "But "
});
formatter.match({
  "location": "HomeStepDef.adminAlreadyOnMainPage()"
});
formatter.result({
  "duration": 178700,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickLogoutButton()"
});
formatter.result({
  "duration": 633128400,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.seeModalLogout()"
});
formatter.result({
  "duration": 60795000,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickOKButtonModalLogout()"
});
formatter.result({
  "duration": 748845900,
  "status": "passed"
});
formatter.after({
  "duration": 5672661200,
  "status": "passed"
});
formatter.before({
  "duration": 3119263400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 270888900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 760086300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 634422500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 3191057800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 2629559800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Admin go to booking history page",
  "description": "",
  "id": "home-page;admin-go-to-booking-history-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "admin already on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "click booking history button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeStepDef.adminAlreadyOnMainPage()"
});
formatter.result({
  "duration": 144800,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickBookingHistoryButton()"
});
formatter.result({
  "duration": 742359400,
  "status": "passed"
});
formatter.after({
  "duration": 4514287000,
  "status": "passed"
});
formatter.before({
  "duration": 3892379300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 67600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 296952600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 667624500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 632261300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 3800715900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 2893188800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Admin go to pay venue page",
  "description": "",
  "id": "home-page;admin-go-to-pay-venue-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "admin already on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "click pay venue button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeStepDef.adminAlreadyOnMainPage()"
});
formatter.result({
  "duration": 148400,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickPayVenueButton()"
});
formatter.result({
  "duration": 667801300,
  "status": "passed"
});
formatter.after({
  "duration": 3981942300,
  "status": "passed"
});
formatter.before({
  "duration": 3194904400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 70100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 585048300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 1041220800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 645559200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2851798100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 2823558900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Admin go to schedule page",
  "description": "",
  "id": "home-page;admin-go-to-schedule-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "admin already on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "click schedule button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeStepDef.adminAlreadyOnMainPage()"
});
formatter.result({
  "duration": 180100,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickScheduleButton()"
});
formatter.result({
  "duration": 623111700,
  "status": "passed"
});
formatter.after({
  "duration": 4352111500,
  "status": "passed"
});
formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Page",
  "description": "Testing feature login as Admin",
  "id": "login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 3583673400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "id": "login-page;admin-successfully-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 355256800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 651020200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 605553200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 3214807000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 3041122300,
  "status": "passed"
});
formatter.after({
  "duration": 4252678700,
  "status": "passed"
});
formatter.uri("features/Profile.feature");
formatter.feature({
  "line": 2,
  "name": "Profile Page",
  "description": "Testing feature profile page as admin",
  "id": "profile-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ProfilePage"
    }
  ]
});
formatter.before({
  "duration": 3987502100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Admin successfully login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "fill email address field with email \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with password \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "admin click OK button modal success login",
  "keyword": "But "
});
formatter.match({
  "location": "LoginStepDef.adminAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 71200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.fillEmailAddressFieldWithEmail(String)"
});
formatter.result({
  "duration": 498317600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.fillPasswordFieldWithPassword(String)"
});
formatter.result({
  "duration": 744748000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 625684000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2783199500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 3126525800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Admin go to home page",
  "description": "",
  "id": "profile-page;admin-go-to-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "admin already on profile page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "click home button from profile page",
  "keyword": "When "
});
formatter.match({
  "location": "ProfileStepDef.adminAlreadyOnProfilePage()"
});
formatter.result({
  "duration": 719707200,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickHomeButton()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When click home button from profile page(features/Profile.feature:16) matches more than one step definition:\n  click home button in HomeStepDef.clickHomeButton()\n  click home button from profile page in ProfileStepDef.clickHomeButtonFromProfilePage()\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4425002800,
  "status": "passed"
});
});