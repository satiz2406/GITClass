package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.baseclass.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features",glue="com.stepdefinition",plugin= {"junit:src\\test\\resources\\Reports\\audactin.xml",
"html:src\\test\\resources\\Reports","json:src\\test\\resources\\Reports\\audactin.json","pretty"},monochrome=true)
public class TestRunner {
  
	@AfterClass
	public static void afterClass() {
		JVMReport.generateJVMReport(System.getProperty("user.dir")+"\\src\\test\\resources\\Reports\\audactin.json");

	}
}
