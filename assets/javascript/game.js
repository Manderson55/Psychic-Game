var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = []; /*don't know how to show this on page */

var userGuess = null;

/* set a function to generate a random letter */

var alphabet = "abcdefghiklmnopqrstuvwxyz";
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log("computer guess " + computerGuess);

/* When user presses a key it should run the function */ 

document.onkeyup = function(event) {

	var userGuess = event.key;
	console.log("user guess " + userGuess);

/*  print userGuess on page  */	

	guessesLeft--; /* subtract 1 from guessesLeft */

/*	print guesses count - 1 on page */


	if (guessesLeft > 0) {

		if (userGuess === computerGuess){
			wins++;
			console.log("You won!");
/*    update screen with wins    */
/*    update screen clearing the guessed letters */
			guessesLeft = 9;
			guessesSoFar =[];
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log("Wins: " + wins)
			console.log (" Losses: " + losses);
			console.log (" GuessesLeft: " + guessesLeft); 
			console.log (" Computer picked next: " + computerGuess);

			} 

	}		

	else {
			losses++;
			console.log("You lost!");
			guessesLeft = 9;
/*    update screen with losses    */
/*    update screen clearing the guessed letters */
			guessesSoFar =[];
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log("Wins: " + wins)
			console.log (" Losses: " + losses);
			console.log (" GuessesLeft: " + guessesLeft); 
			console.log (" Guesses so far: " + guessesSoFar);
			console.log (" Computer picked next: " + computerGuess);
		
			}

		} 




