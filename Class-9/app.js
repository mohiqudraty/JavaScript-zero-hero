let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let winnerContainer = document.querySelector(".winner-container");
let winner = document.querySelector("#winner");
let newBtn = document.querySelector("#new-btn");

let count = 0;

let turnO = true; // playerO  & PlayerX
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  winnerContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "red";
      turnO = false;
      count++;
    } else {
      box.innerText = "X";
      box.style.color = "blue";
      turnO = true;
      count++;
    }
    console.log(count);
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (w) => {
  winner.innerText = `Congratulations🎉 \n Winner is 🏆"${w}"`;
  disabledBoxes();
  winnerContainer.classList.remove("hide");
};

const checkDraw = () => {
  winner.innerText = "Draw!⚖";
  winnerContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      } else if (count === 9) {
        checkDraw();
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
