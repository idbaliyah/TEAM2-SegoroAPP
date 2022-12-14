package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {
    public static WebDriver driver;

    public HomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    private By homeButtonMenu = By.xpath("//a[.='Home']");
    private By venueButtonMenu = By.xpath("//a[.='Venue']");
    private By profileButtonMenu = By.xpath("//a[.='admin2']");
    private By logoutButtonMenu = By.className("ms-5");
    private By bookingHistoryButton = By.xpath("//div[.='Booking History']");
    private By payVenueButton = By.xpath("//div[@class='w-75 mx-auto row']/div[contains(.,'Pay Venue')]");
    private By scheduleButton = By.xpath("//div[@class='w-75 mx-auto row']/div[contains(.,'My Schedule')]");

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

    public void clickBookingHistoryButton() {
        driver.findElement(bookingHistoryButton).click();
    }

    public void clickPayVenueButton() {
        driver.findElement(payVenueButton).click();
    }

    public void clickScheduleButton() {
        driver.findElement(scheduleButton).click();
    }

    public void waitSeeModalLogout() {
        WebDriverWait wait = new WebDriverWait(driver,50);
        wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//div[@class='swal-overlay swal-overlay--show-modal']")));
    }

    public void clickOkSeeModalLogout() {
        WebElement modalBody = driver.findElement(By.xpath("//div[@class='swal-text']"));
        WebElement modalLogoutButton = modalBody.findElement(By.xpath("//button[@class='swal-button swal-button--confirm swal-button--danger']"));
        modalLogoutButton.click();
    }

}
