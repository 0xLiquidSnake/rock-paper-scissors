const buttons = document.querySelectorAll("button");

// Add a place in the DOM to display the result (make sure there's a <div id="result"> in your HTML)
const resultDiv = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay()); // Get the result from playRound
        resultDiv.textContent = result; // Display the result in the result div
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Check for tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    // Check for player's win conditions
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    }

    // Otherwise, the computer wins
    else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
    }
}
