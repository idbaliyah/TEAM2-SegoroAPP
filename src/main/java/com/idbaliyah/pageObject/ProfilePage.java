package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class ProfilePage {

    public static WebDriver driver;

    public ProfilePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    public static final String profileHomePage = "https://segoro-app.vercel.app/profile";
    private By homeButtonMenu = By.xpath("//a[.='Home']");
    private By venueButtonMenu = By.xpath("//a[.='Venue']");
    private By profileButtonMenu = By.xpath("//a[.='admin2']");
    private By logoutButtonMenu = By.className("ms-5");
    private By editProfileButtonSidebar = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[@class='Profile_itemLeft__0hCsl']/div[.='Edit Profile']");
    private By scheduleButtonSidebar = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[@class='Profile_itemLeft__0hCsl']/div[.='My Schedule']");
    private By dashboardButtonSidebar = By.xpath("//div[@class='Profile_topBox__cyu9L']/div[@class='Profile_itemLeft__0hCsl']/div[.='Admin Dashboard']");
    private By logoutButtonSidebar = By.xpath("//div[@class='Profile_logOut__NE2bi']/div[@class='Profile_itemLabel__xCryi']");
    private By changeProfilePictureButton = By.xpath("//div[@class='Profile_colorBox__ijn_0']/span[1]/img[1]");

    public void clickHomeButtonMenu() {
        driver.findElement(homeButtonMenu).click();
    }
    public void clickVenueButtonMenu() {
        driver.findElement(venueButtonMenu).click();
    }
    public void clickProfileButtonMenu() {
        driver.findElement(profileButtonMenu).click();
    }
    public void clickLogoutButtonMenu() {
        driver.findElement(logoutButtonMenu).click();
    }
    public void clickEditProfileButtonSidebar() {
        driver.findElement(editProfileButtonSidebar).click();
    }
    public void clickScheduleButtonSidebar() {
        driver.findElement(scheduleButtonSidebar).click();
    }
    public void clickDashboardButtonSidebar() {
        driver.findElement(dashboardButtonSidebar).click();
    }
    public void clickLogoutButtonSidebar() {
        driver.findElement(logoutButtonSidebar).click();
    }
    public void clickChangeProfileButtonMenu() {
        driver.findElement(changeProfilePictureButton).click();
    }

}
