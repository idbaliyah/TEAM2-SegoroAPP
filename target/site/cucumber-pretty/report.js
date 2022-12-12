$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
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
  "duration": 6379947000,
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
    },
    {
      "line": 5,
      "name": "@admin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user fill email address field with data \"admin2@mail.com\"",
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
  "location": "LoginStep.userIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 249842300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2@mail.com",
      "offset": 41
    }
  ],
  "location": "LoginStep.userFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 265589800,
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
  "duration": 254422900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 143492100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2804182900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 2016316000,
  "status": "passed"
});
formatter.after({
  "duration": 5830382300,
  "status": "passed"
});
formatter.before({
  "duration": 3494689900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Owner success login with valid username and password",
  "description": "",
  "id": "login-page;owner-success-login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Positive"
    },
    {
      "line": 14,
      "name": "@owner"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user fill email address field with data \"user1@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "fill password field with data \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.userIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 102400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1@mail.com",
      "offset": 41
    }
  ],
  "location": "LoginStep.userFillEmailAddressFieldWithDataEmail(String)"
});
formatter.result({
  "duration": 611323900,
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
  "duration": 255928200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 155970600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2825317000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 1949803200,
  "status": "passed"
});
formatter.after({
  "duration": 5810165400,
  "status": "passed"
});
});