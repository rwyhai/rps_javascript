

let randomNumber = Math.floor(Math.random()*3); //0-rock 1-paper 2-scissors


const rpsButton = document.querySelector('button');
const rpsField = document.querySelector('#input');
const winCondition = document.querySelector('#winCondition')
const computerPick = document.querySelector('#computerPick')
const yourPick = document.querySelector('#yourPick')

let playerPick;
let enemyPick;

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

function checkRPS() {
    let playerPick = rpsField.value;
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
                winCondition.textContent = 'You\'ve lost';
                break;
            case 2: // win
                winCondition.textContent = 'You\'ve won';
        };
    } else if (playerPick === "paper") {
        switch(randomNumber) {
            case 0: // win
                winCondition.textContent = 'It\'s a win';
                break;
            case 1: // tie
                winCondition.textContent = 'You\'ve tied';
                break;
            case 2: // loss
                winCondition.textContent = 'You\'ve lost';
        };
    } else if (playerPick === "scissors") {
        switch(randomNumber) {
            case 0: // lose
                winCondition.textContent = 'It\'s a lost';
                break;
            case 1: // win
                winCondition.textContent = 'You\'ve won';
                break;
            case 2: // tie
                winCondition.textContent = 'You\'ve tied';
        };
    } else {
        winCondition.textContent = "Something went wrong";
    };
    //reset randomNumber
    randomNumber = Math.floor(Math.random()*3);
};

rpsButton.addEventListener('click', checkRPS);