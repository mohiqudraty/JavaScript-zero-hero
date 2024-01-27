// -Function in JavaScript
// =======================
// Block of code that performs a specific task, can be invoked whenever needed.

// Function Definition
// -------------------
// function functionName(params) {
//     // do some work
// }

// Function Call
// -------------
// functionName()

// // function define ---------------
// function myFunction() {
//   console.log("Welcome to Mohi World!");
//   console.log("We Learning JavaScript");
// }

// // function call / invoked
// myFunction();

// // function define -------with parameter
// function myFunction(message) {
//   // parameter --> input
//   console.log(message);
// }

// // function call / invoked ----- with argument
// myFunction("How are You?"); // argument

// function with return --------
// ----------------------
// function multiply(a, b) {
//   // parameter --> local variables -> scope
//   let multiply = a * b;
//   return multiply;
//   //   we cannot do anything after return ⚠📛
// }
// let result = multiply(10, 7);
// console.log(result);

// -Arrow Function in JavaScript
// ============================= Modern JavaScript
// Compact way of writing a function.

// const myArrowFunc = (x, y) => {
//   // do some work
//   console.log(x / y);
// };
// myArrowFunc(20, 3);

// with return ---------------
// const arrowMulti = (a, b) => {
//   return a * b;
// };
// const result = arrowMulti(3, 4);
// console.log(result);

// Print Hello World!
// const printHelloWorld = () => console.log("Hello World!");
// printHelloWorld();

// -foEach Loop in Arrays-----------------
// ====================== || Return ❌

// arr.forEach(callBackFunction)

// callBackFunction: Here, it is a function to execute for each element in the array .

// *A callback is a function passed as an argument to another function.

// arr.forEach((val) => {
//     console.log(val)
// })

// let arr = [1, 2, 3, 4, 5];

// if we want to do anything for each Element of an array we use forEach function/method
// arr.forEach(function (val) {
//   // value at each idx
//   console.log(val);
// });

// * forEach have 3 parameters (value, idx, array) // optional

// -Some More Array Methods
// ======================== || Return a New Array ✅

// ----Map----------------------
// -------
// Crates a new array with the results of some operation. The value its callback returns are used to from new array.

// arr.map(callBackFunction(value, idx, array)){}

// let num = [10, 20, 30, 40, 50];

// let newNum = num.map((value) => {
//   return value ** 2; // square value
// });
// console.log(newNum);

// ----Filter--------------------
// ----------
// Crates a new array of elements that give true for a condition/Filter.
// Eg: all even elements;

// let newArray = arr.filter( (value) => {
//     return value % 2 === 0;
// })

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenArr = num.filter((value) => {
//   return value % 2 === 0;
// });
// console.log(evenArr);
// let oddArr = num.filter((value) => {
//   return value % 2 !== 0;
// });
// console.log(oddArr);

// let conditionArr = num.filter((value) => {
//   return value > 3 && value < 8;
// });
// console.log(conditionArr);

// ----Reduce
// ----------
// Performs some operations & Reduces the array to a single value. It returns that single value.

// reduce start from first 2 value
// let arr = [1, 2, 3, 4, 5];

// const output = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(output); // 15

// // find the largest number ----
// let arr = [1, 2, 7, 4, 5];
// const largestNumber = arr.reduce((prev, current) => {
//   return prev > current ? prev : current;
// });
// console.log(largestNumber);

// find the smallest number ----
// let arr = [1, 2, 7, 4, 5];
// const smallestNumber = arr.reduce((prev, current) => {
//   return prev < current ? prev : current;
// });
// console.log(smallestNumber);
