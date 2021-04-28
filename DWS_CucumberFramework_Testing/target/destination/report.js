$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dwsproject.feature");
formatter.feature({
  "line": 1,
  "name": "User able to Register, Add items to cart and checkout",
  "description": "",
  "id": "user-able-to-register,-add-items-to-cart-and-checkout",
  "keyword": "Feature"
});
formatter.before({
  "duration": 238500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User open chrome and pass url",
  "description": "",
  "id": "user-able-to-register,-add-items-to-cart-and-checkout;user-open-chrome-and-pass-url",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user enter \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter url \"http://demowebshop.tricentis.com/register\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "DwsStep.user_enter_browser(String)"
});
formatter.result({
  "duration": 4711410100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/register",
      "offset": 16
    }
  ],
  "location": "DwsStep.user_enter_url(String)"
});
formatter.result({
  "duration": 3559149500,
  "status": "passed"
});
formatter.after({
  "duration": 88301,
  "status": "passed"
});
formatter.before({
  "duration": 115300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User enter all register details and register",
  "description": "",
  "id": "user-able-to-register,-add-items-to-cart-and-checkout;user-enter-all-register-details-and-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Click on gender male or female",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter First Name as \"Shardul\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter Last Name as \"Londhe\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "enter Email as \"dws15@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "enter Password as \"0123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter Confirm Password as \"0123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "DwsStep.click_on_gender_male_or_female()"
});
formatter.result({
  "duration": 100756001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shardul",
      "offset": 21
    }
  ],
  "location": "DwsStep.enter_First_Name_as(String)"
});
formatter.result({
  "duration": 130605701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Londhe",
      "offset": 20
    }
  ],
  "location": "DwsStep.enter_Last_Name_as(String)"
});
formatter.result({
  "duration": 122418000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dws15@gmail.com",
      "offset": 16
    }
  ],
  "location": "DwsStep.enter_Email_as(String)"
});
formatter.result({
  "duration": 129927699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456",
      "offset": 19
    }
  ],
  "location": "DwsStep.enter_Password_as(String)"
});
formatter.result({
  "duration": 99851800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456",
      "offset": 27
    }
  ],
  "location": "DwsStep.enter_Confirm_Password_as(String)"
});
formatter.result({
  "duration": 93540201,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_Register_button()"
});
formatter.result({
  "duration": 1237848700,
  "status": "passed"
});
formatter.after({
  "duration": 349300,
  "status": "passed"
});
formatter.before({
  "duration": 113099,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Select book and add to cart",
  "description": "",
  "id": "user-able-to-register,-add-items-to-cart-and-checkout;select-book-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "click on Books url",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "click on book you want to buy",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on Add to cart to add that book to successfully add the book to cart",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on the computer link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on the desktop",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on the desktop user want to buy",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click add to cart to add the desktop to succssefully add the desktop to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on the jewellery url",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on create on create own jewellery",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter the length \"50\" of jewellery",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Add to cart the jewellery",
  "keyword": "Then "
});
formatter.match({
  "location": "DwsStep.click_on_Books_url()"
});
formatter.result({
  "duration": 1181909500,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_book_you_want_to_buy()"
});
formatter.result({
  "duration": 2873692800,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_Add_to_cart_to_add_that_book_to_successfully_add_the_book_to_cart()"
});
formatter.result({
  "duration": 94104200,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_the_computer_link()"
});
formatter.result({
  "duration": 907500499,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_the_desktop()"
});
formatter.result({
  "duration": 1270320401,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_the_desktop_user_want_to_buy()"
});
formatter.result({
  "duration": 2767503200,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_add_to_cart_to_add_the_desktop_to_succssefully_add_the_desktop_to_cart()"
});
formatter.result({
  "duration": 102709600,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_the_jewellery_url()"
});
formatter.result({
  "duration": 1378393500,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_create_on_create_own_jewellery()"
});
formatter.result({
  "duration": 1637685300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 18
    }
  ],
  "location": "DwsStep.enter_the_length_of_jewellery(String)"
});
formatter.result({
  "duration": 109516400,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.add_to_cart_the_jewellery()"
});
formatter.result({
  "duration": 111292300,
  "status": "passed"
});
formatter.after({
  "duration": 192701,
  "status": "passed"
});
formatter.before({
  "duration": 120301,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Shopping cart  and terms agree",
  "description": "",
  "id": "user-able-to-register,-add-items-to-cart-and-checkout;shopping-cart--and-terms-agree",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "click on shopping cart url",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "click on I agree",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "click on checkout button",
  "keyword": "Then "
});
formatter.match({
  "location": "DwsStep.click_on_shopping_cart_url()"
});
formatter.result({
  "duration": 1145082100,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_I_agree()"
});
formatter.result({
  "duration": 93086699,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_checkout_button()"
});
formatter.result({
  "duration": 1898559200,
  "status": "passed"
});
formatter.after({
  "duration": 64400,
  "status": "passed"
});
formatter.before({
  "duration": 464199,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Biiling and Checkout",
  "description": "",
  "id": "user-able-to-register,-add-items-to-cart-and-checkout;biiling-and-checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "select country \"India\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "enter city \"pune\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "enter address \"kothrud\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "enter zip code \"411038\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "enter phone number \"0123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "click on continue billing address button",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on continue shipping address button",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click on shipping method continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "click on payment method continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "click on Payment Information",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "click on confirm button",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "get the text and print",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "click on continue order has been successfully placed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 16
    }
  ],
  "location": "DwsStep.select_country(String)"
});
formatter.result({
  "duration": 106788400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pune",
      "offset": 12
    }
  ],
  "location": "DwsStep.enter_city(String)"
});
formatter.result({
  "duration": 107385400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kothrud",
      "offset": 15
    }
  ],
  "location": "DwsStep.enter_address(String)"
});
formatter.result({
  "duration": 104045900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "411038",
      "offset": 16
    }
  ],
  "location": "DwsStep.enter_zip_code(String)"
});
formatter.result({
  "duration": 119313801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 20
    }
  ],
  "location": "DwsStep.enter_phone_number(String)"
});
formatter.result({
  "duration": 111918600,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_continue_billing_address_button()"
});
formatter.result({
  "duration": 2095208401,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_continue_shipping_address_button()"
});
formatter.result({
  "duration": 2104913699,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_shipping_method_continue_button()"
});
formatter.result({
  "duration": 2112924100,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_payment_method_continue_button()"
});
formatter.result({
  "duration": 2113929600,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_Payment_Information()"
});
formatter.result({
  "duration": 2090938401,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_confirm_button()"
});
formatter.result({
  "duration": 2100596099,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.get_the_text_and_print()"
});
formatter.result({
  "duration": 2150602701,
  "status": "passed"
});
formatter.match({
  "location": "DwsStep.click_on_continue_order_has_been_successfully_placed()"
});
formatter.result({
  "duration": 5564220400,
  "status": "passed"
});
formatter.after({
  "duration": 95200,
  "status": "passed"
});
});