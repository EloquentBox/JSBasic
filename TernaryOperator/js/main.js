let soup = "chicken noodle soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "sorry no soup for you"
    : soup
    ? `yes we have ${soup} today`
    : "sorry we don't have soup today"
let response = soup ? "yes we have soup" : "sorry no soup today";

console.log(soupAccess);

let testScore = 60;
let myGrade = testScore > 89 ? "A"
    : testScore > 79 ? "B"
    : testScore > 69 ? "C"
    : testScore > 59 ? "D"
    : "F";
console.log(`My test grade is a ${myGrade}`);

let playerOne = "rock";
let computer = "scissors";
let result =
    playerOne === computer
    ? "tie game"
    : playerOne === "rock" && computer === "paper"
    ? "computer wins"
    : playerOne === "paper" && computer === "scissors"
    ? "computer wins"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins"
    : "playerOne wins";
console.log(result);