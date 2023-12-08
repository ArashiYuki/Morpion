//TODO : afficher le gagnant en grand et mettre le bouton restart avec

// Case's number
//  ——— ——— ———
// | 1 | 2 | 3 |
//  ——— ——— ———
// | 4 | 5 | 6 |
//  ——— ——— ———
// | 7 | 8 | 9 |
//  ——— ——— ———

var playerTurn = 1; // Player that is playing : 1 meaning player1 and 2 player2
var count = 0;		// count how many cases have been clicked (to stop at 9, when all have been clicked)

var player1Symbol = "";
var player2Symbol = "";

var IsPlayer1Ready = false;
var IsPlayer2Ready = false;

var buttonStartPlayer1 = document.querySelector('#button-start-1');
var buttonStartPlayer2 = document.querySelector('#button-start-2');
var restartButton = document.querySelector('#restart-button');

// n°XY where X is the player number and Y the shape number (1 meaning xmark and 2 meaning circle)
var xCrossPlayer1 = document.querySelector('#xmark-player1'); 		// Coin n°11
var circlePlayer1 = document.querySelector('#circle-player1');		// Coin n°12
var xCrossPlayer2 = document.querySelector('#xmark-player2');		// Coin n°21
var circlePlayer2 = document.querySelector('#circle-player2');		// Coin n°22

// get each case to add an event listener (at the end of the document)
var case1 = document.querySelector('#case1');
var case2 = document.querySelector('#case2');
var case3 = document.querySelector('#case3');
var case4 = document.querySelector('#case4');
var case5 = document.querySelector('#case5');
var case6 = document.querySelector('#case6');
var case7 = document.querySelector('#case7');
var case8 = document.querySelector('#case8');
var case9 = document.querySelector('#case9');

// The content will here be the player's number for speed
var listCasesContent = [0, 0, 0,
						0, 0, 0,
						0, 0, 0 ];

function chosenSymbol(playerColor) {
	// Players cannot change symbol if one of them has clicked the start button
	if ((playerColor == 11 || playerColor == 22) && !IsPlayer1Ready && !IsPlayer2Ready) {
		xCrossPlayer1.style.border = "1px solid black";
		circlePlayer1.style.border = "none";
		xCrossPlayer2.style.border = "none";
		circlePlayer2.style.border = "1px solid black";
		player1Symbol = "xmark-solid.svg";
		player2Symbol = "circle-regular.svg";
	} else if ((playerColor == 12 || playerColor == 21)  && !IsPlayer1Ready && !IsPlayer2Ready) {
		xCrossPlayer1.style.border = "none";
		circlePlayer1.style.border = "1px solid black";
		xCrossPlayer2.style.border = "1px solid black";
		circlePlayer2.style.border = "none";
		player1Symbol = "circle-regular.svg";
		player2Symbol = "xmark-solid.svg";
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
		game();
	}
}

function game() {
	// Prevent players from clicking start button when the party has already started
	buttonStartPlayer1.disabled = true;
	buttonStartPlayer2.disabled = true;

	// EventListener for all cases
	case1.addEventListener('click', addSymbolInCase);
	case1.myParam = case1;

	case2.addEventListener('click', addSymbolInCase);
	case2.myParam = case2;

	case3.addEventListener('click', addSymbolInCase);
	case3.myParam = case3;

	case4.addEventListener('click', addSymbolInCase);
	case4.myParam = case4;

	case5.addEventListener('click', addSymbolInCase);
	case5.myParam = case5;

	case6.addEventListener('click', addSymbolInCase);
	case6.myParam = case6;

	case7.addEventListener('click', addSymbolInCase);
	case7.myParam = case7;

	case8.addEventListener('click', addSymbolInCase);
	case8.myParam = case8;

	case9.addEventListener('click', addSymbolInCase);
	case9.myParam = case9;
}

function addSymbolInCase(evt) {
	caseToChange = evt.currentTarget.myParam;
	caseIdNumber = caseToChange.id[4];
	var img = document.createElement('img');
	img.className = "w-50";
	if (playerTurn == 1) {
		img.src = "../img/" + player1Symbol;
		img.alt = player1Symbol.substring(0, 6);
		playerTurn = 2;
		listCasesContent[caseIdNumber-1] = 1;
	} else if (playerTurn == 2) {
		img.src = "../img/" + player2Symbol;
		img.alt = player2Symbol.substring(0, 6);
		playerTurn = 1;
		listCasesContent[caseIdNumber-1] = 2;
	} else {
		return "that player doesn't exist";
	}
	caseToChange.appendChild(img);
	caseToChange.removeEventListener('click', addSymbolInCase); // prevent players from clicking a case already used
	count++;
	verificationWinner();
}

