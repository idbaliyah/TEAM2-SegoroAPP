package StepDefinition;

import com.idbaliyah.pageObject.HomePage;
import com.idbaliyah.pageObject.ProfilePage;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

public class ProfileStepDef {

    public static WebDriver driver;

    ProfilePage profilePage;
    public ProfileStepDef() {
        super();
        this.driver = Hooks.driver;
    }

    @Given("admin already on profile page")
    public void adminAlreadyOnProfilePage() {
        driver.get(ProfilePage.profileHomePage);
        profilePage = new ProfilePage(driver);
    }


    @When("click home button from profile page")
    public void clickHomeButtonFromProfilePage() throws InterruptedException {
        Thread.sleep(500);
        profilePage.clickHomeButtonMenu();
    }
//
//    @When("click venue button from profile page")
//    public void clickVenueButtonFromProfilePage() throws InterruptedException {
//        Thread.sleep(500);
//        profilePage.clickVenueButtonMenu();
//    }
//
//    @When("click admin button from profile page")
//    public void clickAdminButtonFromProfilePage() throws InterruptedException {
//        Thread.sleep(500);
//        profilePage.clickProfileButtonMenu();
//    }
//
//    @When("click logout button from profile page")
//    public void clickLogoutButtonFromProfilePage() {
//    }
//
//    @Then("see modal logout from profile page")
//    public void seeModalLogoutFromProfilePage() {
//    }
//
//    @But("click OK button modal logout from profile page")
//    public void clickOKButtonModalLogoutFromProfilePage() {
//    }
//
//    @When("click edit profile button sidebar from profile page")
//    public void clickEditProfileButtonSidebarFromProfilePage() {
//    }
//
//    @When("click schedule button sidebar from profile page")
//    public void clickScheduleButtonSidebarFromProfilePage() {
//    }
//
//    @When("click dashboard button sidebar from profile page")
//    public void clickDashboardButtonSidebarFromProfilePage() {
//    }
//
//    @When("click logout button sidebar from profile page")
//    public void clickLogoutButtonSidebarFromProfilePage() {
//    }
}
