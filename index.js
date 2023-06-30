let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// let update = (document.getElementById("js-score").innerHTML = ` wins:${score.wins}, losses: ${score.losses}, Ties:${score.ties}`);
// console.log(update);
updateEL();
function updateEL() {
  let update = (document.getElementById("js-score").innerHTML = `wins:${score.wins}, losses: ${score.losses}, Ties:${score.ties}`);
  console.log(update);
}

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

  if (result === "you win") {
    score.wins += 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }
  console.log(result);
  updateEL();

  document.getElementById("js-result").innerHTML = result;
  // document.getElementById("js-moves").innerHTML = ` you ${Rock()} - ${computerMove} computer`;

  // document.getElementById("js-score").innerHTML = ` wins:${score.wins}, losses: ${score.losses}, Ties:${score.ties}`;

  // alert(`You picked rock. Computer picked ${computerMove}. ${result}
  //  wins:${score.wins}, losses: ${score.losses}, Ties:${score.ties} `);
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
    result === "you lose";
  }

  if (result === "you win") {
    score.wins = score.wins + 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  // document.getElementById("js-score").innerHTML = ` wins:${score.wins}, losses: ${score.losses}, Ties:${score.ties}`;
  updateEL();
  document.getElementById("js-result").innerHTML = result;

  // alert(`You picked rock. Computer picked ${computerMove}. ${result}
  //   wins:${score.wins}, losses: ${score.losses}, Ties:${score.ties}`);
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
  if (result === "you win") {
    score.wins = score.wins + 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }
  // document.getElementById("js-score").innerHTML = ` wins:${score.wins}, losses: ${score.losses}, Ties:${score.ties}`;
  updateEL();
  document.getElementById("js-result").innerHTML = result;

  localStorage.setItem("score", JSON.stringify(score));
  // alert(`You picked rock. Computer picked ${computerMove}. ${result}
  //   wins:${score.wins}, losses: ${score.losses}, Ties${score.ties}`);
}
function ResetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  updateEL();
  localStorage.removeItem("score");
}
console.log();

function btn() {
  const btnEl = document.getElementById("btn");
  console.log(btnEl);
  if (btnEl.innerHTML === "subscribe") {
    btnEl.innerHTML = "Subscribed";
  } else if (btnEl.innerHTML === "subscribed") {
    btnEl.innerHTML = "Subscribe";
  } else {
    btnEl.innerHTML = "subscribe";
  }
}

function calTotal() {
  let cost = document.getElementById("inputEL");
  let costTotal = Number(cost.value);
  if (costTotal < 40) {
    costTotal += 10;
  }
  document.getElementById("jsTotalDisplay").innerHTML = `$${costTotal}`;
}
document.getElementById("unfree").innerHTML = "order below $40 = $10 charges";
document.getElementById("free").innerHTML = "order above $40 = freeShipping";

function enter(event) {
  if (event.Key === "Enter") {
    calTotal();
  }
}

const todoList = [
  {
    item: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    item: "wash dishes",
    dueDate: "2022-12-22",
  },
];

renderTodoList();
function renderTodoList() {
  let todoResult = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { item, dueDate } = todoObject;

    const html = `
    <p>
    ${item} ${dueDate} 
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    " >Delete</button>
    </p>`;
    todoResult += html;
  }
  console.log(todoResult);
  document.getElementById("displayList").innerHTML = todoResult;
}

function addList() {
  let listElements = document.getElementById("AddList");
  let inputElement = listElements.value;
  const dataInputElement = document.getElementById("due-date");
  const dueDate = dataInputElement.value;

  todoList.push({ item, dueDate });
  console.log(todoList);
  listElements.value = "  ";
  renderTodoList();
}
