package StepDefinition;

import com.idbaliyah.pageObject.HomePage;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.openqa.selenium.WebDriver;

public class HomeStepDef {

    public static WebDriver driver;

    HomePage homePage;
    public HomeStepDef() {
        super();
        this.driver = Hooks.driver;
    }
    @Given("admin already on main page")
    public void adminAlreadyOnMainPage() {
        homePage = new HomePage(driver);
    }

    @When("click home button")
    public void clickHomeButton() throws InterruptedException {
        Thread.sleep(500);
        homePage.clickHomeButtonMenu();
    }

    @When("click venue button")
    public void clickVenueButton() throws InterruptedException {
        Thread.sleep(500);
        homePage.clickVenueButtonMenu();
    }

    @When("click admin button")
    public void clickAdminButton() throws InterruptedException {
        Thread.sleep(500);
        homePage.clickProfileButtonMenu();
    }

    @When("click booking history button")
    public void clickBookingHistoryButton() throws InterruptedException {
        Thread.sleep(500);
        homePage.clickBookingHistoryButton();
    }

    @When("click pay venue button")
    public void clickPayVenueButton() throws InterruptedException {
        Thread.sleep(500);
        homePage.clickPayVenueButton();
    }

    @When("click schedule button")
    public void clickScheduleButton() throws InterruptedException {
        Thread.sleep(500);
        homePage.clickScheduleButton();
    }

    @When("click logout button")
    public void clickLogoutButton() throws InterruptedException {
        Thread.sleep(500);
        homePage.clickLogoutButtonMenu();
    }

    @Then("see modal logout")
    public void seeModalLogout() {
        homePage.waitSeeModalLogout();
    }

    @But("click OK button modal logout")
    public void clickOKButtonModalLogout() throws InterruptedException {
        Thread.sleep(500);
        homePage.clickOkSeeModalLogout();
    }
}
