package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class UserProfilePage {
    public static WebDriver driver;

    public UserProfilePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    private By editProfile = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[@class='Profile_itemLeft__0hCsl']/div[.='Edit Profile']");
    private By mySchedule = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[.='My Schedule']");
    private By myVenues = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[@class='Profile_itemLeft__0hCsl']/div[.='My Venues']");
    private By myBookingList = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[.='My Booking List']");
    private By logoutProfilePage = By.xpath("//div[@class='Profile_logOut__NE2bi']");
    private By profilePicUser = By.xpath("//div[@class='Profile_colorBox__ijn_0']/span[1]/img[1]");

    //USER CLICK EDIT PROFILE
    public void editProfile() {
        driver.findElement(editProfile).click();
    }

    //USER CLICK MY SCHEDULE
    public void mySchedule() {
        driver.findElement(mySchedule).click();
    }

    //USER CLICK MY VENUS
    public void myVenues() {
        driver.findElement(myVenues).click();
    }

    //USER CLICK MY BOOKING LIST
    public void myBookingList() {
        driver.findElement(myBookingList).click();
    }

    //USER CLICK LOGOUT BUTTON ON PROFILE PAGE
    public void logoutProfile() {
        driver.findElement(logoutProfilePage).click();
    }

    //USER CLICK PROFILE PICTURE
    public void changeProfilePict() {
        driver.findElement(profilePicUser).click();
    }
}
