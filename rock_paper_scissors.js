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