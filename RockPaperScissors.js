if(playerOne === computer) {
    //tie game
} else if (playerOne === "rock") {
    if(computer === "paper") {
        //computer wins
    } else {
        //playerOne wins
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        //computer wins
    } else {
        // playerOne wins
    }
} else {
    if (computer === "rock") {
        // computer wins
    } else {
        //playerOne Wins
    }
}



switch (playerOne) {
    case computer:
        console.log("Tie game");
        break;
    case "rock":
        if(computer === "paper") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
        break;
    case "paper":
        if(computer === "scissors") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
        break;
    default:
        if(computer === "rock") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
}

let playerOne = "rock";
let computer = "rock";
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
console.log(result);