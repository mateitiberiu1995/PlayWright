# PlayWright
doing some Playwright automation exercises based on the following PDF https://www.uio.no/studier/emner/matnat/ifi/IN3240/v25/ukeoppgaver/s06-itera-testautomatisering.pdf


Test Case 1:
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button


I had problems in the beginning with selecting the signup button login, came with the solution of selecting the listitem and then the filter( i had a listitem and a level in the beginning, but i felt this way is much better ).
After that i had some problems with the placeholders of email as the email for login and signup had the same placeholder and was on the same page, after many attempts that didnt work i came with the solution of changing the TestIdAttribute in configuration, making it easier to select the appropriate one. 
From that moment till the end of the testcase didnt have any issues, a thing that i encountered was the issue with cookies in the beginning . When opening the page you have a popup that will not allow you to click anything, making my test fail without any issues.


Test Case 2: Login User with correct email and password

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Signup / Login' button
    5. Verify 'Login to your account' is visible
    6. Enter correct email address and password
    7. Click 'login' button
    8. Verify that 'Logged in as username' is visible
    9. Click 'Delete Account' button
    10. Verify that 'ACCOUNT DELETED!' is visible


Test Case 3: Login User with incorrect email and password

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Signup / Login' button
    5. Verify 'Login to your account' is visible
    6. Enter incorrect email address and password
    7. Click 'login' button
    8. Verify error 'Your email or password is incorrect!' is visible

test cases 2 and 3 were easy, i didnt test again the deletion of the account as to have a proper username for later tests


Test Case 4: Logout User

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Signup / Login' button
    5. Verify 'Login to your account' is visible
    6. Enter correct email address and password
    7. Click 'login' button
    8. Verify that 'Logged in as username' is visible
    9. Click 'Logout' button
    10. Verify that user is navigated to login page


Test Case 5: Register User with existing email

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Signup / Login' button
    5. Verify 'New User Signup!' is visible
    6. Enter name and already registered email address
    7. Click 'Signup' button
    8. Verify error 'Email Address already exist!' is visible


Test cases 4 and 5 were very simple, without adding something complicated that i didnt use before. 


Test Case 6: Contact Us Form

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Contact Us' button
    5. Verify 'GET IN TOUCH' is visible
    6. Enter name, email, subject and message
    7. Upload file
    8. Click 'Submit' button
    9. Click OK button
    10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    11. Click 'Home' button and verify that landed to home page successfully

With test case 6 I encountered some issues, first was the placeholder email (they had another email text box down the page), solved that. I encountered the choose a file button, after some researching i came with an answer. 
After that and what i think was an actual problem, pressing submit will open a dialog box , on my browser it shows but everytime was used in the project chronium webkit or firefox that dialog box wasnt opening. 
At first i thought it was a popup, but later on after some digging i found its a dialog box, with the help of the internet i made it for the dialog box to accept the message without any issue. The main problem was that pressing the submit button wouldnt get you to the next page, blocking everything.
The rest of the exercise was easy. 


Test Case 7: Verify Test Cases Page

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Test Cases' button
    5. Verify user is navigated to test cases page successfully


Test Case 8: Verify All Products and product detail page

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Products' button
    5. Verify user is navigated to ALL PRODUCTS page successfully
    6. The products list is visible
    7. Click on 'View Product' of first product
    8. User is landed to product detail page
    9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

with test case 8 i had to learn the first function when having more than one thing in the page. 


Test Case 9: Search Product

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Products' button
    5. Verify user is navigated to ALL PRODUCTS page successfully
    6. Enter product name in search input and click search button
    7. Verify 'SEARCHED PRODUCTS' is visible
    8. Verify all the products related to search are visible


Test Case 10: Verify Subscription in home page

    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Scroll down to footer
    5. Verify text 'SUBSCRIPTION'
    6. Enter email address in input and click arrow button
    7. Verify success message 'You have been successfully subscribed!' is visible

until now it wasnt so complicated, some new stuff to search items and that's all



