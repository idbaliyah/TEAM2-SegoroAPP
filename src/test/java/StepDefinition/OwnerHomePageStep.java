package StepDefinition;

import com.idbaliyah.pageObject.OwnerHomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OwnerHomePageStep {
    private WebDriver webDriver;

    OwnerHomePage homePage;

    public OwnerHomePageStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    //VENUE BUTTON FROM HOMEPAGE
    @Given("owner is already on home page")
    public void ownerIsAlreadyOnHomePage() {
        homePage = new OwnerHomePage(webDriver);
    }

    @When("owner click venue button")
    public void ownerClickVenueButton() {
        homePage.clickVenueButtonMenu();
    }

    @When("click owner profile button")
    public void clickOwnerProfileButton() {
        homePage.clickOwnerButtonMenu();
    }

    @When("click owner booking history button")
    public void clickOwnerBookingHistoryButton() {
        homePage.clickOwnerHistoryMenu();
    }

    @When("click owner pay venue button")
    public void clickOwnerPayVenueButton() {
        homePage.clickOwnerPayVenueMenu();
    }

    @When("click owner my schedule button")
    public void clickOwnerMyScheduleButton() {
        homePage.clickOwnerMyScheduleMenu();
    }

    @When("click owner logout button")
    public void clickOwnerLogoutButton() {
        homePage.clickOwnerLogoutButtonMenu();
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
