const board = document.querySelector("#gameboard");
const message = document.querySelector("#info");
const startcells = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

let go = "circle";
message.textContent = "circle goes first";

function createBoard() {
  startcells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", gameOn);
    board.append(cellElement);
  });
}

createBoard();

function gameOn(e) {
  const display = document.createElement("div");
  display.classList.add(go);
  e.target.append(display);
  go = go === "circle" ? "cross" : "circle";
  message.textContent = "It is now " + go + "'s go";
  e.target.removeEventListener("click", gameOn);
  checkScore();
}

function checkScore() {
  const allsqaures = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],

    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],

    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  console.log(allsqaures[4]);

  winningCombos.forEach(Array => {
    const circleWins = Array.every(cell =>
      allsqaures[cell].firstChild?.classList.contains("circle")
    );

    if (circleWins) {
      message.textContent = "Circle Wins!";
      allsqaures.forEach(square =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  winningCombos.forEach(Array => {
    const crossWins = Array.every(cell =>
      allsqaures[cell].firstChild?.classList.contains("cross")
    );

    if (crossWins) {
      message.textContent = "Cross Wins!";
      allsqaures.forEach(square =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
}
