package StepDefinition;

import com.idbaliyah.pageObject.HomePage;
import com.idbaliyah.pageObject.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class HomePageStep {

    private WebDriver webDriver;

    HomePage homePage;
    public HomePageStep() {
        super();
        this.webDriver = WebDriverInit.webDriver;
    }
    //Step goto venue page as admin
    @Given("admin is already on home page")
    public void adminIsAlreadyOnHomePage() {
        homePage = new HomePage(webDriver);
    }

    @When("click venue button")
    public void clickVenueButton() {
        homePage.clickVenueButtonMenu();
    }

    @When("click admin button")
    public void clickAdminButton() {
        homePage.clickAdminButtonMenu();
    }

    @When("click booking history button")
    public void clickBookingHistoryButton() {
        homePage.clickBookingHistoryButton();
    }

    @When("click pay venue button")
    public void clickPayVenueButton() {
        homePage.clickPayVenueButton();
    }

    @When("click my schedule button")
    public void clickPayScheduleButton() {
        homePage.clickMyScheduleButton();
    }

    @When("click logout button")
    public void clickLogoutButton() {
        homePage.clicklogoutButtonMenu();
    }

    @Then("see modal successfully logout")
    public void seeModalSuccessfullyLogin() {
        homePage.waitSeeModal();
    }

    @When("click OK button modal logout")
    public void clickOkButtonModalLogout() {
        homePage.clickOkSeeModalLogout();
    }
}
