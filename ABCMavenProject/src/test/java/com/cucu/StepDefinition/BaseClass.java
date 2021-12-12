package com.cucu.StepDefinition;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.cucu.PageObject.AddCustomerPage;
import com.cucu.PageObject.LoginPage;
import com.cucu.PageObject.SearchCustomerPage;


public class BaseClass {
	
	public WebDriver driver;
	public LoginPage lp;
	public AddCustomerPage addCust;
	public SearchCustomerPage searchCustomer;
	public static Logger logger;
	
	
	
	
	public static String randomstring() {
		
		String generateString1 = RandomStringUtils.randomAlphabetic(5);
		return (generateString1);
		
	}
	
	
	

}
