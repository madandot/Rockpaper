function Rock() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  let result = " ";
  if (computerMove === "Rock") {
    result = "Tie";
  } else if (computerMove === "Paper") {
    result = "you lose";
  } else if (computerMove === "Scissors") {
    result === "you win";
  }
  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
}
function Paper() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  let result = " ";
  if (computerMove === "Rock") {
    result = "you win";
  } else if (computerMove === "Paper") {
    result = "Tie";
  } else if (computerMove === "Scissors") {
    result === "you win";
  }
  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
}
function Scissors() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  let result = " ";
  if (computerMove === "Rock") {
    result = "you lose";
  } else if (computerMove === "Paper") {
    result = "you win";
  } else if (computerMove === "Scissors") {
    result === "Tie";
  }
  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
}

const product = {
  name: "madan",
  price: 1999,
};
console.log(product);
console.log(product.name);
