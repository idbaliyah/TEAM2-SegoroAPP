$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OwnerHomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Owner HomePage",
  "description": "",
  "id": "owner-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePageOwner"
    }
  ]
});
formatter.before({
  "duration": 5239289100,
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
  "duration": 279083900,
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
  "duration": 154766000,
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
  "duration": 133109300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 113943300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2776404200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 1708752300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#  Scenario: Owner goto venue page"
    },
    {
      "line": 13,
      "value": "#    Given owner is already on home page"
    },
    {
      "line": 14,
      "value": "#    When owner click venue button"
    },
    {
      "line": 15,
      "value": "#"
    },
    {
      "line": 16,
      "value": "#  Scenario: Owner goto admin page"
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
      "value": "#"
    },
    {
      "line": 20,
      "value": "#  Scenario: Owner goto order history page"
    },
    {
      "line": 21,
      "value": "#    Given owner is already on home page"
    },
    {
      "line": 22,
      "value": "#    When click owner booking history button"
    },
    {
      "line": 23,
      "value": "#"
    },
    {
      "line": 24,
      "value": "#  Scenario: Owner goto pay venue page"
    },
    {
      "line": 25,
      "value": "#    Given owner is already on home page"
    },
    {
      "line": 26,
      "value": "#    When click owner pay venue button"
    },
    {
      "line": 27,
      "value": "#"
    },
    {
      "line": 28,
      "value": "#  Scenario: Owner goto schedule page"
    },
    {
      "line": 29,
      "value": "#    Given owner is already on home page"
    },
    {
      "line": 30,
      "value": "#    When click owner my schedule button"
    }
  ],
  "line": 32,
  "name": "Owner logout form Segoroapp",
  "description": "",
  "id": "owner-homepage;owner-logout-form-segoroapp",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "owner is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "click owner logout button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "wait logout pop up",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click OK Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "OwnerHomePageStep.ownerIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 4353600,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerLogoutButton()"
});
formatter.result({
  "duration": 72434300,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.waitLogoutPopUp()"
});
formatter.result({
  "duration": 55031600,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOKLogout()"
});
formatter.result({
  "duration": 169201800,
  "status": "passed"
});
formatter.after({
  "duration": 5746618400,
  "status": "passed"
});
});