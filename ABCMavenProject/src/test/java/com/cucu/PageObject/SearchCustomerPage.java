package com.cucu.PageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.cucu.Utilities.WaitHelper;

public class SearchCustomerPage {
	
	public WebDriver ldriver;
	
	WaitHelper waithelper;
	
	
	public SearchCustomerPage(WebDriver rdriver) {
		
		ldriver = rdriver;
		PageFactory.initElements(ldriver, this);
		waithelper=new WaitHelper(ldriver);
		
		
	}
	
	@FindBy(how=How.ID, using ="SearchEmail")
	@CacheLookup
	WebElement txtEmail;
	
	@FindBy(how=How.ID, using ="SearchFirstName")
	@CacheLookup
	WebElement txtFirstname;

	@FindBy(how=How.ID, using ="SearchLastName")
	@CacheLookup
	WebElement txtLastName;
	
	@FindBy(how=How.ID, using ="SearchMonthOfBirth")
	@CacheLookup
	WebElement drpdob;
	
	@FindBy(how=How.ID, using ="SearchCompany")
	@CacheLookup
	WebElement txtcompanyname;
	
	@FindBy(how=How.ID, using ="SearchIpAddress")
	@CacheLookup
	WebElement txtipaddress;
	
	
	
	@FindBy(how=How.XPATH, using ="//*[@id=\"SelectedCustomerRoleIds_listbox\"]/li[1]")
	@CacheLookup
	WebElement txtadmin;
	
	@FindBy(how=How.XPATH, using ="//*[@id=\"SelectedCustomerRoleIds_listbox\"]/li[2]")
	@CacheLookup
	WebElement txtforummode;
	
	@FindBy(how=How.XPATH, using ="//*[@id=\"SelectedCustomerRoleIds_listbox\"]/li[3]")
	@CacheLookup
	WebElement txtGuest;
	
	@FindBy(how=How.XPATH, using ="//*[@id=\"c32e52d7-747f-4c42-83e6-a19c7246acce\"]")
	@CacheLookup
	WebElement txtVendor;
	
	
	@FindBy(how=How.ID, using ="search-customers")
	@CacheLookup
	WebElement txtSearchCu;
	
	@FindBy(how=How.XPATH, using ="//table[@id='customers-grid']")
	WebElement table;
	
	@FindBy(how=How.XPATH, using ="//table[@id='customers-grid']//tbody/tr")
	List<WebElement> tableRows;
	
	@FindBy(how=How.XPATH, using ="//table[@id='customers-grid']//tbody/tr/td")
	List<WebElement> tableColumn;
	
	public void setEmail(String email) {
		waithelper.WaitforElement(txtEmail, 30);
		txtEmail.clear();
		txtEmail.sendKeys(email);
		
	}
	
	public void setFirstName(String fname) {
		
		waithelper.WaitforElement(txtFirstname, 30);
		txtFirstname.clear();
		txtFirstname.sendKeys(fname);
		
	}
	
	public void setLastName(String lname) {
		
		waithelper.WaitforElement(txtLastName, 30);
		txtLastName.clear();
		txtLastName.sendKeys(lname);
		
	}
	
	public void clickSearch() {
		
		txtSearchCu.click();
		waithelper.WaitforElement(txtSearchCu, 30);

	}
	
	public int getNoofRows() {
		
		return(tableRows.size());
		
	}
	public int getNoofColumns() {
		
		return(tableColumn.size());
		
	}
	
	public boolean searchCustomerByEmail(String email) {
	
		boolean flag=false;
		
		for(int i=1;i<=getNoofRows();i++) {
			
			String emailid=table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr["+i+"]/td[2]")).getText();
			System.out.println(emailid);
			
			if(emailid.equals(email)) {
				
				flag=true;
			}
		
		}
		return flag;
		
		
	}
	
	public boolean searchCustomerByName(String Name) {
		
		boolean flag=false;
		
		for(int i=1;i<=getNoofRows();i++) {
			
			String name=table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr["+i+"]/td[3]")).getText();
			String names[] = name.split(" ");
			
			
			if(names[0].equals("James") && names[1].equals("Pan")) {
				
				flag=true;
			}
		
		}
		return flag;
		
		
	}
	
	
	
	
	
	
}
