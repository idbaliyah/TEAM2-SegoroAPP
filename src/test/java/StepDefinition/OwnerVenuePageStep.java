package StepDefinition;

import com.idbaliyah.pageObject.OwnerVenuePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OwnerVenuePageStep {
    private WebDriver webDriver;

    OwnerVenuePage OwnerVenuePage;

    public OwnerVenuePageStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    //OWNER GO TO VENUE PAGE
    @When("owner click venue menu on home page")
    public void ownerClickVenueButtonOnHomePage() {
        OwnerVenuePage.venuePageCard();
    }

    //OWNER CLICK VENUE CARD
    @Then("owner click venue card details")
    public void ownerClickVenueCard() {
        OwnerVenuePage.venuePageDetails();
    }

    //OWNER SEARCH A VENUE
    @And("owner fill search with data \"(.*)\"")
    public void ownerFillSearchWithData(String searchQuery){
        OwnerVenuePage.setSearch(searchQuery);
    }

    //OWNER CLICK FILTER BUTTON
    @And("owner click filter button")
    public void ownerClickFilterButton() {
        OwnerVenuePage.filterButton();
    }
}
