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

function getData(dataId, getNextData) {
  // 2s
  setTimeout(() => {
    console.log("Data = ", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(111, () => {
  console.log("getting data 2....");
  getData(222, () => {
    console.log("getting data 3....");
    getData(333, () => {
      console.log("getting data 4....");
      getData(444, () => {
        console.log("getting data 5....");
        getData(555);
      });
    });
  });
});

// getData(111); //2s
// getData(222); //2s
// getData(333); //2s

// data1
// data2
// data3
