package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OwnerHomePage {
    public static WebDriver driver;

    public OwnerHomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }
    private By venueButtonMenu = By.xpath("//a[.='Venue']");
    private By profileButtonMenu = By.xpath("//a[.='User1']");
    private By historyButtonMenu = By.xpath("//div[.='Booking History']");
    private By ownerPayVenueMenu = By.xpath("//div[@class='w-75 mx-auto row']/div[contains(.,'Pay Venue')]");
    private By ownerMyScheduleMenu = By.xpath("//div[@class='w-75 mx-auto row']/div[contains(.,'My Schedule')]");
    private By ownerLogoutButtonMenu = By.cssSelector("[height='30']");

    public void clickVenueButtonMenu() {
        driver.findElement(venueButtonMenu).click();
    }

    public void clickOwnerButtonMenu(){
        driver.findElement(profileButtonMenu).click();
    }

    public void clickOwnerHistoryMenu(){
        driver.findElement(historyButtonMenu).click();
    }

    public void clickOwnerPayVenueMenu(){
        driver.findElement(ownerPayVenueMenu).click();
    }

    public void clickOwnerMyScheduleMenu(){
        driver.findElement(ownerMyScheduleMenu).click();
    }

    public void clickOwnerLogoutButtonMenu() {
        driver.findElement(ownerLogoutButtonMenu).click();
    }

    public void waitLogoutPopUp(){
        WebDriverWait wait = new WebDriverWait(driver,30);
        wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//div[@class='swal-overlay swal-overlay--show-modal']")));
    }

    public void okLogout() {
        WebElement modalContainer = driver.findElement(By.xpath("//div[@class='swal-modal']"));
        WebElement modalLogoutButton = modalContainer.findElement(By.xpath("//button[@class='swal-button swal-button--confirm swal-button--danger']"));
        modalLogoutButton.click();
    }

}
