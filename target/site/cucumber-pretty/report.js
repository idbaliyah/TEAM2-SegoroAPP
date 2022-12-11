$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/HomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page",
  "description": "Admin on home page",
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
  "duration": 5545845700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "admin fill email address field with data \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with data \"qwerty\"",
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
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.adminIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 217839800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 42
    }
  ],
  "location": "LoginStep.adminFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 247139600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 31
    }
  ],
  "location": "LoginStep.fillPasswordFieldWithData(String)"
});
formatter.result({
  "duration": 158100800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 121247200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2823252800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 1561546900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Admin goto venue page",
  "description": "",
  "id": "home-page;admin-goto-venue-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "admin is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click venue button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep.adminIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 1460900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.clickVenueButton()"
});
formatter.result({
  "duration": 82234400,
  "status": "passed"
});
formatter.after({
  "duration": 5870358600,
  "status": "passed"
});
formatter.before({
  "duration": 3039827100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "admin fill email address field with data \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with data \"qwerty\"",
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
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.adminIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 91200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 42
    }
  ],
  "location": "LoginStep.adminFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 381918100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 31
    }
  ],
  "location": "LoginStep.fillPasswordFieldWithData(String)"
});
formatter.result({
  "duration": 245040600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 93724800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 3246290400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 1351124600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Admin goto admin page",
  "description": "",
  "id": "home-page;admin-goto-admin-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "admin is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "click admin button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep.adminIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 71400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.clickAdminButton()"
});
formatter.result({
  "duration": 65171200,
  "status": "passed"
});
formatter.after({
  "duration": 5868701000,
  "status": "passed"
});
formatter.before({
  "duration": 3357671900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "admin fill email address field with data \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with data \"qwerty\"",
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
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.adminIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 146900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 42
    }
  ],
  "location": "LoginStep.adminFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 359281600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 31
    }
  ],
  "location": "LoginStep.fillPasswordFieldWithData(String)"
});
formatter.result({
  "duration": 146427500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 90763100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2692128500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 1874391600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Admin goto order history page",
  "description": "",
  "id": "home-page;admin-goto-order-history-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "admin is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "click booking history button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep.adminIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 116900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.clickBookingHistoryButton()"
});
formatter.result({
  "duration": 69362500,
  "status": "passed"
});
formatter.after({
  "duration": 5769483200,
  "status": "passed"
});
formatter.before({
  "duration": 3103235500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "admin fill email address field with data \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with data \"qwerty\"",
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
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.adminIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 91300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 42
    }
  ],
  "location": "LoginStep.adminFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 313997700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 31
    }
  ],
  "location": "LoginStep.fillPasswordFieldWithData(String)"
});
formatter.result({
  "duration": 195716300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 93360800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2732164800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 1889849600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Admin goto pay venue page",
  "description": "",
  "id": "home-page;admin-goto-pay-venue-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "admin is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "click pay venue button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep.adminIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 62100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.clickPayVenueButton()"
});
formatter.result({
  "duration": 76296700,
  "status": "passed"
});
formatter.after({
  "duration": 5814362900,
  "status": "passed"
});
formatter.before({
  "duration": 3139040500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "admin fill email address field with data \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with data \"qwerty\"",
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
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.adminIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 111200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 42
    }
  ],
  "location": "LoginStep.adminFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 264414800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 31
    }
  ],
  "location": "LoginStep.fillPasswordFieldWithData(String)"
});
formatter.result({
  "duration": 201740900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 88551300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2766308000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 1549539600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Admin goto schedule page",
  "description": "",
  "id": "home-page;admin-goto-schedule-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "admin is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "click my schedule button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep.adminIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 69200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.clickPayScheduleButton()"
});
formatter.result({
  "duration": 60623500,
  "status": "passed"
});
formatter.after({
  "duration": 5779979100,
  "status": "passed"
});
formatter.before({
  "duration": 3043918200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "admin is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "admin fill email address field with data \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill password field with data \"qwerty\"",
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
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.adminIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 54600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 42
    }
  ],
  "location": "LoginStep.adminFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 305628900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 31
    }
  ],
  "location": "LoginStep.fillPasswordFieldWithData(String)"
});
formatter.result({
  "duration": 144753800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 145322100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2790351600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 1619833300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Admin logout form segoroapp",
  "description": "",
  "id": "home-page;admin-logout-form-segoroapp",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "admin is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "click logout button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep.adminIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 54600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.clickLogoutButton()"
});
formatter.result({
  "duration": 99298400,
  "status": "passed"
});
formatter.after({
  "duration": 5847349800,
  "status": "passed"
});
formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Page",
  "description": "Login to page SegoroAPP as ADMIN",
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
  "duration": 3106909000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Admin success login with valid username and password",
  "description": "",
  "id": "login-page;admin-success-login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "admin is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "admin fill email address field with data \"admin2@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "fill password field with data \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.adminIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 42
    }
  ],
  "location": "LoginStep.adminFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 315395200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 31
    }
  ],
  "location": "LoginStep.fillPasswordFieldWithData(String)"
});
formatter.result({
  "duration": 195236500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 89106000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2767536300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 2185189400,
  "status": "passed"
});
formatter.after({
  "duration": 5735737700,
  "status": "passed"
});
});