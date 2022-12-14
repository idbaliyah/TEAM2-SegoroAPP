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
  "duration": 11932481100,
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
  "duration": 1019231900,
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
  "duration": 371894301,
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
  "duration": 268842099,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 501884599,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2395460000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 6510209401,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Owner goto owner profile page",
  "description": "",
  "id": "owner-homepage;owner-goto-owner-profile-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "owner is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "click owner profile button",
  "keyword": "When "
});
formatter.match({
  "location": "OwnerHomePageStep.ownerIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 2355300,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerProfileButton()"
});
formatter.result({
  "duration": 198289400,
  "status": "passed"
});
formatter.after({
  "duration": 6443807100,
  "status": "passed"
});
formatter.before({
  "duration": 8082844801,
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
  "duration": 100901,
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
  "duration": 259765300,
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
  "duration": 185677600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 126869201,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2774103200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 7037149100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Owner goto owner edit profile page",
  "description": "",
  "id": "owner-homepage;owner-goto-owner-edit-profile-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "owner is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "click owner profile button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "owner click edit profile button",
  "keyword": "And "
});
formatter.match({
  "location": "OwnerHomePageStep.ownerIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 1069000,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerProfileButton()"
});
formatter.result({
  "duration": 121080100,
  "status": "passed"
});
formatter.match({
  "location": "OwnerProfilePageStep.ownerClickEditProfileButton()"
});
formatter.result({
  "duration": 34774201,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinition.OwnerProfilePageStep.ownerClickEditProfileButton(OwnerProfilePageStep.java:20)\r\n\tat ✽.And owner click edit profile button(features/OwnerProfilePage.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5533150801,
  "status": "passed"
});
formatter.before({
  "duration": 5350701000,
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
  "duration": 95199,
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
  "duration": 347759700,
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
  "duration": 228778599,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 126572800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2710036800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 8967509600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Owner goto owner edit profile page",
  "description": "",
  "id": "owner-homepage;owner-goto-owner-edit-profile-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "owner is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "click owner profile button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "owner click my schedule button",
  "keyword": "And "
});
formatter.match({
  "location": "OwnerHomePageStep.ownerIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 125900,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerProfileButton()"
});
formatter.result({
  "duration": 129151599,
  "status": "passed"
});
formatter.match({
  "location": "OwnerProfilePageStep.ownerClickMyScheduleButton()"
});
formatter.result({
  "duration": 378299,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinition.OwnerProfilePageStep.ownerClickMyScheduleButton(OwnerProfilePageStep.java:26)\r\n\tat ✽.And owner click my schedule button(features/OwnerProfilePage.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6132852400,
  "status": "passed"
});
formatter.before({
  "duration": 6088860900,
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
  "duration": 96301,
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
  "duration": 276311300,
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
  "duration": 189190101,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 112790001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2712934200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 11047547800,
  "status": "passed"
});
formatter.scenario({
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
  "duration": 120501,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerProfileButton()"
});
formatter.result({
  "duration": 109132401,
  "status": "passed"
});
formatter.match({
  "location": "OwnerProfilePageStep.ownerClickMyVenuesButton()"
});
formatter.result({
  "duration": 461300,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinition.OwnerProfilePageStep.ownerClickMyVenuesButton(OwnerProfilePageStep.java:32)\r\n\tat ✽.And owner click my venues button(features/OwnerProfilePage.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6519805400,
  "status": "passed"
});
formatter.before({
  "duration": 9135809400,
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
  "duration": 84200,
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
  "duration": 407696700,
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
  "duration": 799085700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 198489500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 30320769100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of all elements located by By.xpath: //div[@class\u003d\u0027swal-overlay swal-overlay--show-modal\u0027] (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:138)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat com.idbaliyah.pageObject.LoginPage.waitSeeModal(LoginPage.java:35)\r\n\tat StepDefinition.LoginStep.seeModalSuccessfullyLogin(LoginStep.java:39)\r\n\tat ✽.Then see modal successfully login(features/OwnerProfilePage.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.99)\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-H54V1AL\u0027, ip: \u0027192.168.100.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [39880f1b8b24e44c2b117f82ac971f60, findElements {using\u003dxpath, value\u003d//div[@class\u003d\u0027swal-overlay swal-overlay--show-modal\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\win10\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49325}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49325/devtoo..., se:cdpVersion: 108.0.5359.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 39880f1b8b24e44c2b117f82ac971f60\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:179)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:102)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$8.apply(ExpectedConditions.java:224)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$8.apply(ExpectedConditions.java:221)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.idbaliyah.pageObject.LoginPage.waitSeeModal(LoginPage.java:35)\r\n\tat StepDefinition.LoginStep.seeModalSuccessfullyLogin(LoginStep.java:39)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Owner goto my venues page",
  "description": "",
  "id": "owner-homepage;owner-goto-my-venues-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "owner is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "click owner profile button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "owner click my booking list button",
  "keyword": "And "
});
formatter.match({
  "location": "OwnerHomePageStep.ownerIsAlreadyOnHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerProfileButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OwnerProfilePageStep.ownerClickMyBookingListButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5199768901,
  "status": "passed"
});
formatter.before({
  "duration": 8625021700,
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
  "duration": 127000,
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
  "duration": 236787400,
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
  "duration": 239923601,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 255606200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2292090600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 6338361700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Owner logout from Profile page",
  "description": "",
  "id": "owner-homepage;owner-logout-from-profile-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "owner is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "click owner profile button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "owner click logout button on profile page",
  "keyword": "And "
});
formatter.match({
  "location": "OwnerHomePageStep.ownerIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 98999,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerProfileButton()"
});
formatter.result({
  "duration": 133844400,
  "status": "passed"
});
formatter.match({
  "location": "OwnerProfilePageStep.ownerClickLogoutButtonOnProfilePage()"
});
formatter.result({
  "duration": 483100,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinition.OwnerProfilePageStep.ownerClickLogoutButtonOnProfilePage(OwnerProfilePageStep.java:43)\r\n\tat ✽.And owner click logout button on profile page(features/OwnerProfilePage.feature:39)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5425726200,
  "status": "passed"
});
formatter.before({
  "duration": 7679637400,
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
  "duration": 78200,
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
  "duration": 259269900,
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
  "duration": 208222800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 112894700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 1700810299,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickOkButtonModal()"
});
formatter.result({
  "duration": 112491200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Owner logout from Profile page",
  "description": "",
  "id": "owner-homepage;owner-logout-from-profile-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "owner is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "click owner profile button",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "owner click profile image",
  "keyword": "And "
});
formatter.match({
  "location": "OwnerHomePageStep.ownerIsAlreadyOnHomePage()"
});
formatter.result({
  "duration": 116500,
  "status": "passed"
});
formatter.match({
  "location": "OwnerHomePageStep.clickOwnerProfileButton()"
});
formatter.result({
  "duration": 128475999,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[.\u003d\u0027User1\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-H54V1AL\u0027, ip: \u0027192.168.100.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3a7d70f768f9b0296a8e335952fd15b2, findElement {using\u003dxpath, value\u003d//a[.\u003d\u0027User1\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\win10\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52222}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52222/devtoo..., se:cdpVersion: 108.0.5359.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3a7d70f768f9b0296a8e335952fd15b2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat com.idbaliyah.pageObject.OwnerHomePage.clickOwnerButtonMenu(OwnerHomePage.java:29)\r\n\tat StepDefinition.OwnerHomePageStep.clickOwnerProfileButton(OwnerHomePageStep.java:36)\r\n\tat ✽.When click owner profile button(features/OwnerProfilePage.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OwnerProfilePageStep.ownerClickProfileImage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5365690401,
  "status": "passed"
});
});