// -Arrays in JavaScript
// ===================== spacial object (index: value)
// Collection of items-

// -Create Array
// -------------

// let students = ["mahmud", "mohi", "shuvo", "nizam"];

// let marks = ["55", "44", "40", "33"];

// let info = ["mahmud", 55, "HSC"]; ❌ Not recommended

// console.log(marks);
// console.log(students.length); // length is a (Property)

// -Array Indices
// --------------
// console.log(students[3]);
// console.log(students[20]); // output -- undefined

// -Looping over an Array
// ======================
// Print all elements of an array.

// Loops -> Iterable (strings, objects, arrays)

// let marks = [12, 34, 5, 77, 88, 44, 54, 76];
//  for loop
// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

// let divisions = [
//   "Barisal",
//   "Chittagong",
//   "Dhaka",
//   "Khulna",
//   "Mymensingh",
//   "Rajshahi",
//   "Rangpur",
//   "Sylhet",
// ];
// // for of
// for (let name of divisions) {
//   console.log(name.toUpperCase());
// }

// -Arrays Methods
// ---------------

// Push()  : add to End;
// Pop()   : delete from end and return;
// toString: converts array to string;

// let foodItems = ["mango", "apple", "banana", "orange"];
// console.log(foodItems);

// Push()  : add to End;
// foodItems.push("carrot", "potato"); // add to end
// console.log(foodItems); // change original array.

// Pop()   : delete from end and return;
// let deletedValue = foodItems.pop(); // delete from end and return;
// console.log(deletedValue); // change original array.

// toString: converts array to string;
// let marks = [12, 35, 55, 77, 34];
// console.log(marks);
// console.log(marks.toString());
// console.log(foodItems.toString()); // return new value as a string not change the original array.

// Concate() : joins multiple arrays & returns result;
// let concatValue = foodItems.concat(marks);
// console.log(concatValue); //joins multiple arrays & returns result; not change the original array.

// unshift() : add to start;
// marks.unshift(111, 222, 333);
// console.log(marks); //add to start; change the original array.

// shift()   : delete from start and return;
// let shiftValue = marks.shift();
// console.log(shiftValue);
// console.log(marks);

// slice()   : return a piece of the array ;
//             slice(startIdx, endIdx)
// console.log(foodItems.slice(2, 4)); // give a part of array.

// splice()  : change original array (add, remove, replace)
//             splice(startIdx, delCount, newElement...)

// marks.splice(2, 2, 200, 400, 500);
// console.log(marks);

// add Element
// marks.splice(2, 0, 35, 36, 37);
// console.log(marks);

// Delete Element
// marks.splice(3, 1);
// console.log(marks);

// Replace Element
// marks.splice(4, 1, 74);
// console.log(marks);

// console.log(marks.splice(2)); // if we not defined which/how much element want to delete ? then delete all the element from start index.!!!
