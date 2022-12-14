package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class UserVenuePage {
    public static WebDriver driver;

    public UserVenuePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    private By venueCard = By.xpath("//div[@class='Detail_listContainer___4t3h mb-5 pb-5 row']/div[1]//img[@src='/noImage.jpg']");
    private By venueCardDetails = By.xpath("//div[@class='Detail_listContainer___4t3h mb-5 pb-5 row']/div[1]//img[@src='/noImage.jpg']");
    private By searchElement = By.xpath("//div[@class='input-group']");
    private By filterButton = By.cssSelector(".Venue_filterBox__02yot");

    public void venuePageCard() {
        driver.findElement(venueCard).click();
    }

    //USER CLICK VENUE DETAILS
    public void venuePageDetails() {
        driver.findElement(venueCardDetails).click();
    }

    //USER SEARCH A VENUE
    public void setSearch(String keywords) {
        driver.findElement(searchElement).sendKeys(keywords);
    }

    //USER CLICK FILTER BUTTON
    public void filterButton() {
        driver.findElement(filterButton).click();
    }
}
