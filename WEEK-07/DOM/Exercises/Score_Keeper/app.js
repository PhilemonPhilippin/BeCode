const playerScoreElems = document.querySelectorAll(".player-score");
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let scoreCount = 0;

const scoreElemPlayer1 = playerScoreElems[0];
const scoreElemPlayer2 = playerScoreElems[1];

scoreElemPlayer1.innerText = scorePlayer1;
scoreElemPlayer2.innerText = scorePlayer2;

const playerButtons = document.querySelectorAll(".player-btn");
const btnPlayer1 = playerButtons[0];
const btnPlayer2 = playerButtons[1];

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGame);

btnPlayer1.addEventListener("click", () => incrementScore(1));
btnPlayer2.addEventListener("click", () => incrementScore(2));

function incrementScore(player) {
  if (player === 1) {
    scorePlayer1++;
    scoreElemPlayer1.innerText = scorePlayer1;
  } else if (player === 2) {
    scorePlayer2++;
    scoreElemPlayer2.innerText = scorePlayer2;
  }
  scoreCount++;
  checkIfGameWon();
}

function checkIfGameWon() {
  if (scoreCount === 5) {
    disableButtons();
    if (scorePlayer1 > scorePlayer2) {
      scoreElemPlayer1.classList.add("green");
      scoreElemPlayer2.classList.add("red");
    } else {
      scoreElemPlayer2.classList.add("green");
      scoreElemPlayer1.classList.add("red");
    }
  }
}

function disableButtons() {
  btnPlayer1.setAttribute("disabled", "");
  btnPlayer2.setAttribute("disabled", "");
}

function resetGame() {
  resetScores();
  enableButtons();
  resetColors();
}

function resetScores() {
  scoreCount = 0;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  scoreElemPlayer1.innerText = scorePlayer1;
  scoreElemPlayer2.innerText = scorePlayer2;
}

function enableButtons() {
  btnPlayer1.removeAttribute("disabled");
  btnPlayer2.removeAttribute("disabled");
}

function resetColors() {
  scoreElemPlayer1.classList.remove("red");
  scoreElemPlayer1.classList.remove("green");
  scoreElemPlayer2.classList.remove("red");
  scoreElemPlayer2.classList.remove("green");
}
