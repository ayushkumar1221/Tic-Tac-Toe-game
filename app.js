let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let nweGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

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
  let turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false; // iska matlab huaa turnO ka chance finish ab X ka chance hai.
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true; // disable ka matlab ek button ek bar me ek hi kam karega. (dubara work nhi karega)

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congrulations, winner is ${winner}`;

  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner");

        showWinner(pos1Val);
      }
    }
  }
};

nweGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
