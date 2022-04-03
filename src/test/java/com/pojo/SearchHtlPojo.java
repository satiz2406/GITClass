package com.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.LibGlobal;

public class SearchHtlPojo extends LibGlobal{
   
	public SearchHtlPojo() {
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getDdLocation() {
		return ddLocation;
	}

	public WebElement getDdHotels() {
		return ddHotels;
	}

	public WebElement getDdRoomtype() {
		return ddRoomtype;
	}

	public WebElement getDdNoRoooms() {
		return ddNoRoooms;
	}

	public WebElement getInDate() {
		return inDate;
	}

	public WebElement getOutDate() {
		return outDate;
	}

	public WebElement getDdPersons() {
		return ddPersons;
	}

	public WebElement getClkSearch() {
		return clkSearch;
	}

	@FindBy(id="location")
	private WebElement ddLocation;
	
    @FindBy(id="hotels")
	private WebElement ddHotels;
    
    @FindBy(id="room_type")
	private WebElement ddRoomtype;
    
    @FindBy(id="room_nos")
	private WebElement ddNoRoooms;
    
    @FindBy(id="datepick_in")
	private WebElement inDate;
    
    @FindBy(id="datepick_out")
	private WebElement outDate;
    
    @FindBy(id="adult_room")
	private WebElement ddPersons;
    
    @FindBy(id="Submit")
    private WebElement clkSearch;
}
