let computerScore = 0;
let playerScore = 0;
const playArea = document.querySelector('.change');
const pScore = document.querySelector('#playerScore');
const buttonDiv = document.querySelector('.selector')
const title = document.querySelector('.currentTurn')
const pContent = document.createElement('p');
pContent.textContent = playerScore;
pScore.append(pContent);
const cScore = document.querySelector('#computerScore');
const cContent = document.createElement('p');
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
    } else if (computerScore >= 5 || playerScore >= 5){
        return '';
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        cContent.textContent = computerScore;
        return 'You lost this round :(';
    } else {
        playerScore++;
        pContent.textContent = playerScore;
        return 'You are a winner!';
    } 
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const text = round(button.id, computerPlay());

        if (computerScore == 5 || playerScore == 5) {
            if (playerScore == 5) {
                title.textContent = 'We always knew you could do it'
            } else {
                title.textContent = 'I told them you were not good enough...'
            }
        }
    })
})
