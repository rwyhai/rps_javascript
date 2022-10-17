

let randomNumber = Math.floor(Math.random()*3); //0-rock 1-paper 2-scissors


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const winCondition = document.querySelector('#winCondition')
const computerPick = document.querySelector('#computerPick')
const yourPick = document.querySelector('#yourPick')

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {console.log(e);checkRPS(e)})
});

let playerPick;
let enemyPick;
let playerPoints = 0;
let enemyPoints = 0;

function checkEnemyPick() {
    switch(randomNumber) {
        case 0:
            enemyPick = 'rock';
            break;
        case 1:
            enemyPick = 'paper';
            break;
        case 2:
            enemyPick = 'scissors';
            break;
    };
    return enemyPick;
};

function checkRPS(event) {
    let playerPick = event.target.textContent;
    computerPick.textContent = '';
    yourPick.textContent = '';
    winCondition.textContent = '';

    if (playerPick === "rock" || playerPick === "scissors" || playerPick === "paper") {
        computerPick.textContent = `The computer picked ${checkEnemyPick()}`;
        yourPick.textContent = `You picked ${playerPick}`;
    } else {
        winCondition.textContent = 'Please pick rock, paper, or scissors';
        return;
    };

    if (playerPick === "rock") {
        switch(randomNumber) {
            case 0: // it's a tie
                winCondition.textContent = 'It\'s a tie';
                break;
            case 1: // loss
                enemyPoints += 1;
                winCondition.textContent = 'You\'ve lost';
                break;
            case 2: // win
                playerPoints += 1;
                winCondition.textContent = 'You\'ve won';
        };
    } else if (playerPick === "paper") {
        switch(randomNumber) {
            case 0: // win
                playerPoints += 1;
                winCondition.textContent = 'It\'s a win';
                break;
            case 1: // tie
                winCondition.textContent = 'You\'ve tied';
                break;
            case 2: // loss
                enemyPoints += 1;
                winCondition.textContent = 'You\'ve lost';
        };
    } else if (playerPick === "scissors") {
        switch(randomNumber) {
            case 0: // lose
                enemyPoints += 1;
                winCondition.textContent = 'It\'s a lost';
                break;
            case 1: // win
                playerPoints += 1;
                winCondition.textContent = 'You\'ve won';
                break;
            case 2: // tie
                winCondition.textContent = 'You\'ve tied';
        };
    } else {
        winCondition.textContent = "Something went wrong";
    };
    //reset randomNumber
    playerScore.textContent = playerPoints;
    enemyScore.textContent = enemyPoints;
    randomNumber = Math.floor(Math.random()*3);
};

const divScore = document.createElement('div');
divScore.style.background = "blue";
const playerScore = document.createElement('span');
const scoreDivider = document.createElement('span');
scoreDivider.textContent = " - ";
const enemyScore = document.createElement('span');
const results = document.querySelector('#results');


results.appendChild(divScore);
divScore.appendChild(playerScore);
divScore.appendChild(scoreDivider);
divScore.appendChild(enemyScore);