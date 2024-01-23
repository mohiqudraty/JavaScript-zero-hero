
// when we declare a variable we use 3 keywords for declaring variable : let, const , and var 



//====== 1- var: ====== ❌ we use var before 2015, but now we should not use "var"
// Variable can be re-declared & updated. A global scope variable 

//====== 2- let: ====== ✅
// Variable cannot be re-declared but can be updated. A block scope variable 

//====== 3- const: ====== ✅
// Variable cannot be re-declared or updated. A block scope variable 


// ============ var - 1 ============
// var age = 10;
// var age = 20;
// var age = 30;
// console.log(age); // output last one - 30



// ============ let - 2 ============

// we can not re declare
// let age = 10;
// let age = 10;  ❌
//  console.log(age); //Uncaught SyntaxError: Identifier 'age' has already been declared

// but we can re assign the let thats mean we can update the value of let variable
// let age = 10;
// age = 50; ✅
// console.log(age); // output - 50



// ============ const - 3 ============

// we cannot re-declared or updated the const variable 

// const age = 20; only one time use ✅
// const age = 30;❌
// age = 40; ❌
// console.log(age); // output let-const-var.js:42 Uncaught TypeError: Assignment to constant variable.




// we should know ===============

// if we declare a variable without assign ! javaScript show the value undefined

// let a;
// console.log(a);


// but if we use const variable without assigning value!  
// we will get the error 
// Uncaught SyntaxError: Missing initializer in const declaration
// const a ;
// console.log(a); // output Uncaught SyntaxError: Missing initializer in const declaration



// block scope 
// {} this is block 

// {
//     // let a= 10;
//     // let a = 20;❌ we can not re declare a let variable in one same scope/same block
// }
//  let a = 10;✅ but we can re-declare in different scop.