package com.stepdefinition;

import com.baseclass.LibGlobal;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends LibGlobal{

	@Before
	public void beforeExecution() {
		 launchBrowser();
		    maxiWindow();
		    launchUrl("https://adactinhotelapp.com/");

	}
	@After
	public void afterExecution() {
		quitBrowser();
	}
	
}
