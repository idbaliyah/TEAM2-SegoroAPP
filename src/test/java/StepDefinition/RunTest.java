package StepDefinition;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
//        tags = {"@Login, @HomePage, @HomePageOwner, @VenuePageOwner, @ProfilePageOwner"},
        tags = {"@ProfilePageOwner"},
        features = {"classpath:features/"},
        glue = { "classpath:StepDefinition"},
        plugin= {"pretty","html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json"}
)
public class RunTest {

}

