package com.stepdefinition;

import com.baseclass.LibGlobal;
import com.pojo.BookHotelPojo;
import com.pojo.LoginPojo;
import com.pojo.SearchHtlPojo;
import com.pojo.SelectHtlPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinitionClass extends LibGlobal{
	
	LoginPojo lp;
	SearchHtlPojo hp;
	SelectHtlPojo sp;
	BookHotelPojo bp;
	
	
	@Given("User launch Audactin Webpage")
	public void user_launch_Audactin_Webpage() {
	   
	}

	@Then("User verify Audactin Login Page is displayed")
	public void user_verify_Audactin_Login_Page_is_displayed() {
	    boolean contains = getUrl().contains("adactin");
	    System.out.println(contains);
	}

	@When("User enters username and password")
	public void user_enters_username_and_password() {
		lp = new LoginPojo();
	   type(lp.getUserName(), "satizsai");
	   type(lp.getPassWord(), "1F5IF5");
	}

	@When("User clicks Login Button")
	public void user_clicks_Login_Button() {
	   lp=new LoginPojo();
	   btnClick(lp.getBtnClick());
	}

	@Then("User verify Search Hotel Page is displayed")
	public void user_verify_Search_Hotel_Page_is_displayed() {
	   
	}

	@When("User selects Location,Hotel,RoomType,NoOfRooms")
	public void user_selects_Location_Hotel_RoomType_NoOfRooms() {
		hp = new SearchHtlPojo();
		type(hp.getDdLocation(), "Sydney");
		type(hp.getDdHotels(), "Hotel Sun Shine");
		type(hp.getDdRoomtype(), "Standard");
		type(hp.getDdNoRoooms(), "2-Two");
	}

	@When("User clicks Search Button")
	public void user_clicks_Search_Button() {
	    hp= new SearchHtlPojo();
	    btnClick(hp.getClkSearch());
	}

	@Then("User verify Select Hotel Page is displayed")
	public void user_verify_Select_Hotel_Page_is_displayed() {
	   
	}

	@When("User clicks Select Radio Button and clicks Continue Button")
	public void user_clicks_Select_Radio_Button_and_clicks_Continue_Button() {
	   sp = new SelectHtlPojo();
	    btnClick(sp.getSearchRadioBtn());
	    btnClick(sp.getClickSearch());
	}

	@Then("User verify Book a Hotel Page is displayed")
	public void user_verify_Book_a_Hotel_Page_is_displayed() {
	   
	}

	@When("User enters FirstName,LastName,BillingAddress")
	public void user_enters_FirstName_LastName_BillingAddress() {
	    bp = new BookHotelPojo();
	    type(bp.getFirstName(), "satiz");
	    type(bp.getLastName(), "sai");
	    type(bp.getBillAddress(), "Chennai");
	}

	@When("User enters CardNumber,ExpiryMonth,ExpiryYear,CVV,CardType")
	public void user_enters_CardNumber_ExpiryMonth_ExpiryYear_CVV_CardType() {
		bp = new BookHotelPojo();
		type(bp.getCreCardNo(), "1234567890123456");
		type(bp.getCreCardType(), "VISA");
		type(bp.getExpMonth(), "June");
		type(bp.getExpYear(), "2022");
		type(bp.getCvvNo(), "789");
	}

	@When("User Clicks BookNow Button")
	public void user_Clicks_BookNow_Button() {
		bp = new BookHotelPojo();
		btnClick(bp.getBookNow());
	}

	@Then("User verify OrderId is displayed")
	public void user_verify_OrderId_is_displayed() throws InterruptedException {
		//Thread.sleep(3000);
		//bp = new BookHotelPojo();
		//String message = getMessage(bp.getOrderId());
		//System.out.println(message);
	}

	@When("User selects {string},{string},{string}and{string}")
	public void user_selects_and(String string, String string2, String string3, String string4) {
		hp = new SearchHtlPojo();
		type(hp.getDdLocation(), string);
		type(hp.getDdHotels(), string2);
		type(hp.getDdRoomtype(), string3);
		type(hp.getDdNoRoooms(), string4);
	}

	@When("User enters {string},{string},{string}")
	public void user_enters(String string, String string2, String string3) {
		bp = new BookHotelPojo();
		type(bp.getFirstName(), string);
		type(bp.getLastName(), string2);
		type(bp.getBillAddress(), string3);
		
	}

	@When("User enters {string},{string},{string},{string}and{string}")
	public void user_enters_and(String string, String string2, String string3, String string4, String string5) {
		bp = new BookHotelPojo();
		type(bp.getCreCardNo(), string);
		type(bp.getCreCardType(), string2);
		type(bp.getExpMonth(), string3);
		type(bp.getExpYear(), string4);
		type(bp.getCvvNo(), string5);
		
	}



}
