$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OwnerProfilePage.feature");
formatter.feature({
  "line": 2,
  "name": "Owner HomePage",
  "description": "",
  "id": "owner-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ProfilePageOwner"
    }
  ]
});
formatter.before({
  "duration": 6181522800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user fill email address field with data \"user1@mail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "fill password field with data \"qwerty\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.userIsAlreadyOnTheLoginPage()"
});
formatter.result({
  "duration": 157121000,
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
  "duration": 168868700,
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
  "duration": 145956500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 118064200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2694006600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 7192586400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#  Scenario: Owner goto owner profile page"
    },
    {
      "line": 13,
      "value": "#    Given owner is already on home page"
    },
    {
      "line": 14,
      "value": "#    When click owner profile button"
    },
    {
      "line": 16,
      "value": "#  Scenario: Owner goto owner edit profile page"
    },
    {
      "line": 17,
      "value": "#    Given owner is already on home page"
    },
    {
      "line": 18,
      "value": "#    When click owner profile button"
    },
    {
      "line": 19,
      "value": "#    And owner click edit profile button"
    },
    {
      "line": 21,
      "value": "#  Scenario: Owner goto owner edit profile page"
    },
    {
      "line": 22,
      "value": "#    Given owner is already on home page"
    },
    {
      "line": 23,
      "value": "#    When click owner profile button"
    },
    {
      "line": 24,
      "value": "#    And owner click my schedule button"
    }
  ],
  "line": 26,
  "name": "Owner goto my venues page",
  "description": "",
  "id": "owner-homepage;owner-goto-my-venues-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "owner is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "click owner profile button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "owner click my venues button",
  "keyword": "And "
});
formatter.match({
  "location": "OwnerHomePageStep.ownerIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 1259600,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerProfileButton()"
});
formatter.result({
  "duration": 71299900,
  "status": "passed"
});
formatter.match({
  "location": "OwnerProfilePageStep.ownerClickMyVenuesButton()"
});
formatter.result({
  "duration": 4587500,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinition.OwnerProfilePageStep.ownerClickMyVenuesButton(OwnerProfilePageStep.java:32)\r\n\tat ✽.And owner click my venues button(features/OwnerProfilePage.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5756453700,
  "status": "passed"
});
});