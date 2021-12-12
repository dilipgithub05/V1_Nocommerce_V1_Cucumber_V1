package com.cucu.StepDefinition;

import org.testng.Assert;
import org.testng.AssertJUnit;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucu.PageObject.AddCustomerPage;
import com.cucu.PageObject.LoginPage;
import com.cucu.PageObject.SearchCustomerPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps extends BaseClass {


	
	


	@Given("USer launch the Chrome Browser")
	public void user_launch_the_Chrome_Browser() {
		
		logger=Logger.getLogger("nopCommerce");
		PropertyConfigurator.configure("log4j.properties");

		System.setProperty("webdriver.chrome.driver","Drivers\\chromedriver.exe" );
		driver=new ChromeDriver();
		logger.info("*********** Lauching Browser ****************");
		lp=new LoginPage(driver);
	
	}

	@When("User open URL {string}")
	public void user_open_URL(String url) {
		
		driver.get(url);
		logger.info("*********** Opening url ****************");
		driver.manage().window().maximize();

		
	}

	@When("User enters Email as {string} and Password as {string}")
	public void user_enters_Email_as_and_Password_as(String email, String pwd) {
	
		logger.info("***********Providing Login Details ****************");
		lp.setUserName(email);
		lp.setPassWord(pwd);
	}

	@When("Click on Login")
	public void click_on_Login() {

		logger.info("*********** Started Login Process ****************");

		lp.clicklogin();
	
		
	}

	@Then("page Title should be {string}")
	public void page_Title_should_be(String title) throws InterruptedException {
		
		if(driver.getPageSource().contains("Login was unsuccessful.")) {
			
			driver.close();
			logger.info("*********** SuccessFul Login****************");

			AssertJUnit.assertTrue(false);
			
		}else {
			logger.info("*********** Login Unsuccessfull or Failed ****************");

			AssertJUnit.assertEquals(title, driver.getTitle());
		}
		
		Thread.sleep(3000);
		
	}

	@When("user click on log out link")
	public void user_click_on_log_out_link() throws InterruptedException {
		
		logger.info("***********Click on Logout****************");

		lp.clicklogout();
		Thread.sleep(3000);
		
		
	}

	@Then("page title shoul be {string}")
	public void page_title_shoul_be(String string) {
		
		
		
		
	}

	@Then("close the broswer")
	public void close_the_broswer() {

		logger.info("***********Closing the Browser ****************");
		
		driver.quit();
		
	}
	
	
	
	//Customer Feature Step Definition
	
	
	
	
	@Then("User can View Dashboard")
	public void user_can_View_Dashboard() {
		logger.info("*********** On Dashboard ****************");

		addCust = new AddCustomerPage(driver);
		
	Assert.assertEquals("Dashboard / nopCommerce administration",addCust.getPagetitle());
		 	
	}
	   

	@When("User click on Customer Menu")
	public void user_click_on_Customer_Menu()  {
			
		logger.info("***********Clcik on Customer Menu****************");
		addCust.ClickCustomerMenu1();
		
	}

	@When("Click on Customer menu Item")
	public void click_on_Customer_menu_Item()  {
		
		logger.info("***********Customer Menu Items****************");
		addCust.ClickmenuCust2();
	
	}

	@When("Click on Add new Button")
	public void click_on_Add_new_Button() {

		logger.info("***********Clcik on Add New Button****************");

		addCust.ClickOnAddNew();
		
		
	 
		
	}

	@Then("User can View Add new Customer Page")
	public void user_can_View_Add_new_Customer_Page() {

		Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPagetitle());
	
		
	}

	@When("User enter Customer info")
	public void user_enter_Customer_info() throws InterruptedException {
		String email = randomstring()+"@gmail.com";
		logger.info("***********Filling Customer Details ****************");

		
		addCust.setEmail(email);
		Thread.sleep(2000);
		addCust.setPassword("test123");
		addCust.deletetxtcus();
	addCust.setCustomerRole("Guest");
		addCust.setmangerofvendor("Vendor 2");
		addCust.setGender("Male");
		addCust.setFirstname("Dilip");
		addCust.setlastanme("P");
		addCust.setdob("5/05/2020");
		addCust.companyname("BusyQa");
		addCust.admincomment("This is Testing");
		
		
		
				
	    
		
	}

	@When("Click on Save Button")
	public void click_on_Save_Button() throws InterruptedException {
		logger.info("*********** Clcik on save button****************");

		addCust.txtsave();
		Thread.sleep(2000);
	    
		
	}

	@Then("USer can view confirmation message {string}")
	public void user_can_view_confirmation_message(String msg) {
		
		logger.info("**********Checking assert****************");

		Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully"));
	    
		
	}
	
	//Steps for Search a Customer using first name and last name
	
	@When("Enter Customer first name and last name")
	public void enter_Customer_first_name_and_last_name() {
		
		logger.info("*********** Search Customer By Email****************");

		
		searchCustomer = new SearchCustomerPage(driver);
		searchCustomer.setEmail("james_pan@nopCommerce.com");
		
	    
	}

	@When("Click on search Button")
	public void click_on_search_Button() throws InterruptedException {
		
		logger.info("*********** Click on Search Button ****************");

		
		searchCustomer.clickSearch();
		Thread.sleep(3000);
	}

	@Then("user Should found Email in the search Table")
	public void user_Should_found_Email_in_the_search_Table() {
		
		
		boolean status = searchCustomer.searchCustomerByEmail("james_pan@nopCommerce.com");
		
		Assert.assertEquals(true, status);
		

	}

	
	//Steps for Seaching a Cuistomer by Using Firstname and Last name
	
	@When("Enter Customer FirstName")
	public void enter_Customer_FirstName() {
		
		logger.info("*********** Entering First name ****************");

		searchCustomer = new SearchCustomerPage(driver);
		searchCustomer.setFirstName("James");
		
		
	
	}

	@When("Enter Customer Lastname")
	public void enter_Customer_Lastname() {
		logger.info("*********** Entering LastName ****************");


		searchCustomer.setLastName("Pan");

	    
	}

	@Then("USer Should Found Name in Search Table")
	public void user_Should_Found_Name_in_Search_Table() {
		

		
	boolean status = 	searchCustomer.searchCustomerByName("James Pan");
	
	Assert.assertEquals(true, status);
	
	}












}
