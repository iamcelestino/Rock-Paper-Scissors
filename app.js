

const form = document.querySelector("form");
const message = document.querySelector(".message");


let choices = ["rock", "paper", "scissors"]
const getcomputerChoice = () => {
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice];
}


const  playRound = (playerSelection, computerSelection) => {
    const showMessage = `
        <span>Player1(You):${playerSelection}</span>
        <span>Player2(Computer):${computerSelection}</span>
        <span>You lose!${computerSelection} beats ${playerSelection}</span>
    `;
    if (playerSelection === computerSelection){
        console.log("draw");
    }
    message.innerHTML = showMessage;
}

for (let i = 0; i <= 5; i++) {
    playRound()
}

const getplayerChoice = (event) => {
    event.preventDefault();
    const user = form.player.value;
    if((user == "rock") || (user == "paper") || (user == "scissors")) {
        playRound(user, getcomputerChoice())
    } else {
        console.log("")
    }

}

form.addEventListener("submit", getplayerChoice)






