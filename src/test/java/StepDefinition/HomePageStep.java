package StepDefinition;

import com.idbaliyah.pageObject.HomePage;
import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;

public class HomePageStep {

    private WebDriver webDriver;

    HomePage homePage;
    public HomePageStep() {
        super();
        this.webDriver = WebDriverInit.webDriver;
    }
    @Given("admin is already on home page")
    public void adminIsAlreadyOnHomePage() {
    }
}
