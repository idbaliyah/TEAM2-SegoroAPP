package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

public class OwnerVenuePage {
    public static WebDriver driver;

    public OwnerVenuePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    private By venueCard = By.xpath("//div[@class='Detail_listContainer___4t3h mb-5 pb-5 row']/div[1]//img[@src='/noImage.jpg']");
    private By venueCardDetails = By.xpath("//div[@class='Detail_listContainer___4t3h mb-5 pb-5 row']/div[1]//img[@src='/noImage.jpg']");
    private By searchElement = By.xpath("//div[@class='input-group']");
    private By filterButton = By.cssSelector(".Venue_filterBox__02yot");

    public void venuePageCard() {
//        WebElement element = driver.findElement(By.xpath("//div[.='Gor Soekarno Hatta']"));
//        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
//        Thread.sleep(500);
        driver.findElement(venueCard).click();
    }

    //OWNER CLICK VENUE DETAILS
    public void venuePageDetails() {
        driver.findElement(venueCardDetails).click();
    }

    //OWNER SEARCH A VENUE
    public void setSearch(String keywords) {
        driver.findElement(searchElement).sendKeys(keywords);
    }

    //OWNER CLICK FILTER BUTTON
    public void filterButton() {
        driver.findElement(filterButton).click();
    }
}
