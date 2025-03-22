function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
    return prompt("Input your choice: ");
}

function playRound(humanChoice, computerChoice) {

    let rounds = parseInt(prompt("How many rounds would you want to play: "));
    while (rounds > 0) {

        humanChoice = getHumanChoice();
        humanChoice = humanChoice.toUpperCase();
        computerChoice = getComputerChoice();
        let i = 0;


        switch (humanChoice) {
            case "ROCK":
                i = 1;
                if (i === computerChoice) {
                    console.log("It's a Tie.");
                } else if (i < computerChoice && computerChoice !== 2) {
                    console.log("You Win.");
                    humanScore++;
                } else {
                    console.log("You Lose.");
                    computerScore++;
                }
                break;
            case "PAPER":
                i = 2;
                if (i === computerChoice) {
                    console.log("It's a Tie.");
                } else if (i > computerChoice && computerChoice !== 3) {
                    console.log("You Win.");
                    humanScore++;
                } else {
                    console.log("You Lose.");
                    computerScore++;
                }
                break;
            case "SCISSOR":
                i = 3;
                if (i === computerChoice) {
                    console.log("It's a Tie.");
                } else if (i > computerChoice && computerChoice !== 1) {
                    console.log("You Win.");
                    humanScore++;
                } else {
                    console.log("You Lose.");
                    computerScore++;
                }
                break;
        }

        humanDecision(i);
        computerDecision(computerChoice);
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log("");

        rounds--;
    };

    if (humanScore > computerScore)
        return "All in all the Humans win for now.";
    else if (humanScore < computerScore)
        return "The computer wins, AI will take over.";
    else {
        return "Computer and Humans are equal.";
    }

}

function humanDecision(decision) {
    switch (decision) {
        case 1:
            console.log("You choose Rock.");
            break;
        case 2:
            console.log("You choose Paper.");
            break;
        case 3:
            console.log("You choose Scissor.");
            break;
    }
}

function computerDecision(decision) {
    switch (decision) {
        case 1:
            console.log("The computer choses Rock.");
            break;
        case 2:
            console.log("The computer choses Paper.");
            break;
        case 3:
            console.log("The computer choses Scissor.");
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

console.log(playRound());


