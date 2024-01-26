// Let's Practices
// ---------------

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
