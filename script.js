// written by chapel1337

let random = Math.floor(Math.random() * 3);

let computerChoice = undefined;
let playerChoice = undefined;
let conclusion = undefined;

function wait(time) {
    return new Promise(function (reset) {
        setInterval(function () {
            reset(time)
        }, time * 1000);
    })
}

function playerChoose(choice) {
    if (choice == "rock") {
        playerChoice = "rock"
    }
    else if (choice == "paper") {
        playerChoice = "paper"
    }
    else if (choice == "scissors") {
        playerChoice = "scissors"
    }
    else {
        alert("something broke");
        window.location.reload();
    }

    computerChoose();
}

function computerChoose() {
    if (random == 0) {
        computerChoice = "rock"
    }
    else if (random == 1) {
        computerChoice = "paper"
    }
    else if (random == 2) {
        computerChoice = "scissors"
    }
    else {
        alert("something broke");
        window.location.reload();
    }

    decideWinner();
}

async function decideWinner() {

    if (playerChoice == "rock" && computerChoice == "rock") {
        conclusion = "tie";
    }
    else if (playerChoice == "paper" && computerChoice == "paper") {
        conclusion = "tie";
    }
    else if (playerChoice == "scissors" && computerChoice == "scissors") {
        conclusion = "tie";
    }

    else if (playerChoice == "rock" && computerChoice == "scissors") {
        conclusion = "win";
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        conclusion = "loss";
    }

    else if (playerChoice == "paper" && computerChoice == "rock") {
        conclusion = "win";
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        conclusion = "loss";
    }

    else if (playerChoice == "scissors" && computerChoice == "paper") {
        conclusion = "win";
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        conclusion = "loss";
    }


    if (conclusion == "win") {
        document.getElementById("status").innerText = "you win!";
    }
    else if (conclusion == "loss") {
        document.getElementById("status").innerText = "loss!";
    }
    else if (conclusion == "tie") {
        document.getElementById("status").innerText = "tie!";
    }

    document.getElementById("choice_container").remove();
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    document.getElementById("reload").style.opacity = "100" + "%";
}

console.log("j");