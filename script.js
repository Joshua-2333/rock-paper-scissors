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
  const oneRound = document.createElement("div");
  oneRound.classList.add("oneRound");
  
  // Create player's image
  const playerImage = document.createElement("img");
  playerImage.src = `./images/${playerSelection.toLowerCase()}.png`;
  playerImage.alt = `Player chose ${playerSelection}`;
  playerImage.style.width = "50px";
  playerImage.style.height = "50px";
  
  // Create computer's image
  const computerImage = document.createElement("img");
  computerImage.src = `./images/${computerSelection.toLowerCase()}.png`;
  computerImage.alt = `Computer chose ${computerSelection}`;
  computerImage.style.width = "50px";
  computerImage.style.height = "50px";
  
  // Create result text
  const resultText = document.createElement("p");
  
  if (playerSelection == computerSelection) {
    resultText.textContent = "DRAW";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    resultText.textContent = "WIN";
    playerScore += 1;
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    resultText.textContent = "WIN";
    playerScore += 1;
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    resultText.textContent = "WIN";
    playerScore += 1;
  } else {
    resultText.textContent = "LOSE";
    computerScore += 1;
  }
  
  oneRound.appendChild(playerImage);
  oneRound.appendChild(resultText);
  oneRound.appendChild(computerImage);
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
