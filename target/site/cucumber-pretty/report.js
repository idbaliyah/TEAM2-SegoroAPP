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
  "duration": 5506949800,
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
  "duration": 220908800,
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
  "duration": 321559300,
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
  "duration": 657534400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 583409200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2810833000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 1958005400,
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
  "duration": 1904800,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickHomeButton()"
});
formatter.result({
  "duration": 554584600,
  "status": "passed"
});
formatter.after({
  "duration": 3803447600,
  "status": "passed"
});
formatter.before({
  "duration": 2857545300,
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
  "duration": 100400,
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
  "duration": 256601900,
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
  "duration": 654831600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 586639500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2674284400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 2318472800,
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
  "duration": 638400,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickVenueButton()"
});
formatter.result({
  "duration": 566667700,
  "status": "passed"
});
formatter.after({
  "duration": 3884358900,
  "status": "passed"
});
formatter.before({
  "duration": 3553166300,
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
  "duration": 160000,
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
  "duration": 248025600,
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
  "duration": 692314700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 602805800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2677518400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 1805544700,
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
  "duration": 149400,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickAdminButton()"
});
formatter.result({
  "duration": 559147100,
  "status": "passed"
});
formatter.after({
  "duration": 3866877400,
  "status": "passed"
});
formatter.before({
  "duration": 2847735900,
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
  "duration": 47300,
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
  "duration": 252250800,
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
  "duration": 644062900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 585332800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2736710800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 1763174800,
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
  "duration": 191200,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickLogoutButton()"
});
formatter.result({
  "duration": 578587000,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.seeModalLogout()"
});
formatter.result({
  "duration": 75717100,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickOKButtonModalLogout()"
});
formatter.result({
  "duration": 600256400,
  "status": "passed"
});
formatter.after({
  "duration": 3887914800,
  "status": "passed"
});
formatter.before({
  "duration": 3337868900,
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
  "duration": 96900,
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
  "duration": 579728200,
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
  "duration": 1133773600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 648508000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2640986300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 2088275100,
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
  "duration": 191800,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickBookingHistoryButton()"
});
formatter.result({
  "duration": 589044500,
  "status": "passed"
});
formatter.after({
  "duration": 3863869900,
  "status": "passed"
});
formatter.before({
  "duration": 2915886100,
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
  "duration": 97600,
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
  "duration": 354761200,
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
  "duration": 733060400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 667376500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2800316000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 2361835800,
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
  "duration": 225700,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickPayVenueButton()"
});
formatter.result({
  "duration": 692442000,
  "status": "passed"
});
formatter.after({
  "duration": 3746413500,
  "status": "passed"
});
formatter.before({
  "duration": 2321153400,
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
  "duration": 78000,
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
  "duration": 275488200,
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
  "duration": 688298000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 696666800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 3163821000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.adminClickOKButtonModalSuccessLogin()"
});
formatter.result({
  "duration": 1984917600,
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
  "duration": 146500,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDef.clickScheduleButton()"
});
formatter.result({
  "duration": 559402700,
  "status": "passed"
});
formatter.after({
  "duration": 3756933400,
  "status": "passed"
});
});