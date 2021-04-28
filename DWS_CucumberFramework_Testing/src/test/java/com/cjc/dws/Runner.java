package com.cjc.dws;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src//test//resources//Feature"}, glue={"com.cjc.dws.step"},
tags={"@Test1,@Test2,@Test3,@Test4,@Test5"},format={"pretty","html:target/destination"}, dryRun=false, monochrome = true)

public class Runner
{

	
}
