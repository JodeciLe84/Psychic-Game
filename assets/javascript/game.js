    var computerLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSoFar = []

function reset (){
    guessesLeft = 9
    guessesSoFar = []
}
function getE (){
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar
    document.getElementById("wins").innerHTML = wins
    document.getElementById("losses").innerHTML = losses
    document.getElementById("guessesLeft").innerHTML = guessesLeft
}


    // Function Starts: after pressing a key
    document.onkeyup = function(event) {


            // User pick is changed to lower case
            var userPick = event.key
            // console.log(userPick)

            // appendChild to log users guesses
            guessesSoFar.push(userPick);
            // console.log(guessesSoFar)

            getE()

            // Computer Random Letter
            var computerPick = computerLetter[Math.floor(Math.random() * computerLetter.length)]
            // console.log(computerPick)

            // Conditions
        if (userPick === "a" || userPick === "b" || userPick === "c" || userPick === "d" || userPick === "e" || userPick === "f" ||
            userPick === "g" || userPick === "h" || userPick === "i" || userPick === "j" || userPick === "k" || userPick === "l" ||
            userPick === "m" || userPick === "n" || userPick === "o" || userPick === "p" || userPick === "q" || userPick === "r" ||
            userPick === "s" || userPick === "t" || userPick === "u" || userPick === "v" || userPick === "w" || userPick === "x" ||
            userPick === "z") {
            if (userPick === computerPick) {
                wins++
                console.log ("you win")
                reset()
            }
            else if (userPick !== computerPick) {
                guessesLeft--
                console.log("lose")
            }
        }
    }
document.getElementById("guessesSoFar").innerHTML = guessesSoFar
document.getElementById("wins").innerHTML = wins
document.getElementById("losses").innerHTML = losses
document.getElementById("guessesLeft").innerHTML = guessesLeft


