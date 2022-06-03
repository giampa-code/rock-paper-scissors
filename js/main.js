let userScore = 0;
let cpuScore = 0;
let closeBtn;

const userScore_div = document.getElementById("user-score");
const cpuScore_div = document.getElementById("cpu-score");
const restart = document.getElementById("restart");
const result = document.getElementById ("result")

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, cpuChoice){
    userScore++;
    userScore_div.innerHTML = userScore;
    cpuScore_div.innerHTML = cpuScore;
    result.innerHTML = "You win, the cpu chose " + cpuChoice;
}

function lose(userChoice, cpuChoice){
    cpuScore++;
    userScore_div.innerHTML = userScore;
    cpuScore_div.innerHTML = cpuScore;
    result.innerHTML = "You lose, the cpu chose " + cpuChoice;
}

function draw(userChoice, cpuChoice){
    userScore_div.innerHTML = userScore;
    cpuScore_div.innerHTML = cpuScore;
    result.innerHTML = "It's draw, the cpu chose " + cpuChoice;
}


function play(userChoice) {
    const cpuChoice = getCpuChoice();
    switch (userChoice + cpuChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        win(userChoice, cpuChoice);
        break;
      case 'rockpaper':
      case 'paperscissors':
      case 'scissorsrock':
        lose(userChoice, cpuChoice);
        break;
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        draw(userChoice, cpuChoice);
        break;
    }
  }

function restartGame(){
    userScore = 0;
    cpuScore = 0;
    userScore_div.innerHTML = userScore;
    cpuScore_div.innerHTML = cpuScore;
    result.innerHTML = "";
}

function main() {
    rock_div.addEventListener('click', function() {
      play('rock');
    })
    
    paper_div.addEventListener('click', function() {
      play('paper');
    })
    
    scissors_div.addEventListener('click', function() {
      play('scissors');
    })
}

restart.addEventListener('click', restartGame);
main ();