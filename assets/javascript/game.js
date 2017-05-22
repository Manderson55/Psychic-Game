var wins = 0;
var losses = 0;
var guessedLetters = []; 
var guessesLeft = 9;
 


/* set a function to generate a random letter */

var alphabet = "abcdefghiklmnopqrstuvwxyz";
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log("computer guess " + computerGuess);

/* When user presses a key it should run the function */ 

document.onkeyup = function(event) {

/* set userGuess to the key the user pressed */
	var userGuess = event.key;


	guessedLetters.push(userGuess); /* fills the guessedLetters array with the user input */


	/* sets the var userGuesses to the user selection and prints it on the page */
	var userGuesses = "";
	guessedLetters.forEach(function(letter) {

		userGuesses += letter;
	});

	document.getElementById("userGuesses").innerHTML = "Your letters for this game: " + userGuesses;




	console.log("user guess " + userGuess);



	if (guessesLeft > 0) {
		console.log("guessesLeft is " + guessesLeft);
		guessesLeft--; 
		/* subtract 1 from guessesLeft and print it on page*/

		var guessElem = document.getElementById("guessesLeft");
		guessElem.innerHTML = "Guesses Left: " + guessesLeft;


		
		if (userGuess === computerGuess){
			wins++;

			var winElem = document.getElementById("winsCount");
			winElem.innerHTML = "Wins: " + wins;

			alert("You guessed it! You have Psychic Powers! The letter you and the computer picked was " + userGuess);
			console.log("You won!");

/*  update the page with added win and reset number of guesses left and letters picked 		*/	

			var guessElem = document.getElementById("guessesLeft");
			guessElem.innerHTML = "Guesses Left: 9" ;
			var guessElem = document.getElementById("userGuesses");
			guessElem.innerHTML = "Your letters for this game: "; 

/*    update screen with wins    */
/*    update screen clearing the guessed letters */
			guessesLeft = 9;
			guessedLetters =[];
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log("Wins: " + wins)
			console.log (" Losses: " + losses);
			console.log (" GuessesLeft: " + guessesLeft); 
			console.log (" Computer picked next: " + computerGuess);

			} 

	}		

	else  {
			losses++;
/* subtract 1 from guessesLeft and print it on page*/
	
			console.log(guessesLeft);
			console.log("You lost!");
			alert("You lost! You DON'T have Psychic Powers!");

			var lossElem = document.getElementById("lossCount");
			lossElem.innerHTML = "Losses: " + losses;
			var guessElem = document.getElementById("guessesLeft");
			guessElem.innerHTML = "Guesses Left: 9" ;
			guessesLeft = 9;
			var guessElem = document.getElementById("userGuesses");
			guessElem.innerHTML = "Your letters for this game: ";


/*    update screen clearing the guessed letters */
			guessedLetters =[];
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log("Wins: " + wins)
			console.log (" Losses: " + losses);
			console.log (" GuessesLeft: " + guessesLeft); 
			console.log (" Computer picked next: " + computerGuess);
		
			}

		} 




