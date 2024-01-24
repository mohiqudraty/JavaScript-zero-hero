// Loops in JavaScript
// ===================
// Loops are used to execute a piece of again & again.

// for Loop
// --------

/* 3 statements in for loops  *
/* 
    1. let i = 1; // initialize
    2. i <= 5; // stopping condition
    3. i++; // updating 
*/

// for (let i = 1; i <= 5; i++) {
//   console.log(i); // output (1-5)
//   console.log("M"); // output (print M five times)
// }

// print 1 - 10
// for (let count = 1; count <= 10; count++) {
//   console.log(count);
// }
// console.log("Loop has Ended!");

// calculate sum of 1 - 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log("sum of 1 - 5 = ", sum);

// while Loop
// ----------
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   console.log("M");
//   i++; // don't forget to use this
// }

// do-while Loop
// ----------
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10); // do not ignore semicolon

// 2 special loops
// ===============

// -for-of Loop
// ------------   //Not use for Object

// let str = "Mohiuddin";
// let size = 0;
// for (const val of str) {
//   //iterator -> characters
//   console.log(val, str);
//   size++;
// }
// console.log("Name Character Length is - ", size);

// -for-in Loop
// ------------

// let student = {
//   name: "Qudraty",
//   age: 23,
//   id: 2,
//   isPass: true,
// };

// for (const key in student) {
//   console.log("key: ", key, " = ", "value: ", student[key]);
// }

// Warning: Not use this
// Infinite Loop: A Loop that never ends
// -------------------------------------
