// Synchronous
// -----------
// Synchronous means the  code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// console.log("one");
// console.log("two");
// console.log("three");

// -----------------------------------
// Asynchronous
// ------------
// Due to Synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
// asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("Hello!");
// }, 5000); // timeout

// console.log("three");
// console.log("four");

// --------------------------------------
// Callbacks
// ---------
// A callback is a function passed as an argument to another function.

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// // calculator(10, 20, sum);
// calculator(10, 20, (a, b) => {
//   console.log(a + b);
// });

// asynchronous example--------------------
// function hello() {
//     console.log("Hello~");
//   }
//   setTimeout(hello, 3000);

// Callback hell
// -------------
// callback Hell: Nested callbacks stacked below one another forming a pyramid structure. (Pyramid if Doom)

// This style of programming becomes difficult to understand & manage.

// nesting--------
// if else
// let age = 19;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("senior");
//   } else {
//     console.log("Middle");
//   }
// } else {
//   console.log("Child");
// }

// loop
// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     str += j;
//   }
//   console.log(i, str);
// }

// function getData(dataId, getNextData) {
//   // 2s
//   setTimeout(() => {
//     console.log("Data = ", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// nesting--------
// getData(111, () => {
//   console.log("getting data 2....");
//   getData(222, () => {
//     console.log("getting data 3....");
//     getData(333, () => {
//       console.log("getting data 4....");
//       getData(444, () => {
//         console.log("getting data 5....");
//         getData(555);
//       });
//     });
//   });
// });

// getData(111); //2s
// getData(222); //2s
// getData(333); //2s

// data1
// data2
// data3

// -------------------------------------
// Promises
// --------
// Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.

// let promise = new Promise((resolve, reject) => {...}) // function with 2 handlers.

// * resolve & reject are callbacks provided by JS.

// promise State:
// 1.pending,
// 2.fulfilled,
// 3.rejected

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise!");
//   // resolve("Successful");
//   reject("Some Error occurred");
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data = ", dataId);
//       resolve("Success");
//     }, 5000);
//   });
// }

// -----------------------------------
// How to handle Promises?
// -----------------------
// .then() & .catch()

// promise.then((res)=>{...})

// promise.catch((err)=>{...})

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("I am a Promise");
//       resolve("Success");
//       // reject("something Wrong");
//     }, 5000);
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("error", err);
// });

// Promise Chain----------------
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 11111111!");
//       resolve("Success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2222222!");
//       resolve("Success");
//     }, 2000);
//   });
// }

// -----------------------
// console.log("Data Fetching...1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("Data Fetching...2");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

// simple ---------------
// console.log("Data Fetching...1");
// asyncFunc1().then((res) => {
//   console.log(res);
//   console.log("Data Fetching...2");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data = ", dataId);
//       resolve("Success");
//     }, 3000);
//   });
// }

// Promise Chain--
// getData(111).then((res) => {
//   console.log(res);
//   getData(222).then((res) => {
//     console.log(res);
//   });
// });

// Promise Chaining --
// getData(111)
//   .then((res) => {
//     return getData(222);
//   })
//   .then((res) => {
//     return getData(333);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// -Async-await
// ============
// async function always returns a promise.

// async function myFunc() {.....}

// await pauses the execution of its surrounding async function until the promise is settled.

// async function hello() {
//   console.log("Hello!");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data!");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api(); //1st
//   await api(); //2nd
// }

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data = ", dataId);
//       resolve("Success");
//     }, 2000);
//   });
// }

// -Async-await--
// ------------------
// async function getAllData() {
//   console.log("getting data 1.....");
//   await getData(1);
//   console.log("getting data 2.....");
//   await getData(2);
//   console.log("getting data 3.....");
//   await getData(3);
//   console.log("getting data 4.....");
//   await getData(4);
//   console.log("getting data 5.....");
//   getData(5);
// }

// callBack Hell Vs Promise Chain Vs Async-Await

// IIFE: Immediately Invoked Function Expression
// =============================================
// IIFE is a function that is called immediately as soon as it is defined.

// (async function () {
//   console.log("getting data 1.....");
//   await getData(1);
//   console.log("getting data 2.....");
//   await getData(2);
//   console.log("getting data 3.....");
//   await getData(3);
//   console.log("getting data 4.....");
//   await getData(4);
//   console.log("getting data 5.....");
//   getData(5);
// })();

// IIFE ------------
// (function () {
//   console.log(".....");
// })();

// (() => {
//   console.log(".....");
// })();

// (async function () {
//   console.log(".....");
// })();
