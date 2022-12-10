package StepDefinition;

import com.idbaliyah.pageObject.LoginPage;
import cucumber.api.java.en.*;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;

public class LoginPageStep {

    private WebDriver webDriver;

    LoginPage loginPage;
    public LoginPageStep() {
        super();
        this.webDriver = WebDriverInit.webDriver;
    }

    //Step login page as admin -fill mail,password,click login button, click ok button on modal
    //valid data login
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
