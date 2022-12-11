package StepDefinition;

import com.idbaliyah.pageObject.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

public class LoginStep {
    private WebDriver webDriver;
    LoginPage loginPage;
    public LoginStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }
    @Given("admin is already on login page")
    public void adminIsAlreadyOnTheLoginPage() {
        loginPage = new LoginPage(webDriver);
    }

    @When("admin fill email address field with data \"(.*)\"")
    public void adminFillEmailAddressFieldWithDataEmail(String email) {
        loginPage.setEmail(email);
    }

    @And("fill password field with data \"(.*)\"")
    public void fillPasswordFieldWithData(String password) {
        loginPage.setPassword(password);
    }

    @And("click login button")
    public void clickLoginButton() {
        loginPage.clickLoginButton();
    }

    @Then("see modal successfully login")
    public void seeModalSuccessfullyLogin() {
        loginPage.waitSeeModal();
    }
    @When("click OK button modal")
    public void clickOkButtonModal() {
        loginPage.clickOkSeeModal();
    }
}
