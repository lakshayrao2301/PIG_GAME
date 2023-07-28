document.addEventListener("DOMContentLoaded", function() {

	var scores, currentScore, activePlayer, gamePlaying, winningScore;
	var dice = document.querySelector('.dice');
	var totScorePlayerOne = document.getElementById('score-0');
	var totScorePlayerTwo = document.getElementById('score-1');
	var currentScorePlayerOne = document.getElementById('current-0');
	var currentScorePlayerTwo = document.getElementById('current-1');
	var namePlayerOne = document.getElementById('name-0');
	var namePlayerTwo = document.getElementById('name-1');
	var fieldPlayerOne = document.querySelector('.player-0-field');
	var fieldPlayerTwo = document.querySelector('.player-1-field');
	var btnRoll = document.querySelector(".btn-roll");
	var btnNewGame = document.querySelector(".btn-new-game");
	var btnHold = document.querySelector(".btn-hold");

	init();

	btnRoll.addEventListener("click", function() {
		if (gamePlaying) {
			var diceRandom = Math.floor(Math.random() * 6) + 1;

			var diceDOM = dice;
			diceDOM.style.display = "block";
			diceDOM.src = "dice-" + diceRandom + "Dice.png";
			
			if (diceRandom !== 1) {
				currentScore += diceRandom;
				document.querySelector("#current-" + activePlayer).textContent = currentScore;
			} else {
				nextPlayer();
			}
		}
	});

	btnHold.addEventListener("click", function() {
		if (gamePlaying) {
			scores[activePlayer] += currentScore;
			
			document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

			var input = document.querySelector(".final-score").value;
			if (input) {
				winningScore = input;
			} else {
				winningScore = 100;
			}
			
			if (scores[activePlayer] >= winningScore) {
				document.querySelector("#name-" + activePlayer).textContent = "Winner!";
				dice.style.display = "none";
				document.querySelector(".player-" + activePlayer + "-field").classList.add("winner");
				document.querySelector(".player-" + activePlayer + "-field").classList.remove("active");
				gamePlaying = false;
			} else {
				nextPlayer();
			}
		}
	});

	btnNewGame.addEventListener("click", init);

	function init() {
		scores = [0, 0];
		currentScore = 0;
		activePlayer = 0;
		gamePlaying = true;
		dice.style.display = 'none';		
		totScorePlayerOne.textContent = '0';	
		totScorePlayerTwo.textContent = '0';		
		currentScorePlayerOne.textContent = '0';		
		currentScorePlayerTwo.textContent = '0';		
		namePlayerOne.textContent = 'Player 1';		
		namePlayerTwo.textContent = 'Player 2';		
		fieldPlayerOne.classList.remove('winner');		
		fieldPlayerTwo.classList.remove('winner');		
		fieldPlayerOne.classList.remove('active');		
		fieldPlayerTwo.classList.remove('active');		
		fieldPlayerOne.classList.add('active');
	}

	function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		currentScore = 0;
		currentScorePlayerOne.textContent = "0";
		currentScorePlayerTwo.textContent = "0";
		fieldPlayerOne.classList.toggle("active");
		fieldPlayerTwo.classList.toggle("active");
		dice.style.display = "none";
	}

});
