package com.cucu.PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver ldriver;
	
	public LoginPage(WebDriver driver)
	{
		
		ldriver = driver;
		PageFactory.initElements(driver, this);
		
	}
	
	public LoginPage(ChromeDriver driver) {
		// TODO Auto-generated constructor stub
	}

	@FindBy(id="Email")
	@CacheLookup
	WebElement txtEmail;
	
	@FindBy(id="Password")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(xpath="/html/body/div[6]/div/div/div/div/div[2]/div[1]/div/form/div[3]/button")
	@CacheLookup
	WebElement btnLogin;
	
	@FindBy(linkText = "Logout")
	@CacheLookup
	WebElement lnkLogout;
	
	public void setUserName(String uname) {
		
		txtEmail.clear();
		txtEmail.sendKeys(uname);;
		
	}
	
	public void setPassWord(String pwd) {
		
		txtPassword.clear();
		txtPassword.sendKeys(pwd);
	}
	
	public void clicklogin() {
		
		btnLogin.click();
	}
	
	public void clicklogout() {
		
		lnkLogout.click();
	}
	
	
	
	
	

}
