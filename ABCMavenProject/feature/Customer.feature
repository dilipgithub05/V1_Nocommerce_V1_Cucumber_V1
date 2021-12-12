Feature: Customer



 Background: Below are the common Steps for each scenario
	Given USer launch the Chrome Browser 
	When  User open URL "https://admin-demo.nopcommerce.com/login" 
	And  User enters Email as "admin@yourstore.com" and Password as "admin" 
	And  Click on Login 
	Then  User can View Dashboard 
	
@sanity	
Scenario: Add a new Customer

	
	When User click on Customer Menu
	And Click on Customer menu Item
	And Click on Add new Button
	Then User can View Add new Customer Page
	When User enter Customer info
	And Click on Save Button
	Then USer can view confirmation message "The new Customer has been added successfully"
	And close the broswer
	
@regression	
Scenario: Search Customer by EmailID

	When User click on Customer Menu
	And Click on Customer menu Item
	And Enter Customer first name and last name
	When Click on search Button
	Then user Should found Email in the search Table
	And close the broswer
	
@regression	
Scenario: Search Customer by Name
	

	When User click on Customer Menu
	And Click on Customer menu Item
	And Enter Customer FirstName
	And Enter Customer Lastname
	When Click on search Button
	Then USer Should Found Name in Search Table
	And close the broswer