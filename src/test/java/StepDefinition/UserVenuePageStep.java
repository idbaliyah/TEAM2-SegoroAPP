package StepDefinition;

import com.idbaliyah.pageObject.UserVenuePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UserVenuePageStep {
    private WebDriver webDriver;

    UserVenuePage UserVenuePage;

    public UserVenuePageStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    //USER GO TO VENUE PAGE
    @When("user click venue menu on home page")
    public void userClickVenueButtonOnHomePage() {
        UserVenuePage.venuePageCard();
    }

    //USER CLICK VENUE CARD
    @Then("user click venue card details")
    public void userClickVenueCard() {
        UserVenuePage.venuePageDetails();
    }

    //USER SEARCH A VENUE
    @And("user fill search with data \"(.*)\"")
    public void userFillSearchWithData(String searchQuery){
        UserVenuePage.setSearch(searchQuery);
    }

    //USER CLICK FILTER BUTTON
    @And("user click filter button")
    public void userClickFilterButton() {
        UserVenuePage.filterButton();
    }
}