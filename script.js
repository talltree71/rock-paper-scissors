function computerPlay() {
    return Math.floor(Math.random() * 3) + 1;
}

function userPlay() {
    const userInput = prompt("Type Rock, Paper, or Scissors!");

    let userInputToNumber = (userInput) => {
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
            userInputToNumber(userInput);
        }
    };

    return userInputToNumber(userInput);
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

function playRound(pSelNum, comSelNum) {
    if (pSelNum == comSelNum) {
        return "Draw";
    }

    else if ((pSelNum < comSelNum && !(pSelNum == 1 && comSelNum == 3)) || (pSelNum == 3 && comSelNum == 1)) {
        return `You Lose! ${converToString(comSelNum)} beats ${converToString(pSelNum)}`;
    }

    else {
        return "You Win!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(userPlay(),computerPlay()));
    }
}