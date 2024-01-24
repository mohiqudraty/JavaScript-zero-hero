// Loops Practices ---
// Let's Practice
// ==============

// Qs-1: Print all even numbers from 0 to 100.

// Answer:
// even number or odd number print
//   for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
//       console.log("All Even Number", num);
//     }
//     //   else {
//     //     console.log("All Odd Number", num);
//     //   }
//   }

//   // odd number print
//   for (let num = 0; num <= 100; num++) {
//     if (num % 2 !== 0) {
//       console.log("All Odd Number", num);
//     }
//   }

// Qs-2:
// Create a game where you start with any random game number. Ask user to keep guessing the game number until the user enters correct value.

// Answer:
// let gameNumber = 33;

// let userNumber = prompt("Guess the game Number Around 1-50");
// console.log(typeof userNumber);

// while (gameNumber != userNumber) {
//   userNumber = prompt("oops! Sorry Please Guess The Correct Game Number❌");
// }

// alert("Congratulations! Your Guessing Game Number is Correct✔");

// String Practices ---
// Let's Practice
// ==============

// Qs-1: Prompt the user to enter their full name. Generate a username for them base on the PictureInPictureEvent. Start username with @AbortController, followed by their full name ending with the fullName length.

// eg: username = 'mohiuddin', user name should be `@mohiuddin9`

// let fullName = prompt("Enter Your Name");

// let userName = `@${fullName}${fullName.length}`;
// console.log(userName);
