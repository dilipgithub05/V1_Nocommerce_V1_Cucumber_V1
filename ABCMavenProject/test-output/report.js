$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:feature/Customer.feature");
formatter.feature({
  "name": "Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Below are the common Steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "USer launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_enters_Email_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can View Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_can_View_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User click on Customer Menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_click_on_Customer_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Customer_menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Add new Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Add_new_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can View Add new Customer Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_can_View_Add_new_Customer_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Customer info",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_enter_Customer_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer can view confirmation message \"The new Customer has been added successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_can_view_confirmation_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.close_the_broswer()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common Steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "USer launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_enters_Email_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can View Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_can_View_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Customer by EmailID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User click on Customer Menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_click_on_Customer_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Customer_menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Customer first name and last name",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.enter_Customer_first_name_and_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search Button",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Should found Email in the search Table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_Should_found_Email_in_the_search_Table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.close_the_broswer()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common Steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "USer launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_enters_Email_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can View Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_can_View_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Customer by Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User click on Customer Menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_click_on_Customer_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Customer_menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Customer FirstName",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.enter_Customer_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Customer Lastname",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.enter_Customer_Lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search Button",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer Should Found Name in Search Table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_Should_Found_Name_in_Search_Table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.close_the_broswer()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:feature/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "USer launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_enters_Email_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on log out link",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_click_on_log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title shoul be \"your store.Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.page_title_shoul_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.close_the_broswer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": ": Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "USer launch the Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on log out link",
  "keyword": "When "
});
formatter.step({
  "name": "page title shoul be \"your store.Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin1@yourstore.com",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": ": Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "USer launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_enters_Email_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on log out link",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_click_on_log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title shoul be \"your store.Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.page_title_shoul_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.close_the_broswer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "USer launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin1@yourstore.com\" and Password as \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_enters_Email_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \r\n\tat org.testng.AssertJUnit.fail(AssertJUnit.java:59)\r\n\tat org.testng.AssertJUnit.assertTrue(AssertJUnit.java:24)\r\n\tat org.testng.AssertJUnit.assertTrue(AssertJUnit.java:33)\r\n\tat com.cucu.StepDefinition.Steps.page_Title_should_be(Steps.java:74)\r\n\tat ✽.page Title should be \"Dashboard / nopCommerce administration\"(file:///C:/Users/Rog/eclipse-workspace/ABCMavenProject/feature/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on log out link",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.user_click_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "page title shoul be \"your store.Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.page_title_shoul_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucu.StepDefinition.Steps.close_the_broswer()"
});
formatter.result({
  "status": "skipped"
});
});