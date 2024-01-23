// Data Types in JavaScript========

// Number, String, Boolean undefined, null, BigInt, Symbol



/* -Primitive Data Vs Non-Primitive Data-  */

/* ----------Primitive Data (7️⃣)------------ */

//1️⃣Number ---------------
// let age = 23;
// console.log(typeof age); // output - (number)

//2️⃣String --------------
// let fullName = "Mohiuddin Qudraty"
// console.log(typeof fullName); // output - ('string')

//3️⃣Boolean ---------------
// let isSubscribe = true;
// let notFollow = false;
// console.log(typeof isSubscribe, typeof notFollow); // output - (boolean) (boolean)


//4️⃣undefined --------------
// if  any variable have no value this type will be undefined
// let a;
// console.log(typeof a); //output - undefined

//5️⃣null --------------------
// let a = null;
// console.log(typeof a); // output - object

// BigInt or Symbol generally we not use===

//6️⃣BigInt ---------------
// let x = BigInt("500")
// console.log(x); // output - 500n
// console.log(typeof x); // output - (bigint)

//7️⃣Symbol ---------------
// let y = Symbol("Hello  World!")
// console.log(y); // output - Symbol(Hello  World!)
// console.log(typeof y); // output - (symbol)


/* -----------Non-Primitive Data--------*/

// Object  --- [Array], Functions

// Object is a collection of values 

// we can say object is a collection of different types of values
// store the data in object like {key: value} (pairs)

const student = {
    fullName: "mohiuddin Qudraty",
    age: 23,
    id: 3,
    isPresent: true
};
console.log(student);  // output - 
// // {fullName: 'mohiuddin Qudraty', age: 23, id: 3, isPresent: true}

// we have tow way to access the key of object 
// 1 - dot notation 
// console.log(student.fullName); //output - mohiuddin Qudraty

// // 1 - bracket notation 
// console.log(student["age"]); //output - 23


// console.log(student[age]); //output - age is not defined
// when we want to access the key with bracket notation ? make sure the key name is in double quotes


// how can update the value of Object? 
// student["age"] = student["age"] + 5;
// console.log(student.age);




/* ------------summary---------  */
// let can update? ✅ Yes
// const can update?❌ No

// but we can update object keys value of an object ✅ Yes