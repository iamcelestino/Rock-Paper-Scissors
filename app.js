const playerInput = document.querySelector("input");
const message = document.querySelector(".message");


let choices = ["rock", "paper", "scissors"]
const getcomputerChoice = () => {
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice];
}







