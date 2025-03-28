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
        let a = document.createElement("p");


        switch (humanChoice) {
            case "ROCK":
                i = 1;
                if (i === computerChoice) {
                    a.textContent = "It's a Tie.";
                } else if (i < computerChoice && computerChoice !== 2) {
                    a.textContent = "You Win.";
                    humanScore++;
                } else {
                    a.textContent = "You Lose.";
                    computerScore++;
                }
                break;
            case "PAPER":
                i = 2;
                if (i === computerChoice) {
                    a.textContent =  "It's a Tie.";
                } else if (i > computerChoice && computerChoice !== 3) {
                    a.textContent = "You Win.";
                    humanScore++;
                } else {
                    a.textContent = "You Lose.";
                    computerScore++;
                }
                break;
            case "SCISSOR":
                i = 3;
                if (i === computerChoice) {
                    a.textContent = "It's a Tie.";
                } else if (i > computerChoice && computerChoice !== 1) {
                    a.textContent = "You Win.";
                    humanScore++;
                } else {
                    a.textContent = "You Lose.";
                    computerScore++;
                }
                break;
        }
        content.appendChild(a);

        humanDecision(i);
        computerDecision(computerChoice);
       
        let b = document.createElement('p');
        b.textContent =` Human Score: ${humanScore}`;
        b.textContent +=` Computer Score: ${computerScore}`;
        content.appendChild(b);

        rounds--;
    };
    
    let b = document.createElement('p');
    if (humanScore > computerScore)
        b.textContent = "All in all the Humans win for now.";
    else if (humanScore < computerScore)
        b.textContent = "The computer wins, AI will take over.";
    else {
        b.textContent = "Computer and Humans are equal.";
    }
    content.appendChild(b);

}

function humanDecision(decision) {
    let a = document.createElement("p");
    switch (decision) {
        case 1:
            a.textContent = "You choose Rock.";
            break;
        case 2:
            a.textContent = "You choose Paper.";
            break;
        case 3:
            a.textContent = "You choose Scissor.";
            break;
    }
    content.appendChild(a);
}

function computerDecision(decision) {
    let a = document.createElement("p");
    switch (decision) {
        case 1:
            a.textContent = "The computer choses Rock.";
            break;
        case 2:
            a.textContent = "The computer choses Paper.";
            break;
        case 3:
            a.textContent = "The computer choses Scissor.";
            break;
    }
    content.appendChild(a);
}

let humanScore = 0;
let computerScore = 0;
let play = document.querySelector("#play");
let content = document.querySelector("#content");

play.addEventListener("click", playRound);



