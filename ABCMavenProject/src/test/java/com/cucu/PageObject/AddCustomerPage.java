package com.cucu.PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomerPage {

	public WebDriver ldriver;

	public AddCustomerPage(WebDriver rdriver) {

		ldriver = rdriver;
		PageFactory.initElements(ldriver, this);
	}

	By logout = By.xpath("//*[@id=\"navbarText\"]/ul/li[3]/a");

	By lnkCustomer = By.xpath("/html/body/div[3]/aside/div/div[4]/div/div/nav/ul/li[4]/a/p/i");
	By lnk2customer = By.xpath("//html/body/div[3]/aside/div/div[4]/div/div/nav/ul/li[4]/ul/li[1]/a/p");
	By addnew = By.xpath("/html/body/div[3]/div[1]/form[1]/div/div/a");

	By enterEmail = By.id("Email");
	By enterPassword = By.id("Password");
	By enterFirstname = By.id("FirstName");
	By enterLastname = By.id("LastName");
	By GenderMale = By.xpath("//*[@id=\"customer-info\"]/div[2]/div[5]/div[2]/div/div[1]/label");
	By Genderfemale = By.xpath("//*[@id=\"customer-info\"]/div[2]/div[5]/div[2]/div/div[2]/label");
	By sdob = By.id("DateOfBirth");
	By companynames = By.id("Company");
	By taxattemp = By.id("IsTaxExempt");
	By Newletter = By.xpath("//*[@id=\"customer-info\"]/div[2]/div[9]/div[2]/div/div[1]/div");
	By CustomerRole = By.xpath("//*[@id=\"customer-info\"]/div[2]/div[10]/div[2]/div/div[1]/div/div");
	By lntextAdmin = By.xpath("//*[@id=\"SelectedCustomerRoleIds_listbox\"]/li[1]");
	By lnktextfroumMode = By.xpath("//*[@id=\"SelectedCustomerRoleIds_listbox\"]/li[2]");
	By lnktextGuest = By.xpath("//*[@id=\"SelectedCustomerRoleIds_listbox\"]/li[3]");
	By lnktextvendor = By.xpath("//*[@id=\"SelectedCustomerRoleIds_listbox\"]/li[5]");
	By deleteCustomerrole = By.xpath("//*[@id=\"SelectedCustomerRoleIds_taglist\"]/li/span[2]");
	By txtlnkRegister = By.xpath("//*[@id=\"10ed9cc3-2a44-4991-92d6-cc9df0df1447\"]");
	By manageVendor = By.id("VendorId");
	By Active = By.id("Active");
	By AdminComment = By.id("AdminComment");
	By save = By.xpath("/html/body/div[3]/div[1]/form/div[1]/div/button[1]");

	// Actions Methods
	public void deletetxtcus() {

		ldriver.findElement(deleteCustomerrole).click();
	}

	public String getPagetitle() {

		return ldriver.getTitle();
	}

	public void ClickCustomerMenu1() {

		ldriver.findElement(lnkCustomer).click();
	}

	public void ClickmenuCust2() {

		ldriver.findElement(lnk2customer).click();
	}

	public void ClickOnAddNew() {

		ldriver.findElement(addnew).click();

	}

	public void setEmail(String email) {

		ldriver.findElement(enterEmail).sendKeys(email);
	}

	public void setPassword(String password) {
		ldriver.findElement(enterPassword).sendKeys(password);
	}

	public void setCustomerRole(String role) throws InterruptedException {
		WebElement listitem;

		ldriver.findElement(CustomerRole).click();

		Thread.sleep(3000);

		if (role.equals("Administrators")) {

			listitem = ldriver.findElement(lntextAdmin);

		} else if (role.equals("Guests")) {

			listitem = ldriver.findElement(lnktextGuest);
		} else if (role.equals("Registered")) {

			listitem = ldriver.findElement(txtlnkRegister);

		} else if (role.equals("Vendors")) {

			listitem = ldriver.findElement(lnktextvendor);
		} else {

			listitem = ldriver.findElement(lnktextGuest);
		}
		listitem.click();

	}

	public void setGender(String gender) {

		if (gender.equals("Male")) {

			ldriver.findElement(GenderMale).click();

		} else if (gender.equals("Female")) {

			ldriver.findElement(Genderfemale);
		} else {

			ldriver.findElement(GenderMale).click();
		}

	}

	public void setmangerofvendor(String value) {

		Select drp = new Select(ldriver.findElement(manageVendor));
		drp.selectByVisibleText(value);
	}

	public void setFirstname(String fname) {
		ldriver.findElement(enterFirstname).sendKeys(fname);

	}

	public void setlastanme(String lname) {

		ldriver.findElement(enterLastname).sendKeys(lname);
	}

	public void setdob(String dob) {

		ldriver.findElement(sdob).sendKeys(dob);
	}

	public void companyname(String cmname) {

		ldriver.findElement(companynames).sendKeys(cmname);
	}

	public void admincomment(String admincmd) {
		ldriver.findElement(AdminComment).sendKeys(admincmd);
	}

	public void txtsave() {

		ldriver.findElement(save).click();
	}

}
