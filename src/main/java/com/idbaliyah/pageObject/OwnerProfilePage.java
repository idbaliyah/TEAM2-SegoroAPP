package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

public class OwnerProfilePage {
    public static WebDriver driver;

    public OwnerProfilePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    private By editProfileButtonOwner = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[@class='Profile_itemLeft__0hCsl']/div[.='Edit Profile']");
    private By myScheduleButtonOwner = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[.='My Schedule']");
    private By myVenuesButtonOwner = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[@class='Profile_itemLeft__0hCsl']/div[.='My Venues']");
    private By myBookingListButtonOwner = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[.='My Booking List']");
    private By logoutProfilePageButtonOwner = By.xpath("//div[@class='Profile_logOut__NE2bi']");
    private By profilePicOwner = By.xpath("//div[@class='Profile_colorBox__ijn_0']/span[1]/img[1]");

    //OWNER CLICK EDIT PROFILE
    public void editProfileOwner() {
        driver.findElement(editProfileButtonOwner).click();
    }

    //OWNER CLICK MY SCHEDULE
    public void myScheduleOwner() {
        driver.findElement(myScheduleButtonOwner).click();
    }

    //OWNER CLICK MY VENUS
    public void myVenuesOwner() {
        driver.findElement(myVenuesButtonOwner).click();
    }

    //OWNER CLICK MY BOOKING LIST
    public void myBookingListOwner() {
        driver.findElement(myBookingListButtonOwner).click();
    }

    //OWNER CLICK LOGOUT BUTTON ON PROFILE PAGE
    public void logoutProfilePageOwner() {
        driver.findElement(logoutProfilePageButtonOwner).click();
    }

    //OWNER CLICK PROFILE PICTURE
    public void changeProfilePictOwner() {
        driver.findElement(profilePicOwner).click();
    }
}
