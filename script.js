function computerPlay() {
    return Math.floor(Math.random() * 3) + 1;
}

function converToString(num) {
    switch(num) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors'
            break;
    }
}

function converToNumber(userInput) {
    if (userInput.toUpperCase() == 'ROCK') {
        return 1;
    }
    else if (userInput.toUpperCase() == 'PAPER') {
        return 2;
    }
    else if (userInput.toUpperCase() == 'SCISSORS') {
        return 3;
    }
    else {
        let userInput = prompt("Invalid value type again: Rock, Paper, or Scissors!");
        converToNumber(userInput);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw";
    }

    //Computer wins 
    //if playerSelection < computerSelection except playerSelection == 1 && computerSelection == 3
    //OR playerSelection == 3 && computerSelection == 1 
    else if ((playerSelection < computerSelection && !(playerSelection == 1 && computerSelection == 3)) 
                || (playerSelection == 3 && computerSelection == 1)) {
        return `You Lose! ${converToString(computerSelection)} beats ${converToString(playerSelection)}`;
    }

    else {
        return "You Win!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const userInput = prompt("Type Rock, Paper, or Scissors!");
        console.log(playRound(converToNumber(userInput),computerPlay()));
    }
}
