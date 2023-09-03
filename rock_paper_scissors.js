function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let choice;
    if (computerChoice === 0) {
        choice = "Rock";
    } else if (computerChoice === 1) {
        choice = "Paper";
    } else if (computerChoice === 2) {
        choice = "Scissors";
    }
    return choice;
}

const getPlayerChoice = playerChoice => {
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return "Tie";
    }
    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (playerSelection === "paper") {
        if(computerSelection === "scissors") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
}