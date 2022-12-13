package StepDefinition;

import com.idbaliyah.pageObject.OwnerProfilePage;
import cucumber.api.java.en.And;
import org.openqa.selenium.WebDriver;

public class OwnerProfilePageStep {
    private WebDriver webDriver;

    OwnerProfilePage ownerProfilePage;

    public OwnerProfilePageStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    //OWNER CLICK EDIT PROFILE BUTTON
    @And("owner click edit profile button")
    public void ownerClickEditProfileButton() {
        ownerProfilePage.editProfileOwner();
    }

    //OWNER CLICK MY SCHEDULE BUTTON
    @And("owner click my schedule button")
    public void ownerClickMyScheduleButton() {
        ownerProfilePage.myScheduleOwner();
    }

    //OWNER CLICK MY VENUES BUTTON
    @And("owner click my venues button")
    public void ownerClickMyVenuesButton() {
        ownerProfilePage.myVenuesOwner();
    }

    //OWNER CLICK MY BOOKING LIST BUTTON
    @And("owner click my booking list button")
    public void ownerClickMyBookingListButton() {
        ownerProfilePage.myBookingListOwner();
    }

    @And("owner click logout button on profile page")
    public void ownerClickLogoutButtonOnProfilePage() {
        ownerProfilePage.logoutProfilePageOwner();
    }

    @And("owner click profile image")
    public void ownerClickProfileImage() {
        ownerProfilePage.changeProfilePictOwner();
    }
}
