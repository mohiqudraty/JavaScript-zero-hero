// Let's Practices
// ===============

// Qs-1: Create a H2 Heading element with text - "Hello JavaScript". Append them "from Apna Collage Students" to this text using JS.
let h2 = document.querySelector("h2");

// console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna Collage Students"; // concatenate

// Qs-2: Create 3 div with common class name - "box". Access Them & add some unique text to each of them.

let boxes = document.querySelectorAll(".box");
let idx = 1;
for (elm of boxes) {
  elm.innerHTML = `<h3>New Value ${idx}</h3>`;
  idx++;
}

// boxes[0].innerHTML = "<h2>HTML</h2>";
// boxes[1].innerHTML = "<h2>CSS</h2>";
// boxes[2].innerHTML = "<h3>JavaScript</h3>";
