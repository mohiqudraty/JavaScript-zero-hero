// -String in JavaScript
// ===================== String is Immutable
// String is a sequence of characters used to represent text.

// Create String:
// --------------
// let str = "Mohiuddin";
// let str2 = "Qudraty";
// console.log(str, str2);

// String Length:
// -------------
// str.length
// console.log(str.length);

// String Indices:
// --------------
// str.[0], str[1], str[2]
// console.log(str[0], str[8]);

// -Template Literals in JavaScript
// ================================
// A way to have embedded expressions in strings.

// `This is Template Literals` (``)

// let obj = {
//   item: "book",
//   price: 60,
// };
// let output = `the cost of ${obj.item} is ${obj.price + 40}`;
// console.log(output); // output - (the cost of book is 60)

// let spacialString = `This is a template literal`;
// console.log(spacialString);

// console.log("mohiuddin\nqudraty"); // this is single string
// console.log("mohiuddin\tqudraty");

// -String Methods in JavaScript
// =============================
// These are built-in function to manipulate a string.

// Methods Not change the Original String.
// Methods return a new Value.

// * str.toUpperCase()
// * str.toLowerCase()
// * str.trim() // remove white spaces from start or ending

// let name = "Mohiuddin Qudraty";

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let name2 = "     Mohiuddin Qudraty     ";
// // console.log(name2);
// // console.log(name2.trim());

// console.log(name.slice(0, 4));
// console.log(name.concat(name2));
// console.log(name.replace("Q", "K"));
// console.log(name.replaceAll("u", "o"));
// console.log(name.charAt(10));
