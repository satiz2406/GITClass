Feature: Validation of Audactin Booking
Background:
Given User launch Audactin Webpage
Then User verify Audactin Login Page is displayed
When User enters username and password
And User clicks Login Button
Then User verify Search Hotel Page is displayed

Scenario: TC_01 Validation of Hotel Booking in Audactin Webpage
When User selects Location,Hotel,RoomType,NoOfRooms
And User clicks Search Button
Then User verify Select Hotel Page is displayed
When User clicks Select Radio Button and clicks Continue Button
Then User verify Book a Hotel Page is displayed
When User enters FirstName,LastName,BillingAddress
When User enters CardNumber,ExpiryMonth,ExpiryYear,CVV,CardType
And User Clicks BookNow Button
Then User verify OrderId is displayed


Scenario Outline: TC_02 Validation of Multiple Hotel Bookings in Audactin Webpage
When User selects "<Location>","<Hotel>","<RoomType>"and"<NoOfRooms>"
And User clicks Search Button
Then User verify Select Hotel Page is displayed
When User clicks Select Radio Button and clicks Continue Button
Then User verify Book a Hotel Page is displayed
When User enters "<FirstName>","<LastName>","<BillingAddress>"
When User enters "<CardNumber>","<CardType>","<ExpiryMonth>","<ExpiryYear>"and"<CVV>"
And User Clicks BookNow Button
Then User verify OrderId is displayed
 Examples:
|Location|Hotel|RoomType|NoOfRooms|FirstName|LastName|BillingAddress|CardNumber|CardType|ExpiryMonth|ExpiryYear|CVV|
|Sydney|Hotel Creek|Standard|2-Two|Sathish|Sai|Chennai|1234567812345678|VISA|June|2022|789|
|Melbourne|Hotel Sunshine|Deluxe|1-One|Sathis|Sai|Erode|1234567832165498|VISA|April|2022|456|
|Brisbane|Hotel Hervey|Double|3-Three|Satiz|Sai|Salem|1234567878945612|Master Card|May|2022|123|
|London|Hotel Cornice|Standard|2-Two|Sathi|Sai|Coimbatore|7894561212345678|American Express|December|2022|987|











