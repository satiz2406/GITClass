package com.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.LibGlobal;

public class SelectHtlPojo extends LibGlobal {
 
	 public SelectHtlPojo() {
		PageFactory.initElements(driver, this);
	}
	 @FindBy(id="radiobutton_0")
		private WebElement searchRadioBtn;
	 
		@FindBy(id="continue")
		private WebElement clickSearch;

		public WebElement getSearchRadioBtn() {
			return searchRadioBtn;
		}

		public WebElement getClickSearch() {
			return clickSearch;
		}
}
