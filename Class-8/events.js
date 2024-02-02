// -Events in JavaScript
// =====================
// The change in the state of an object is known as an Event
// Events are fired to notify code of "interesting changes" that may affect code execution.

// Events:
// * Mouse Events (click, double click etc.)
// * Keyboard Events (keyPress, keyUp, keyDown)
// * Form Events (submit etc.)
// * Print Events & Many More...

// // onclick event
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("btn 1 was clicked!");
//   let a = 10;
//   a++;
//   console.log(a); // 11
// };

// // onmouseover event
// let div = document.querySelector("div");

// div.onmouseover = () => {
//   console.log("Mouse inside the div!");
// };

// -Event Object in JS
// ===================
// It is a special object that has details about the event.

// All event handlers gave access to the Event Object's properties and methods.

// onclick event
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//   console.log(e); // event
//   console.log(e.type); // type
//   console.log(e.target); // target
//   console.log(e.clientX); // target
//   console.log(e.clientY); // target
// };

// onmouseover event
// let div = document.querySelector("div");

// div.onmouseover = (e) => {
//   console.log(e); // event
//   console.log(e.type); // type
//   console.log(e.target); // target
//   console.log(e.clientX, e.clientY); // clientX , clientY
// };

// -Event Listener in JS
// =====================

// node.addEventListener(event, callback)

// node.removeEventListener(event, callback)

// *Note: the callback reference should be same to remove.

// node.addEventListener(event, callback)
// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//   console.log("Button Clicked!");
// });
// btn1.addEventListener("click", (e) => {
//   console.log("Button Clicked222!");
//   //   console.log(e);
// });

// const handler3 = () => {
//   console.log("handle 333");
// };

// btn1.addEventListener("click", handler3);

// node.removeEventListener(event, callback)
// *Note: the callback reference should be same to remove.

// btn1.removeEventListener("click", handler3);

// 1. Inline handling
// 2. JS node.event = () => {handler}
// 3. Event Listener
