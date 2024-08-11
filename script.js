let result;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const buttonBox = document.querySelector(".selections");
const buttons = document.querySelectorAll('button');
const roundsBox = document.querySelector(".rounds");
const selection = ["ROCK", "PAPER", "SCISSORS"];
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#compScore");

buttons.forEach((button) => {

   button.addEventListener('click', () => {
    playerSelection =button.value;
    console.log(playerSelection);
    playRound(computerSelection());
    console.log(pScore,cScore);
    game();
  });
});


const computerSelection = function () {
  temp=selection[Math.floor(Math.random() * 3)];
  console.log(temp);
  return temp;
};

  let playerPic = new Image(45, 45);
  let compPic = new Image(45, 45);
  playerPic.src = `./images/${playerSelection}.png`;
  compPic.src = `./images/${computerSelection}.png`;
function playRound(computerSelection) {
  const h1 = document.createElement("h1");
  const oneRound = document.createElement("div");
  oneRound.classList.add("oneRound");
  if (playerSelection == computerSelection) {
    h1.textContent = "DRAW";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    h1.textContent = "WIN";
    playerScore += 1;
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    h1.textContent = "WIN";
    playerScore += 1;
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    h1.textContent = "WIN";
    playerScore += 1;
  } else {
    h1.textContent = "LOSE";
    computerScore += 1;
  }
   oneRound.appendChild(playerPic);
  oneRound.appendChild(h1);
  oneRound.appendChild(compPic);
  roundsBox.prepend(oneRound);
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

function game() {
  const finalResult = document.createElement("div");
  finalResult.classList.add("rounds");
  if (playerScore != 5 && computerScore != 5) {
    return
  } else if (playerScore == 5) {
    finalResult.textContent = "YOU WON! :D";
    

  } else if (computerScore == 5) {
    finalResult.textContent = "YOU LOST! :(";
    
  }
  roundsBox.prepend(finalResult);
  buttonBox.replaceWith(finalResult);
}