// Let'Practice
// ------------

// Qs-1: Get user to input a number using prompt("Enter a number"). check if the number is a multiple of 5 or not.

// Answer:
// let number = prompt("Enter Your Number");

// if (number % 5 === 0) {
//   console.log(number, "is a multiple of 5");
// } else {
//   console.log(number, "is Not multiple of 5");
// }

// Qs-2: Write a code which can give grades to students according to their scores.

// Answer:
const mark = 90;
let grade;

if (mark >= 90 && mark <= 100) {
  grade = "A";
} else if (mark >= 80 && mark < 89) {
  grade = "B";
} else if (mark >= 70 && mark < 79) {
  grade = "C";
} else if (mark >= 60 && mark < 69) {
  grade = "D";
} else if (mark >= 0 && mark < 59) {
  grade = "F";
} else {
  grade = "Result Not Found!";
}
console.log("your Grade is:", grade);
