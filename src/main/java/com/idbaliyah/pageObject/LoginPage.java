package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public static WebDriver driver;

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    private By fieldEmail = By.xpath("//input[@id='floatingEmail']");
    private By fieldPassword = By.xpath("//input[@id='floatingPassword']");
    private By loginButton = By.xpath("//button[@class='ripple ripple-surface btn btn-primary Login_loginButton__c01N4']");

    public void setEmail(String email) {
        driver.findElement(fieldEmail).sendKeys(email);
    }

    public void setPassword(String password) {
        driver.findElement(fieldPassword).sendKeys(password);
    }

    public void clickLoginButton(){
        driver.findElement(loginButton).click();
    }

}
