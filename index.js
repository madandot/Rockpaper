function Rock() {
  let computerNumber = " ";

  const randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerNumber = "it is Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerNumber = "it is Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerNumber = "it is scissors";
  }
  console.log(computerNumber);
}
