var wins = 0;
var losses = 0;
var winsCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var guessedLetters = []; /*don't know how to show this on page */


var alphabet = "abcdefghiklmnopqrstuvwxyz";
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeyup = function(event) {
	var userGuess = event.key;
	guessedLetters.push(userGuess);


	if (guessesLeft > 0) {
		console.log("guessesLeft is " + guessesLeft);
		guessesLeft--; 

		var guessElem = document.getElementById("guessesLeft");
		guessElem.innerHTML = "Guesses Left: " + guessesLeft;

		var guessElem = document.getElementById("userGuesses");
		guessElem.innerHTML = "Your letters for this game: " + userGuess + (', ');	
		
		if (userGuess === computerGuess){
			wins++;

			var winElem = document.getElementById("winsCount");
			winElem.innerHTML = "Wins: " + wins;

			alert("You guessed it! You have Psychic Powers! The letter you and the computer picked was " + userGuess);

			var guessElem = document.getElementById("guessesLeft");
			guessElem.innerHTML = "Guesses Left: 9" ;
			var guessElem = document.getElementById("userGuesses");
			guessElem.innerHTML = "Your letters for this game: "; 


			guessesLeft = 9;
			guessedLetters =[];
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


			} 

	}		

	else  {
			losses++;

			alert("You lost! You DON'T have Psychic Powers!");

			var lossElem = document.getElementById("lossCount");
			lossElem.innerHTML = "Losses: " + losses;
			var guessElem = document.getElementById("guessesLeft");
			guessElem.innerHTML = "Guesses Left: 9" ;
			guessesLeft = 9;
			var guessElem = document.getElementById("userGuesses");
			guessElem.innerHTML = "Your letters for this game: ";

			guessedLetters =[];
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

			}

		} 




