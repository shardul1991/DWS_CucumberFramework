package com.cjc.dws.step;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void beforeMethod()
	{
		System.out.println("Before Method");
	}
	
	@After
	public void afterMethod()
	{
		System.out.println("After Method");
	}
}
