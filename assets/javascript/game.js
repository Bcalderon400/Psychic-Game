var winCount = 1;
var lossCount = 0;
var remaining = 12;
var guessed = [];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var randomIndex = Math.floor(Math.random() * letters.length)
var computerChoice = letters[randomIndex]

console.log(computerChoice);

document.onkeyup = function(event) {

    var userChoice = event.key;

    if (remaining <= 0) {
        lossCount++;
        document.getElementById("lossCount").innerHTML = "Losses: " + lossCount++;
        alert("You lost!");
        remaining = 12;
        guessed = []
        document.getElementById('guessed').innerHTML = guessed;

        document.getElementById('remaining').innerHTML = 12;

        randomIndex = Math.floor(Math.random() * letters.length)
        computerChoice = letters[randomIndex]
        console.log(computerChoice)
    }


    if (computerChoice === userChoice) {
        alert("You Won!")
        document.getElementById("winCount").innerHTML = "Wins: " + winCount++;

        guessed = []
        document.getElementById("guessed").innerHTML = guessed;
        randomIndex = Math.floor(Math.random() * letters.length)
        computerChoice = letters[randomIndex]

        remaining = 12;
        document.getElementById('remaining').innerHTML = 12;

    } else {
        console.log("Guess again!");
        document.getElementById("remaining").innerHTML = "Guesses Remaining: " + remaining--;
        guessed.push(userChoice);
        document.getElementById("guessed").innerHTML = "Letters Guessed: " + guessed;
    }
}