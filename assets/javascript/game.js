var winCount = 1;
var lossCount = 0;
var remaining = 12;
var guessed = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var randomIndex = Math.floor(Math.random() * letters.length)
var computerChoice = letters[randomIndex]

console.log(computerChoice);

document.onkeypress = function(event) {

    var userChoice = event.key.toLowerCase();

    if (computerChoice === userChoice) {
        console.log("You Won!")
        document.getElementById("winCount").innerHTML = winCount++;

        guessed = []
        document.getElementById("guessed").innerHTML = guessed;

        remaining = 12;
        document.getElementById('remaining').innerHTML = 12;

    } else {
        console.log("Guess again!");
        document.getElementById("remaining").innerHTML = remaining--;
        guessed.push(userChoice);
        document.getElementById("guessed").innerHTML = guessed;
    }

    if (remaining <= 0) {
        lossCount++;
        document.getElementById("lossCount").innerHTML = lossCount++;
        console.log("You lost!");

        guessed = []
        document.getElementById('guessed').innerHTML = guessed;

        remaining = 12;
        document.getElementById('remaining').innerHTML = 12;
    }


}