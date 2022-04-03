$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Adactin.feature");
formatter.feature({
  "name": "Validation of Audactin Booking",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Audactin Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_launch_Audactin_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Audactin Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Audactin_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Search Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Search_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_01 Validation of Hotel Booking in Audactin Webpage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User selects Location,Hotel,RoomType,NoOfRooms",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_selects_Location_Hotel_RoomType_NoOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Select Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Select_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Select Radio Button and clicks Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Select_Radio_Button_and_clicks_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Book a Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Book_a_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters FirstName,LastName,BillingAddress",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_FirstName_LastName_BillingAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters CardNumber,ExpiryMonth,ExpiryYear,CVV,CardType",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_CardNumber_ExpiryMonth_ExpiryYear_CVV_CardType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks BookNow Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Clicks_BookNow_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify OrderId is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_OrderId_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_02 Validation of Multiple Hotel Bookings in Audactin Webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User selects \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoomType\u003e\"and\"\u003cNoOfRooms\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks Search Button",
  "keyword": "And "
});
formatter.step({
  "name": "User verify Select Hotel Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks Select Radio Button and clicks Continue Button",
  "keyword": "When "
});
formatter.step({
  "name": "User verify Book a Hotel Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cBillingAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cCardNumber\u003e\",\"\u003cCardType\u003e\",\"\u003cExpiryMonth\u003e\",\"\u003cExpiryYear\u003e\"and\"\u003cCVV\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Clicks BookNow Button",
  "keyword": "And "
});
formatter.step({
  "name": "User verify OrderId is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Location",
        "Hotel",
        "RoomType",
        "NoOfRooms",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CardNumber",
        "CardType",
        "ExpiryMonth",
        "ExpiryYear",
        "CVV"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "2-Two",
        "Sathish",
        "Sai",
        "Chennai",
        "1234567812345678",
        "VISA",
        "June",
        "2022",
        "789"
      ]
    },
    {
      "cells": [
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "1-One",
        "Sathis",
        "Sai",
        "Erode",
        "1234567832165498",
        "VISA",
        "April",
        "2022",
        "456"
      ]
    },
    {
      "cells": [
        "Brisbane",
        "Hotel Hervey",
        "Double",
        "3-Three",
        "Satiz",
        "Sai",
        "Salem",
        "1234567878945612",
        "Master Card",
        "May",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "London",
        "Hotel Cornice",
        "Standard",
        "2-Two",
        "Sathi",
        "Sai",
        "Coimbatore",
        "7894561212345678",
        "American Express",
        "December",
        "2022",
        "987"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Audactin Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_launch_Audactin_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Audactin Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Audactin_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Search Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Search_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 Validation of Multiple Hotel Bookings in Audactin Webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User selects \"Sydney\",\"Hotel Creek\",\"Standard\"and\"2-Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_selects_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Select Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Select_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Select Radio Button and clicks Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Select_Radio_Button_and_clicks_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Book a Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Book_a_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Sathish\",\"Sai\",\"Chennai\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1234567812345678\",\"VISA\",\"June\",\"2022\"and\"789\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks BookNow Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Clicks_BookNow_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify OrderId is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_OrderId_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Audactin Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_launch_Audactin_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Audactin Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Audactin_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Search Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Search_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 Validation of Multiple Hotel Bookings in Audactin Webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User selects \"Melbourne\",\"Hotel Sunshine\",\"Deluxe\"and\"1-One\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_selects_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Select Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Select_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Select Radio Button and clicks Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Select_Radio_Button_and_clicks_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Book a Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Book_a_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Sathis\",\"Sai\",\"Erode\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1234567832165498\",\"VISA\",\"April\",\"2022\"and\"456\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks BookNow Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Clicks_BookNow_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify OrderId is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_OrderId_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Audactin Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_launch_Audactin_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Audactin Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Audactin_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Search Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Search_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 Validation of Multiple Hotel Bookings in Audactin Webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User selects \"Brisbane\",\"Hotel Hervey\",\"Double\"and\"3-Three\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_selects_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Select Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Select_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Select Radio Button and clicks Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Select_Radio_Button_and_clicks_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Book a Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Book_a_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Satiz\",\"Sai\",\"Salem\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1234567878945612\",\"Master Card\",\"May\",\"2022\"and\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks BookNow Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Clicks_BookNow_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify OrderId is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_OrderId_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Audactin Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_launch_Audactin_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Audactin Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Audactin_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Search Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Search_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 Validation of Multiple Hotel Bookings in Audactin Webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User selects \"London\",\"Hotel Cornice\",\"Standard\"and\"2-Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_selects_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Select Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Select_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Select Radio Button and clicks Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Select_Radio_Button_and_clicks_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Book a Hotel Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Book_a_Hotel_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Sathi\",\"Sai\",\"Coimbatore\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"7894561212345678\",\"American Express\",\"December\",\"2022\"and\"987\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks BookNow Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Clicks_BookNow_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify OrderId is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_OrderId_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});