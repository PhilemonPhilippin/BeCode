const board = document.querySelector(".board");

for (let i = 1; i <= 9; i++) {
  const elem = document.createElement("div");
  elem.classList.add("cell");
  board.appendChild(elem);
}

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
