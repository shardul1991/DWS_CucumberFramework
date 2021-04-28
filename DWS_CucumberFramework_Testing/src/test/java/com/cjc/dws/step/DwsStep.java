package com.cjc.dws.step;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DwsStep {

	static WebDriver driver;
	
	@When("^user enter \"([^\"]*)\" browser$")
	public void user_enter_browser(String browserName)  
	{
	   if(browserName.equalsIgnoreCase("chrome"))
	   {
		   System.out.println("Chrome Browser");
		   System.setProperty("webdriver.chrome.driver","F:\\Testing\\Automation Testing\\Software\\chromedriver.exe");
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
	   }
	   else
	   {
		   System.out.println("IE Browser");
	   }
	   
	}

	@And("^user enter url \"([^\"]*)\"$")
	public void user_enter_url(String url)  {
	  driver.get(url);
	}


//Register	
	@When("^Click on gender male or female$")
	public void click_on_gender_male_or_female() 
	{
	   driver.findElement(By.id("gender-male")).click();
	   System.out.println("Male gender selected");
	  
	}

	@When("^enter First Name as \"([^\"]*)\"$")
	public void enter_First_Name_as(String fname)  
	{
	   driver.findElement(By.name("FirstName")).sendKeys(fname);
	   System.out.println("First Name Entered successfully");
	  
	}

	@When("^enter Last Name as \"([^\"]*)\"$")
	public void enter_Last_Name_as(String lname)  
	{
	    driver.findElement(By.name("LastName")).sendKeys(lname);
	    System.out.println("Last Name Entered successfully");
	}

	@When("^enter Email as \"([^\"]*)\"$")
	public void enter_Email_as(String mail)  
	{
	   driver.findElement(By.name("Email")).sendKeys(mail);
	   System.out.println("Email Entered successfully");
	}

	@When("^enter Password as \"([^\"]*)\"$")
	public void enter_Password_as(String pass)  
	{
	   driver.findElement(By.name("Password")).sendKeys(pass);
	   System.out.println("Password Entered successfully");
	}

	@When("^enter Confirm Password as \"([^\"]*)\"$")
	public void enter_Confirm_Password_as(String confirm){
		
		driver.findElement(By.name("ConfirmPassword")).sendKeys(confirm);
		 System.out.println("Confirm Password Entered successfully");
	}

	@Then("^click on Register button$")
	public void click_on_Register_button()  
	{
	   driver.findElement(By.name("register-button")).click();;
	   System.out.println("Register button clicked");
	}
	
//Add to cart: Book	
	
	@When("^click on Books url$")
	public void click_on_Books_url() 
	{
		
	    driver.findElement(By.xpath("/html/body/div[4]/div[1]/div[2]/ul[1]/li[1]/a")).click();
	    System.out.println("Clicked on Books URL");
	}

	@And("^click on book you want to buy$")
	public void click_on_book_you_want_to_buy()  {
		
		driver.findElement(By.cssSelector("div[class=\"picture\"] a[href=\"/computing-and-internet\"] img[alt=\"Picture of Computing and Internet\"]")).click();
	  System.out.println("Clicked on book to Buy");
	}

	@When("^click on Add to cart to add that book to successfully add the book to cart$")
	public void click_on_Add_to_cart_to_add_that_book_to_successfully_add_the_book_to_cart() 
	{
		
	   driver.findElement(By.id("add-to-cart-button-13")).click();
	  System.out.println("Book added to cart");
	}
	
//Add to cart : Desktop Computer
	
	@When("^click on the computer link$")
	public void click_on_the_computer_link() 
	{	    
		driver.findElement(By.cssSelector("body > div.master-wrapper-page > div.master-wrapper-content > div.header-menu > ul.top-menu > li:nth-child(2) > a")).click();
		System.out.println("Clicked on computer url");
	}

	@And("^click on the desktop$")
	public void click_on_the_desktop() 
	{
	   driver.findElement(By.cssSelector("body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-body > div.sub-category-grid > div:nth-child(1) > div > div > a > img")).click();
	   System.out.println("Clicked on desktop url");
	  
	}

	@And("^click on the desktop user want to buy$")
	public void click_on_the_desktop_user_want_to_buy()
	{
	   driver.findElement(By.cssSelector("body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-body > div.product-grid > div:nth-child(1) > div > div.picture > a > img")).click();
	   System.out.println("Clicked on desktop user want to buy");
	    
	}

	@Then("^click add to cart to add the desktop to succssefully add the desktop to cart$")
	public void click_add_to_cart_to_add_the_desktop_to_succssefully_add_the_desktop_to_cart()  {
	 
		driver.findElement(By.id("add-to-cart-button-72")).click();
		 System.out.println("Desktop added to cart");
	}
	
//Add to cart Jewellery
	
	@Then("^Click on the jewellery url$")
	public void click_on_the_jewellery_url() 
	{
	   driver.findElement(By.cssSelector("body > div.master-wrapper-page > div.master-wrapper-content > div.header-menu > ul.top-menu > li:nth-child(6) > a")).click();
	   System.out.println("Click on Jewellery Url");
	    
	}

	@And("^Click on create on create own jewellery$")
	public void click_on_create_on_create_own_jewellery() 
	{
	    driver.findElement(By.cssSelector("body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-body > div.product-grid > div:nth-child(1) > div > div.picture > a > img")).click();
		   System.out.println("Click on create on create own jewellery");
	}

	@And("^Enter the length \"([^\"]*)\" of jewellery$")
	public void enter_the_length_of_jewellery(String cm) 
	{
	   driver.findElement(By.id("product_attribute_71_10_16")).sendKeys(cm);
	   System.out.println("Jewellery Length entered successfully");
	  
	}

	@Then("^Add to cart the jewellery$")
	public void add_to_cart_the_jewellery()  {
	   
		driver.findElement(By.id("add-to-cart-button-71")).click();
		System.out.println("Jewellery Added successfully");
	}
	
//Shopping Cart
	
	@When("^click on shopping cart url$")
	public void click_on_shopping_cart_url()  
	{
	   driver.findElement(By.cssSelector("#topcartlink > a > span.cart-label")).click(); 
	  
	}

	@And("^click on I agree$")
	public void click_on_I_agree() 
	{
	    driver.findElement(By.id("termsofservice")).click();

	}

	@Then("^click on checkout button$")
	public void click_on_checkout_button()
	{
	    driver.findElement(By.id("checkout")).click();
	}
	
//Billing and Checkout
	
	@When("^select country \"([^\"]*)\"$")
	public void select_country(String coun)  
	{
	    driver.findElement(By.id("BillingNewAddress_CountryId")).sendKeys("India");
	   
	}

	@And("^enter city \"([^\"]*)\"$")
	public void enter_city(String city)  
	{
	    
	    driver.findElement(By.id("BillingNewAddress_City")).sendKeys(city);
	}
	
	@When("^enter address \"([^\"]*)\"$")
	public void enter_address(String address)
	{
		driver.findElement(By.id("BillingNewAddress_Address1")).sendKeys(address);
		
	}
		
	@And("^enter zip code \"([^\"]*)\"$")
	public void enter_zip_code(String zip)  
	{
	  
	    driver.findElement(By.id("BillingNewAddress_ZipPostalCode")).sendKeys(zip);
	}

	@And("^enter phone number \"([^\"]*)\"$")
	public void enter_phone_number(String phone)  
	{
	    driver.findElement(By.id("BillingNewAddress_PhoneNumber")).sendKeys(phone);
	   
	}

	@Then("^click on continue billing address button$")
	public void click_on_continue_billing_address_button() throws InterruptedException
	{
		Thread.sleep(2000);
	   driver.findElement(By.cssSelector("#billing-buttons-container > input")).click();
	   
	}

	@Then("^click on continue shipping address button$")
	public void click_on_continue_shipping_address_button() throws InterruptedException 
	{
		Thread.sleep(2000);
		driver.findElement(By.cssSelector("#shipping-buttons-container > input")).click();

	   
	}

	@Then("^click on shipping method continue button$")
	public void click_on_shipping_method_continue_button() throws InterruptedException 
	{
		Thread.sleep(2000);
		driver.findElement(By.cssSelector("#shipping-method-buttons-container > input")).click();
	   
	}

	@Then("^click on payment method continue button$")
	public void click_on_payment_method_continue_button() throws InterruptedException
	{
		Thread.sleep(2000);
		driver.findElement(By.cssSelector("#payment-method-buttons-container > input")).click();
	    
	}

	@Then("^click on Payment Information$")
	public void click_on_Payment_Information() throws InterruptedException 
	{
		Thread.sleep(2000);
		driver.findElement(By.cssSelector("#payment-info-buttons-container > input")).click();
	}

	@Then("^click on confirm button$")
	public void click_on_confirm_button() throws InterruptedException 
	{
		Thread.sleep(2000);
		driver.findElement(By.cssSelector("#confirm-order-buttons-container > input")).click();
	    
	}
	
	@Then("^get the text and print$")
	public void get_the_text_and_print() throws InterruptedException 
	{
		Thread.sleep(2000);
		String orderno=driver.findElement(By.cssSelector("body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div > div.page-body.checkout-data > div > ul > li:nth-child(1)")).getText();
	   System.out.println("Order Number: "+orderno);
	}

	
	
	@Then("^click on continue order has been successfully placed$")
	public void click_on_continue_order_has_been_successfully_placed() throws InterruptedException  
	{
		Thread.sleep(2000);
	    driver.findElement(By.cssSelector("body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div > div.page-body.checkout-data > div > div.buttons > input")).click();
	  
	}
	
}
