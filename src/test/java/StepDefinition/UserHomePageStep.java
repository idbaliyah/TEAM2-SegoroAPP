package StepDefinition;

import com.idbaliyah.pageObject.UserHomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

public class UserHomePageStep {
    private WebDriver webDriver;

    UserHomePage homePage;

    public UserHomePageStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    //VENUE BUTTON FROM HOMEPAGE
    @Given("user is already on home page")
    public void userIsAlreadyOnHomePage() {
        homePage = new UserHomePage(webDriver);
    }

    @When("userr click venue button")
    public void userClickVenueButton() {
        homePage.clickVenueButtonMenu();
    }

    @When("click user profile button")
    public void clickUserProfileButton() {
        homePage.clickUserButtonMenu();
    }

    @When("click user booking history button")
    public void clickUserBookingHistoryButton() {
        homePage.clickUserHistoryMenu();
    }

    @When("click user pay venue button")
    public void clickUserPayVenueButton() {
        homePage.clickUserPayVenueMenu();
    }

    @When("click user my schedule button")
    public void clickUserMyScheduleButton() {
        homePage.clickUserMyScheduleMenu();
    }

    @When("click user logout button")
    public void clickUserLogoutButton() {
        homePage.clickUserLogoutButtonMenu();
    }

    @And("wait logout pop up")
    public void waitLogoutPopUp() {
        homePage.waitLogoutPopUp();
    }

    @Then("click OK Logout")
    public void clickOKLogout() {
        homePage.okLogout();
    }
}
