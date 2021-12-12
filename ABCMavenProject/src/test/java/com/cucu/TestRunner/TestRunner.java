package com.cucu.TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "feature",
		glue = "com\\cucu\\StepDefinition",
		dryRun = false,
		plugin = {"pretty",
				"html:test-output"},
		
		monochrome = true
		
		
		)
public class TestRunner {

}
