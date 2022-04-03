package com.baseclass;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
    
	public  static void generateJVMReport(String jsonFile) {
		
         File reportDirectory = new File(System.getProperty("user.dir")+ "\\src\\test\\resources\\Reports");
         Configuration c = new Configuration(reportDirectory, "AudactinHotelBooking");
         c.addClassifications("Platform Name", "Winndows");
         c.addClassifications("Platform version", "10");
         c.addClassifications("Build Number", "123456");
         c.addClassifications("Sprint Number", "44");
          List<String> li = new ArrayList<String>();
          li.add(jsonFile);
         ReportBuilder r = new ReportBuilder(li, c);
         r.generateReports();
	}
}
