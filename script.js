let CPUChoice = "";
let player1RockChoice = document.getElementById("RockButton").innerHTML;
let player1PaperChoice = document.getElementById("PaperButton").innerHTML;
let player1ScissorChoice = document.getElementById("ScissorsButton").innerHTML;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function computerRandomChooseRock() {
  let computerChoice = getRandomInt(15); //gets random number
  if (computerChoice <= 5 && computerChoice > 0) {
    CPUChoice = "Paper";
    console.log("Paper");
  }
  if (computerChoice <= 10 && computerChoice > 5) {
    CPUChoice = "Rock";
    console.log("Rock");
  }
  if (computerChoice <= 15 && computerChoice > 10) {
    CPUChoice = "Scissors";
    console.log("Scissors");
  }
  if (player1RockChoice == "Rock" && CPUChoice === "Scissors") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert("You chose Rock and the computer chose Scissors. Player 1 wins!");
    let player1Score = document.getElementById("player1Score");
    let currentScore = parseInt(player1Score.innerHTML); // get current score as a number
    currentScore += 1; // increment the score
    player1Score.innerHTML = currentScore;
  }
  if (player1RockChoice == "Rock" && CPUChoice === "Paper") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert("You chose Rock and the computer chose Paper. The computer wins!");
    let computerScore = document.getElementById("computerScore");
    let currentScore = parseInt(computerScore.innerHTML);
    currentScore += 1;
    computerScore.innerHTML = currentScore;
  }
  if (player1RockChoice == "Rock" && CPUChoice === "Rock") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert("You chose Rock and the computer chose Rock. It is a Draw!");
  }
}

function computerRandomChoosePaper() {
  let computerChoice = getRandomInt(15); //gets random number
  if (computerChoice <= 5 && computerChoice > 0) {
    CPUChoice = "Paper";
    console.log("Paper");
  }
  if (computerChoice <= 10 && computerChoice > 5) {
    CPUChoice = "Rock";
    console.log("Rock");
  }
  if (computerChoice <= 15 && computerChoice > 10) {
    CPUChoice = "Scissors";
    console.log("Scissors");
  }
  if (player1PaperChoice == "Paper" && CPUChoice === "Scissors") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert(
      "You chose Paper and the computer chose Scissors. The computer wins!"
    );
    let computerScore = document.getElementById("computerScore");
    let currentScore = parseInt(computerScore.innerHTML);
    currentScore += 1;
    computerScore.innerHTML = currentScore;
  }
  if (player1PaperChoice == "Paper" && CPUChoice === "Paper") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert("You chose Paper and the computer chose Paper. It is a draw!");
  }
  if (player1PaperChoice == "Paper" && CPUChoice === "Rock") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert("You chose Paper and the computer chose Rock. Player 1 wins!");
    let player1Score = document.getElementById("player1Score");
    let currentScore = parseInt(player1Score.innerHTML); // get current score as a number
    currentScore += 1; // increment the score
    player1Score.innerHTML = currentScore;
  }
}

function computerRandomChooseScissors() {
  let computerChoice = getRandomInt(15); //gets random number
  if (computerChoice <= 5 && computerChoice > 0) {
    CPUChoice = "Paper";
    console.log("Paper");
  }
  if (computerChoice <= 10 && computerChoice > 5) {
    CPUChoice = "Rock";
    console.log("Rock");
  }
  if (computerChoice <= 15 && computerChoice > 10) {
    CPUChoice = "Scissors";
    console.log("Scissors");
  }
  if (player1ScissorChoice == "Scissors" && CPUChoice === "Scissors") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert("You chose Scissors and the computer chose Scissors. It is a draw!");
  }
  if (player1ScissorChoice == "Scissors" && CPUChoice === "Paper") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert("You chose Scissors and the computer chose Paper. Player 1 wins!");
    let player1Score = document.getElementById("player1Score");
    let currentScore = parseInt(player1Score.innerHTML); // get current score as a number
    currentScore += 1; // increment the score
    player1Score.innerHTML = currentScore;
  }
  if (player1ScissorChoice == "Scissors" && CPUChoice === "Rock") {
    alert("Rock...Paper...Scissors...Shoot!");
    alert("You chose Scissors and the computer chose Rock. The computer wins!");
    let computerScore = document.getElementById("computerScore");
    let currentScore = parseInt(computerScore.innerHTML);
    currentScore += 1;
    computerScore.innerHTML = currentScore;
  }
}


function resetGame() {
    alert("You have reset the game! Thanks for playing!");
    let computerScore = document.getElementById("computerScore");
    let currentScore = parseInt(computerScore.innerHTML);
    currentScore = 0;
    computerScore.innerHTML = currentScore;
    let player1Score = document.getElementById("player1Score");
    let currentScore1 = parseInt(player1Score.innerHTML); // get current score as a number
    currentScore1 = 0; // increment the score
    player1Score.innerHTML = currentScore1;
}