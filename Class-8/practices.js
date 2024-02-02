// Let's Practices
// ===============

// Qs-1: Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again

let body = document.querySelector("body");

let btn = document.querySelector("#modeBtn");

let currentMode = "light";
console.log(currentMode);

btn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
    // body.style.backgroundColor = "gray";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    currentMode = "light";
    // body.style.backgroundColor = "skyblue";
  }
});