// A list index starts at 0 so table is now
//  ——— ——— ———
// | 0 | 1 | 2 |
//  ——— ——— ———
// | 3 | 4 | 5 |
//  ——— ——— ———
// | 6 | 7 | 8 |
//  ——— ——— ———
function verificationWinner() {
		// LINES
	if ((listCasesContent[0] == listCasesContent[1] && listCasesContent[0] == listCasesContent[2] && listCasesContent[0] != 0) || // first line verrification
		(listCasesContent[3] == listCasesContent[4] && listCasesContent[3] == listCasesContent[5] && listCasesContent[3] != 0) || // second line verrification
		(listCasesContent[6] == listCasesContent[7] && listCasesContent[6] == listCasesContent[8] && listCasesContent[6] != 0) || // third line verrification

		// COLUMNS
		(listCasesContent[0] == listCasesContent[3] && listCasesContent[0] == listCasesContent[6] && listCasesContent[0] != 0) || // first column verrification
		(listCasesContent[1] == listCasesContent[4] && listCasesContent[1] == listCasesContent[7] && listCasesContent[1] != 0) || // second column verrification
		(listCasesContent[2] == listCasesContent[5] && listCasesContent[2] == listCasesContent[8] && listCasesContent[2] != 0) || // third column verrification

		// DIAGONALS
		(listCasesContent[0] == listCasesContent[4] && listCasesContent[0] == listCasesContent[8] && listCasesContent[0] != 0) || // first digonal verrification
		(listCasesContent[6] == listCasesContent[4] && listCasesContent[6] == listCasesContent[2] && listCasesContent[6] != 0))   // second digonal verrification
		{
			var winner = 0;
			if (playerTurn == 1) {
				winner = 2;
			} else if (playerTurn == 2) {
				winner = 1;
			}
			gameFinished();
	} else if (count == 9) {
		gameFinished();
	}
}

function gameFinished() {
	restartButton.className = "btn btn-success";

	case1.removeEventListener('click', addSymbolInCase);
	case2.removeEventListener('click', addSymbolInCase);
	case3.removeEventListener('click', addSymbolInCase);
	case4.removeEventListener('click', addSymbolInCase);
	case5.removeEventListener('click', addSymbolInCase);
	case6.removeEventListener('click', addSymbolInCase);
	case7.removeEventListener('click', addSymbolInCase);
	case8.removeEventListener('click', addSymbolInCase);
	case9.removeEventListener('click', addSymbolInCase);
}

function restart() {
	console.log("ok restarting the game !")
	// Renitialize values
	playerTurn = 1;
	count = 0;

	player1Symbol = "";
	player2Symbol = "";

	IsPlayer1Ready = false;
	IsPlayer2Ready = false;

	listCasesContent = [0, 0, 0,
		0, 0, 0,
		0, 0, 0 ];

	// Renitialize player choice and buttons
	xCrossPlayer1.style.border = "none";
	circlePlayer1.style.border = "none";
	xCrossPlayer2.style.border = "none";
	circlePlayer2.style.border = "none";

	buttonStartPlayer1.disabled = false;
	buttonStartPlayer1.className = "btn btn-success";
	buttonStartPlayer2.disabled = false;
	buttonStartPlayer2.className = "btn btn-success";

	// Renitialize cases
	if (case1.hasChildNodes()) {
		case1.firstChild.remove();
	}
	if (case2.hasChildNodes()) {
		case2.firstChild.remove();
	}
	if (case3.hasChildNodes()) {
		case3.firstChild.remove();
	}
	if (case4.hasChildNodes()) {
		case4.firstChild.remove();
	}
	if (case5.hasChildNodes()) {
		case5.firstChild.remove();
	}
	if (case6.hasChildNodes()) {
		case6.firstChild.remove();
	}
	if (case7.hasChildNodes()) {
		case7.firstChild.remove();
	}
	if (case8.hasChildNodes()) {
		case8.firstChild.remove();
	}
	if (case9.hasChildNodes()) {
		case9.firstChild.remove();
	}

	// Restart button is not visible
	restartButton.className += " visually-hidden";
}