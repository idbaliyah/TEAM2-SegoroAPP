package StepDefinition;

import com.idbaliyah.pageObject.UserProfilePage;
import cucumber.api.java.en.And;
import org.openqa.selenium.WebDriver;

public class UserProfilePageStep {
    private WebDriver webDriver;

    UserProfilePage userProfilePage;

    public UserProfilePageStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    //USER CLICK EDIT PROFILE BUTTON
    @And("user click edit profile button")
    public void userClickEditProfileButton() {
        userProfilePage.editProfile();
    }

    //USER CLICK MY SCHEDULE BUTTON
    @And("user click my schedule button")
    public void userClickMyScheduleButton() {
        userProfilePage.mySchedule();
    }

    //USER CLICK MY VENUES BUTTON
    @And("user click my venues button")
    public void userClickMyVenuesButton() {
        userProfilePage.myVenues();
    }

    //USER CLICK MY BOOKING LIST BUTTON
    @And("user click my booking list button")
    public void userClickMyBookingListButton() {
        userProfilePage.myBookingList();
    }

    @And("user click logout button on profile page")
    public void userClickLogoutButtonOnProfilePage() {
        userProfilePage.logoutProfile();
    }

    @And("user click profile image")
    public void userClickProfileImage() {
        userProfilePage.changeProfilePict();
    }
}
