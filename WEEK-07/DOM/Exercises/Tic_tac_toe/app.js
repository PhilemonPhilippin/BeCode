const board = document.querySelector(".board");
let turn = 1;

for (let i = 0; i < 9; i++) {
  const elem = document.createElement("div");
  elem.classList.add("cell");
  elem.setAttribute("id", i);
  elem.addEventListener("click", (e) => {
    // Si la cellule n'est pas vide : alert("Someone clicked this cell already.");
    // Si la cellule est vide : mettre un X ou un O en fonction du tour.
  });
  board.appendChild(elem);
}

const cells = document.querySelectorAll(".cell");
const player1 = "X";
const player2 = "O";
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playedCells = ["", "", "", "", "", "", "", "", ""];

// function gameStart() {
//   board.addEventListener("click", (e) => {
//     if (turn === 9) {
//       gameOver();
//     }
//     if (e.target.classList.contains("cell")) {
//       if (e.target.innerText === "") {
//         e.target.innerText = turn % 2 === 0 ? player2 : player1;
//         console.log(e.target);
//         turn++;
//       } else {
//         alert("Someone clicked this cell already");
//       }
//     }
//   });
// }

function gameStart() {
    
}

function gameOver() {
  console.log("Game over");
}

gameStart();
