let computerScore = 0;
let playerScore = 0;
const playArea = document.querySelector('.change');
const pScore = document.querySelector('#playerScore');
const pContent = document.createElement('p');
pContent.textContent = playerScore;
pScore.append(pContent);
const cScore = document.querySelector('#computerScore');
let cContent = document.createElement('p');
cContent.textContent = computerScore;
cScore.append(cContent);

function computerPlay() {
    let array = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random()*3);
    return array[randomNumber];
}

function round(playerSelection, computerSelection) {
    // not considering situation when the wrong information/spelling mistakes are inserted
    if (playerSelection === computerSelection) {
        return 'There is no winner this round!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You lost this round :(';
    } else {
        playerScore++;
        return 'You are a winner!';
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const text = round(button.id, computerPlay());
    })
})
