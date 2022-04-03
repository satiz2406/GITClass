package com.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.LibGlobal;

public class BookHotelPojo extends LibGlobal{
  
	public BookHotelPojo() {
		PageFactory.initElements(driver, this);
	}
	 @FindBy(id="first_name")
		private WebElement firstName;
	 
	    @FindBy(id="last_name")
		private WebElement lastName;
	    
	    @FindBy(id="address")
		private WebElement billAddress;
	    
	    @FindBy(id="cc_num")
		private WebElement creCardNo;
	    
	    @FindBy(id="cc_type")
		private WebElement creCardType;
	    
	    @FindBy(id="cc_exp_month")
	    private WebElement expMonth;
	    
	    @FindBy(id="cc_exp_year")
	    private WebElement expYear;
	    
	    @FindBy(id="cc_cvv")
	    private WebElement cvvNo;
	    
	    @FindBy(id="book_now")
	    private WebElement bookNow;
	    
	    @FindBy(id="search_hotel")
	    private WebElement searchHotel;
	    
	    @FindBy(id="order_no")
	    private WebElement orderId;

		public WebElement getFirstName() {
			return firstName;
		}

		public WebElement getLastName() {
			return lastName;
		}

		public WebElement getBillAddress() {
			return billAddress;
		}

		public WebElement getCreCardNo() {
			return creCardNo;
		}

		public WebElement getCreCardType() {
			return creCardType;
		}

		public WebElement getExpMonth() {
			return expMonth;
		}

		public WebElement getExpYear() {
			return expYear;
		}

		public WebElement getCvvNo() {
			return cvvNo;
		}

		public WebElement getBookNow() {
			return bookNow;
		}

		public WebElement getSearchHotel() {
			return searchHotel;
		}

		public WebElement getOrderId() {
			return orderId;
		}
}
