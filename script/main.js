// Case's number
//  ——— ——— ———
// | 1 | 2 | 3 |
//  ——— ——— ———
// | 4 | 5 | 6 |
//  ——— ——— ———
// | 7 | 8 | 9 |
//  ——— ——— ———

// Player that is playing : 1 meaning player1 and 2 player2
var playerTurn = 1;
var isGameFinished = false;

var player1Color = "";
var player2Color = "";

var IsPlayer1Ready = false;
var IsPlayer2Ready = false;

var buttonStartPlayer1 = document.querySelector('#button-start-1');
var buttonStartPlayer2 = document.querySelector('#button-start-2');

// n°XY where X is the player number and Y the shape number (1 meaning xmark and 2 meaning circle)
var xCrossPlayer1 = document.querySelector('#xmark-player1'); 		// Coin n°11
var circlePlayer1 = document.querySelector('#circle-player1');		// Coin n°12
var xCrossPlayer2 = document.querySelector('#xmark-player2');		// Coin n°21
var circlePlayer2 = document.querySelector('#circle-player2');		// Coin n°22

function chosenSymbol(playerColor) {
	// Players cannot change symbol if one of them has clicked the start button
	if ((playerColor == 11 || playerColor == 22) && !IsPlayer1Ready && !IsPlayer2Ready) {
		xCrossPlayer1.style.border = "1px solid black";
		circlePlayer1.style.border = "none";
		xCrossPlayer2.style.border = "none";
		circlePlayer2.style.border = "1px solid black";
	} else if ((playerColor == 12 || playerColor == 21)  && !IsPlayer1Ready && !IsPlayer2Ready) {
		xCrossPlayer1.style.border = "none";
		circlePlayer1.style.border = "1px solid black";
		xCrossPlayer2.style.border = "1px solid black";
		circlePlayer2.style.border = "none";
	}
}

function start(playerId) {
	if (playerId == 1) {
		if (!IsPlayer1Ready) {
			buttonStartPlayer1.className = "btn btn-outline-success"
			IsPlayer1Ready = true;
		} else {
			buttonStartPlayer1.className = "btn btn-success";
			IsPlayer1Ready = false;
		}
	} else if (playerId == 2) {
		if (!IsPlayer2Ready) {
			buttonStartPlayer2.className = "btn btn-outline-success"
			IsPlayer2Ready = true;
		} else {
			buttonStartPlayer2.className = "btn btn-success";
			IsPlayer2Ready = false;
		}
	}
	if (IsPlayer1Ready && IsPlayer2Ready) {
		// Fonction pour lancer la partie
	}
}

function game(isGameFinished) {

}

