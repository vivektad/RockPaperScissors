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

