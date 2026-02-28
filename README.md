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




