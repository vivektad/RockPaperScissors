function computerPlay() {
    let array = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    return array[randomNumber];
}

function round(playerSelection, computerSelection) {
    // not considering situation when the wrong information/spelling mistakes are inserted
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'There is no winner this round!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Paper beats Rock';
    } else {
        return 'You are a winner!';
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = computerPlay();
        result = round(playerSelection, computerSelection);
        if (result === 'You are a winner!') {
            playerScore++;
        }
        console.log("Your score is: " + playerScore);
    }
}

game();