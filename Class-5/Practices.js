// Let's Practices
// ---------------
// -Function
// ---------
// Qs-1: Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string .

// Answer-1: Print the vowels character

// with for loop-----------------
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       console.log(str[i]);
//       count++;
//     }
//   }
//   return count;
// }
// const result = countVowels("aeiou");
// console.log("Number of Vowels =", result);

// with for of loop-----that easy and clean----
// function printVowels(name) {
//   let vowels = [];
//   for (let char of name) {
//     let charTl = char.toLowerCase();
//     if (
//       charTl === "a" ||
//       charTl === "e" ||
//       charTl === "i" ||
//       charTl === "o" ||
//       charTl === "u"
//     ) {
//       //   console.log(charTl);
//       vowels.push(charTl);
//     }
//   }
//   return vowels;
// }
// const allVowelsOFMyName = printVowels("Mohiuddin Qudraty");
// console.log(allVowelsOFMyName);

//Qs-2: Create an arrow function to perform the same task

// with for loop---------------
// const getVowels = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       console.log(str[i]);
//       count++;
//     }
//   }
//   return count;
// };

// const result = getVowels("Qudraty");
// console.log(result);

// with for of loop ------ that easy and clean----
// const countVowels = (str) => {
//   let count = 0;
//   let vowels = [];
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       vowels.push(char);
//       count++;
//     }
//   }
//   return { count, vowels };
// };
// const result = countVowels("Hello World! How Are You");
// console.log(result);

// -forEach function/method
// ------------------------
//Qs-3: For a given numbers. print the square of each value using the forEach loop.

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((value) => {
//   console.log(value * value);
// });

// different way
// let squareNumber = (value) => {
//   console.log(value * value);
// };

// arr.forEach(squareNumber); // callBack function---

// Filter Method -----------
// Qs-4: We are given Array of marks of students. Filter out of the marks of students that scored 90+.

// const marks = [34, 65, 97, 89, 90, 98, 45, 95];

// const topMarks = marks.filter((val) => {
//   return val > 90;
// });
// console.log(topMarks); // output- [97, 98, 95]

// Qs-5: Take a Number n as input from user . Create an array of numbers from 1 to n .

// Use the reduce method to calculate sum of all numbers in the array .

// ArrayUse the reduce method tho calculate product of all numbers n te array.

// let userN = prompt("Enter a Number");

// let arr = [];
// for (let i = 1; i <= userN; i++) {
//   arr[i - 1] = i; // 1(0), 2(1), 3(2), 4(3), 5(4)
// }

// console.log(arr);

// sum of an array --------------------------
// const newArray = arr.reduce((prev, current) => {
//   return prev + current;
// });
// console.log("Sum Of User Array = ", newArray);

// factorial-----------------------------
// factorial of an array -------------multiply the all numbers of an array.
// const factorial = arr.reduce((prev, current) => {
//   return prev * current;
// });
// console.log("factorial Of User Array = ", factorial);
