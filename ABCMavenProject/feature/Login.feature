Feature: Login

@sanity
Scenario: Successful Login with Valid Credentials
	Given USer launch the Chrome Browser
	When User open URL "https://admin-demo.nopcommerce.com/login"
	And User enters Email as "admin@yourstore.com" and Password as "admin"
	And Click on Login
	Then page Title should be "Dashboard / nopCommerce administration"
	When user click on log out link
	Then page title shoul be "your store.Login"
	And close the broswer
	
@regression	
Scenario Outline:: Login Data Driven
	Given USer launch the Chrome Browser
	When User open URL "https://admin-demo.nopcommerce.com/login"
	And User enters Email as "<email>" and Password as "<password>"
	And Click on Login
	Then page Title should be "Dashboard / nopCommerce administration"
	When user click on log out link
	Then page title shoul be "your store.Login"
	And close the broswer
	
	Examples:
		| email | password |
		|admin@yourstore.com| admin|
		|admin1@yourstore.com| admin123|