let playGame = confirm("shall we play rock paper or scissors?");
if(playGame) {
    //play
    let playerChoice = prompt("please enter rock, paper or scissors");
    if(playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

            let result =
                playerOne === computer
                    ? "tie game"
                    : playerOne === "rock" && computer === "paper"
                        ? `playerOne ${playerOne}\nComputer: ${computer}\nComputer wins!`
                        : playerOne === "paper" && computer === "scissors"
                            ? `playerOne: ${playerOne}\nComputer ${computer} \nComputer wins!`
                            : playerOne === "scissors" && computer === "rock"
                                ? `playerOne ${playerOne}\nComputer: ${computer} \n Computer wins!`
                                : `playerOne ${playerOne}\nComputer: ${computer} \n Player wins!`;
            alert(result);
            let playAgain = confirm("play Again?");
            playAgain ? location.reload() : alert("ok maybe next time");
        } else {
            alert("you didnt enter rock paper or scissors");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time");
    }
} else {
    alert("ok maybe next time");
}