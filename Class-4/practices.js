// Let's Practice
// ==============

// =====================================
// Qs-1: For a given Array with marks of students -> [85, 97, 44, 37, 76, 60] Find  the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// let sumOfMarks = 0;
// for (let n of marks) {
//   console.log(n);
//   sumOfMarks += n;
// }
// console.log(marks.length);
// console.log(sumOfMarks);

// let averageMarks = sumOfMarks / marks.length;
// console.log(`Average marks of the class = ${averageMarks}`);

// ===========================================
// Qs-2: For a given array with prices of 5 items ->  [250, 645, 300, 900, 50] All items gave an offer of 10% OFF on them. change the array to store final price after applying offer.

// For of--------------
// when we need to work with array of index we should not use for-of because we cannot access the index if we use for-of but we can use index indirectly

// let items = [250, 645, 300, 900, 50];
// console.log("Items Price =", items);
// let idx = 0; // make the idx for (for-of) loop.
// for (let val of items) {
//   //   console.log(`Value at index ${idx} = ${val}`);
//   console.log("main price = ", val);
//   let offer = val / 10;
//   items[idx] = items[idx] - offer;
//   //   console.log("10% OFF = ", offer);
//   console.log("Price after OFF = ", items[idx]);
//   idx++;
// }

// for-loop----------
// for (let i = 0; i < items.length; i++) {
//   //   console.log("Main Price =", items[i]);
//   let offer = items[i] / 10;
//   items[i] -= offer;
//   //   console.log("Price After OFF =", items[i]);
// }

// console.log("Items Price After 10% OFF =", items);

// Qs-3: Create an array to store companies -> ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// a. Remove the first company from the array.
// b. Remove Uber & Add Ola in its place.
// c. Add Amazon at the end.

// Answer:
// -------
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log("Main Arr =", companies);
// A: Remove the first company from the array.
// companies.shift();
// console.log(companies); // ['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'] ✅

// B: Remove Uber & Add Ola in its place.
// companies.splice(2, 1, "Ola");
// console.log(companies); //['Bloomberg', 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix'] ✅

// C: Add Amazon at the end.
// companies.push("Amazon");
// console.log(companies); // ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix', 'Amazon'] ✅
