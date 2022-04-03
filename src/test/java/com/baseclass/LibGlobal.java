package com.baseclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LibGlobal {
	public static WebDriver driver;

	public void launchBrowser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();	
	}
	public void maxiWindow() {
		driver.manage().window().maximize();
	}
	 public void launchUrl(String url) {
		driver.get(url);
	}
	 public void type(WebElement element,String data) {
		element.sendKeys(data);
	}
	 public void btnClick(WebElement element) {
		element.click();
	}
	 public String getMessage(WebElement element) {
		return element.getText();
	}
	 public String getUrl() {
		return driver.getCurrentUrl();
	}
	 public String textAttribute(WebElement element) {
		return element.getAttribute("value");

	}
	 public void quitBrowser() {
		driver.quit();

	}
	
	
	
}
