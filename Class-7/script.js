// -DOM Manipulation
// =================
// Attributes
// ----------
// * getAttribute(Attributes) // to get the Attribute value

// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// * setAttribute(Attribute, value) // to set the Attribute value th

// let p = document.querySelector("p");
// console.log(p);

// let setAtt = p.setAttribute("class", "newClass");

// -Style
// ------

// * node.style

// let div = document.querySelector("div");

// div.style.backgroundColor = "gray";
// div.style.color = "white";
// div.style.fontSize = "30px";

// -Insert Elements
// ---------------
// let element = document.createElement("button");
// console.log(element);
// element.innerText = "Click Me!";
// * node.append(el) // adds at the end of node (inside)
// let div = document.querySelector("div");
// div.append(element);

// * node.prepend(el) // adds at the start of node (inside)
// div.prepend(element);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi~Hello! Welcome...";

// document.querySelector("body").prepend(newHeading);

// * node.before(el) // adds before the node (outside)
// div.before(element);

// * node.after(el) // adds  after the node (outside)
// div.after(element);

// -Delete Element

// * node.remove() // removes the node

// let p = document.querySelector("p");
// p.remove();
