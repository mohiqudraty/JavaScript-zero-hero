let userScore = 0;
let computerScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userPoint = document.querySelector("#user-score");
const compPoint = document.querySelector("#computer-score");
const drawPoint = document.querySelector("#draw");
const resetBtn = document.querySelector("#reset-game");

resetBtn.addEventListener("click", () => {
  userScore = 0;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "rgb(7, 2, 24)";
  userPoint.innerText = userScore;
  computerScore = 0;
  compPoint.innerText = computerScore;
  drawScore = 0;
  drawPoint.innerText = drawScore;
});

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    console.log(`You Win🎉 ${userChoice} Beats ${computerChoice}`);
    msg.innerText = `You Win🎉 Your ${userChoice} Beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userPoint.innerText = userScore;
  } else {
    console.log(`You Lost💣 ${computerChoice} Beats Your ${userChoice}`);
    msg.innerText = "You Lose💣";
    msg.style.backgroundColor = "red";
    computerScore++;
    compPoint.innerText = computerScore;
  }
};

const drawGame = () => {
  console.log("Draw Game");
  msg.innerText = "Draw Game👓 Play Again!";
  msg.style.backgroundColor = "rgb(7, 2, 24)";
  drawScore++;
  drawPoint.innerText = drawScore;
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rendIdx = Math.floor(Math.random() * 3);
  return options[rendIdx];
};

const playGame = (userChoice) => {
  //Generate computer choice -> modular
  const computerChoice = genCompChoice();
  console.log("userChoice", userChoice);
  console.log("com choice", computerChoice);

  if (userChoice === computerChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors , paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      // rock , paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
