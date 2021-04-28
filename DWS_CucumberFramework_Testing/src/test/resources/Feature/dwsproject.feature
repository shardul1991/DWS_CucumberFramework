Feature: User able to Register, Add items to cart and checkout

@Test1
Scenario: User open chrome and pass url 
When user enter "chrome" browser
And  user enter url "http://demowebshop.tricentis.com/register"

@Test2
Scenario: User enter all register details and register
When Click on gender male or female
And enter First Name as "Shardul"
And enter Last Name as "Londhe"
And enter Email as "dws15@gmail.com"
And enter Password as "0123456"
And enter Confirm Password as "0123456"
Then click on Register button

@Test3
Scenario: Select book and add to cart
When click on Books url
And click on book you want to buy
And click on Add to cart to add that book to successfully add the book to cart

And click on the computer link
And click on the desktop
And click on the desktop user want to buy
Then click add to cart to add the desktop to succssefully add the desktop to cart 

And Click on the jewellery url
And Click on create on create own jewellery
And Enter the length "50" of jewellery
Then Add to cart the jewellery 

@Test4
Scenario: Shopping cart  and terms agree
When click on shopping cart url
And click on I agree
Then click on checkout button

@Test5
Scenario: Biiling and Checkout
When select country "India"
And enter city "pune"
And enter address "kothrud"
And enter zip code "411038"
And enter phone number "0123456789"
Then click on continue billing address button
Then click on continue shipping address button
Then click on shipping method continue button
Then click on payment method continue button
Then click on Payment Information 
Then click on confirm button
Then get the text and print 
Then click on continue order has been successfully placed

