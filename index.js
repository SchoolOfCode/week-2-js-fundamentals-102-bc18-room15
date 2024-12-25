console.log("Hello from JS file");

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
  alert("My favourite colour is #000080!");
}

//Ticket 4 - Letting the user try again!

//Create a loop that allows the user to try again if the password is incorrect
//They have 3 attempts in total,
// We can have the code loop around the part where we ask for the password using a loop.
//Declare a variable called attempts with the value of 0✅
//Use the variable attempts in the condition of the loop
//If the user enters the wrong password, we want to add 1 to the attempts variable.
//If they are correct, we want to stop looping.
//Run `npx jest` to see if you have passed ticket 4.

// let attempts = 0;

// while (attempts < 3) {
//   let userInput = prompt("Please enter the password.");

//   if (userInput === correctPassword) {
//     alert("My favourite colour is #000080!");
//     break;
//   } else {
//     attempts++;
//   }
// }
// if (attempts === 3) {
//   alert("You have used all your attempts!");
// }

//  Ticket 5 - Functions
// Declare a function that will prompt the user for input(a password)
// Store that password in a variable within the function
//   - Check whether the password matches the correct password (same as above):
//     - If it does, return true from the function.
//     - If it doesn't, let them try again.
//     - If they fail three times in a row, do not allow them any more tries,
//     -  and return false from the function.
// - `console.log` the secret information (same as above) _only_ if the function returned true.

// function userPassword() {
//   let numberOfAttempts = 0;
//   const correctPassword = "myPassword1!";

//   while (numberOfAttempts < 2) {
//     let userInputPassword = prompt("Please enter the password.");

//     if (userInputPassword === correctPassword) {
//       alert("My favourite colour is #000080!");
//       return true;
//     } else numberOfAttempts++;
//   }

//   return false;
// }
// if (userPassword()) {
//   console.log("My favourite colour is #000080!");
// } else {
//   console.log("You have used up all attempts.");
// }
//  Refactor the code you have written into a function called `authenticateUser`.
//Have that function return `true` if the user logged in successfully with the correct password
//and `false` if they got the password wrong more than three times.
//You can put most of the code you have already written in the previous steps into the function,
// but don't reveal the secret yet. The function should be used like this:

function authenticateUser() {
  let numberOfAttempts = 0;
  const correctPassword = "myPassword1!";

  while (numberOfAttempts < 2) {
    let userInputPassword = prompt("Please enter the password.");

    if (userInputPassword === correctPassword) {
      return true;
    } else {
      numberOfAttempts++;
    }
  }
  return false;
}
let isLoggedIn = authenticateUser();
if (isLoggedIn === true) {
  alert("My favourite colour is #000080!");
}

// - run `npx jest` to see if you have passed ticket 5.
