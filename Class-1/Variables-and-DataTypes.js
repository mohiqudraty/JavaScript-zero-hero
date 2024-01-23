// Our 1st JS Code
// console.log is used to log (print) a message to the console

// console.log("Mohiuddin Qudraty")

//======== Variables in JS ========
// Variables are containers for data

// memory location
// a = 10
// b = 50
// age = 23
// name = "mohi"

// data typed ----- String, Number,Boolean---
// fullName = "Mohiuddin"; //string
// age = 23;              //number
// price = 40.45;
// x = null;
// y = undefined;
// isHave = true;
// isHave = false;         // Boolean

// fullName = 50; // do not not to changes the different type of value

// console.log(fullName, age, price, x, y, isHave);

//=========== Variable Rules ==========
/*
1. Variable names are case sensitive; "a" & "A" is different.
2. only letters, digits, underscore(_) and $ is allowed. (not even space)
3. only a letter, underscore(_) or $ should be 1st character.
4. Reserved words cannot be variable names.
**/

// Rule-1 =============================
// here is case sensitive two variables-----
// fullName = "mohiuddin"
// fullname = "mahmud"
//  console.log(fullName);
//  console.log(fullname);

// Rule -2 ===========================
// fullName24$_ = "Mohiuddin"   //its Allowed
// console.log(fullName24$_);
// full name = "Mohiuddin" //space not allowed

// Rule -3 ==========================
// fullName = "Mohiuddin" // its Allowed
// _fullName = "Mohiuddin" // its Allowed
// $fullName = "Mohiuddin" // its Allowed
// $fullName = "Mohiuddin" //first character number not allowed

// Rule -4 ==========================

// console = "log" //Uncaught TypeError: console.log is not a function
// console.log(console);

// ============JavaScript Reserved Words======

// Recourse from: https://www.tutorialrepublic.com/javascript-reference/javascript-reserved-keywords.php

//==Reserved Keywords in ECMAScript 6 (ES6)==
// arguments sm // await // break
// case // catch // class // const
// continue // debugger // default
// delete // do // else // enum fr
// eval sm// export // extends // false
// finally // for // function // if
// implements sm // import // in // instanceof
// interface sm // let sm // new // null
// package sm // private sm // protected sm
// public sm
// return // static sm // super // switch
// this // throw // true // try
// typeof // var // void  // while
// with // yield

// ==Reserved Keywords in ECMAScript 5 (ES5)==
// arguments sm // break // case // catch
// class fr // const fr // continue
// debugger // default // delete // do
// else // enum fr // eval sm // export fr
// extends fr // false // finally
// for // function // if // implements sm
// import fr // in // instanceof
// interface sm // let sm
// new // null // package sm // private sm
// protected sm // public sm // return
// static sm // super fr // switch
// this // throw // true // try // typeof
// var // void // while // with // yield sm

//=Future Reserved Keywords in Older Standards
// abstract // boolean // byte // char
// double // final // float // goto
// int // long // native // short
// synchronized // throws // transient
// volatile




// We Can Write the Variable ------------

// fullName // Camel Case (Recommended)✔
// fullname 
// full_name //snake Case
// full-name // kebab case
// FullName  // pascal case