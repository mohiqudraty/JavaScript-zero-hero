// Let's Practice
// ==============

// Qs-1: Create a new button Element. Give it a text "Click Me", background color of red & text color of white.
// insert the button as the first element inside the body tag.

// get access of body ---------
let body = document.querySelector("body");

// create the button and set text -----
let btn = document.createElement("button");
btn.innerText = "CLick Me";

// add the crated Element inside the body ------
body.prepend(btn);

// styling
// btn.style.backgroundColor = "blue";
// btn.style.color = "white";
// btn.style.padding = "10px 20px";

// Qs-2: Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.

// Did You notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList----->>>

// let para = document.querySelector("p");

// para.classList.add("newClass");
// para.classList.remove("newClass");

// this is way remove the previous classes --Do Not Use This Way if We Want to add multiple classes---->>>>>
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));
