package StepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Hooks {

    public static WebDriver driver;

    @Before
    public void openBrowser() {
        System.setProperty("webdriver.chrome.driver",
                System.getProperty("user.dir") + "\\driver\\chromedriver.exe");
        driver= new ChromeDriver();
        String URL = "https://segoro-app.vercel.app";
        driver.get(URL);
        driver.manage().window().maximize();
    }
    @After
    public void closeBrowser() throws InterruptedException {
        Thread.sleep(3000);
        driver.quit();
    }
}
