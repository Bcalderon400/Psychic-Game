var winCount = 0;
var lossCount = 0;
var remaining = 0;
var guesses = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var randomIndex = Math.floor(Math.random() * letters.length)
var computerChoice = letters[randomIndex]

console.log(computerChoice);

//for (i = 0; i < letters.length; i++) {
//  console.log("the letters:" + letters[i]);
//}