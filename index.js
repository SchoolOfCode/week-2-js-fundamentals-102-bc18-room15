console.log("Hello from JS file")

//Ticket1✅

// store the correct password `correctPassword` (`"myPassword1!"`) in a variable as a string ✅
//secret information `secretInformation` (`"My favourite colour is #000080!"`) in another variable as a string.✅
//`console.log` the variables you've created and make sure they contain the correct values.✅
//run in the console `npx jest` to see if pass ticket1. ✅

const correctPassword = "myPassword1!";
const secretInformation = "My favourite colour is #000080!";

console.log(correctPassword);
console.log(secretInformation);

//Ticket 2 - Getting user input✅

//create a variable called userInput✅
//create a prompt that tells the the user to input their password✅
// run `npx jest` to see if you have passed ticket 2.✅

const userInput = prompt("Please enter the password.");
console.log(userInput);

//Ticket 3 - Checking the user's input✅

//Create an if statement in which if the user's input is correct✅
//We should display an alert which reveals the secret information.✅
//To check the user's input is equal to the correct password, we can use === as an equality operator✅
//To check that this step is working, load the page in a browser, type in the correct password✅
//Make sure an alert pops up and reveals the secret information✅
//Refresh the page, type in an incorrect password and make sure no alert pops up✅
//Run npx jest to see if you have passed ticket 3.✅

if (userInput === correctPassword) {
    alert("My favourite colour is #000080!")
};

//Ticket 4 - Letting the user try again!

//Create a loop that allows the user to try again if the password is incorrect
//They have 3 attempts in total,
// We can have the code loop around the part where we ask for the password using a loop.
//Declare a variable called attempts with the value of 0✅
//Use the variable attempts in the condition of the loop
//If the user enters the wrong password, we want to add 1 to the attempts variable. 
//If they are correct, we want to stop looping.
//Run `npx jest` to see if you have passed ticket 4.

let attempts = 0;

while (attempts < 3) {
    let userInput = prompt("Please enter the password.");
    
     if (userInput === correctPassword) {
        alert("My favourite colour is #000080!")
        break;
    } else { 
        attempts++
    }
}
 if (attempts === 3){
    alert("You have used all your attempts!")
 }