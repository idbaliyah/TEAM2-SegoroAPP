package StepDefinition;

import com.idbaliyah.pageObject.LoginPage;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;

public class LoginStepDef {

    public static WebDriver driver;

    LoginPage loginPage;
    public LoginStepDef(){
        super();
        this.driver = Hooks.driver;
    }

    //admin successfully login with valid email address and password
    @Given("admin already on login page")
    public void adminAlreadyOnLoginPage() {
        loginPage = new LoginPage(driver);
    }

    @When("fill email address field with email \"(.*)\"")
    public void fillEmailAddressFieldWithEmail(String email) {
        loginPage.setFieldEmail(email);
    }

    @And("fill password field with password \"(.*)\"")
    public void fillPasswordFieldWithPassword(String password) throws InterruptedException {
        Thread.sleep(500);
        loginPage.setFieldPassword(password);
    }

    @And("click login button")
    public void clickLoginButton() throws InterruptedException {
        Thread.sleep(500);
        loginPage.clickLoginButton();
    }

    @Then("see modal successfully login")
    public void seeModalSuccessfullyLogin() {
        loginPage.waitSeeModalLogin();
    }

    @But("admin click OK button modal success login")
    public void adminClickOKButtonModalSuccessLogin() throws InterruptedException {
        Thread.sleep(500);
        loginPage.clickOkSeeModalLogin();
    }

}
