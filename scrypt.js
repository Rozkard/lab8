var playerScore = 0;
var botScore = 0;
var maxScore = 3;

function inputName(){
	let age = prompt('Input your name', 'Player');
	document.getElementById("playerName").innerHTML = age;
	document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("botScore").innerHTML = botScore;
	document.getElementById("playerNumber").innerHTML = 0;
	document.getElementById("botNumber").innerHTML = 0;
}
function generateNumbers(){
	let currentPlayerNumber = Math.floor(Math.random()*100);
	let currentBotNumber = Math.floor(Math.random()*100);
	document.getElementById("playerNumber").innerHTML = currentPlayerNumber;
	document.getElementById("botNumber").innerHTML = currentBotNumber;
	if(currentPlayerNumber>currentBotNumber){
		playerScore++;
		document.getElementById("playerScore").innerHTML = playerScore;
		document.getElementById("botScore").innerHTML = botScore;
		if(playerScore==maxScore){
			alert("Player WIN")
			playerScore=0;
			botScore=0;
			document.getElementById("playerScore").innerHTML = 0;
			document.getElementById("botScore").innerHTML = 0;
			document.getElementById("playerNumber").innerHTML = "-";
			document.getElementById("botNumber").innerHTML = "-";
		}
	}
	else if(currentPlayerNumber<currentBotNumber){
		botScore++;
		document.getElementById("playerScore").innerHTML = playerScore;
		document.getElementById("botScore").innerHTML = botScore;
		if(botScore==maxScore){
			alert("Computer WIN")
			playerScore=0;
			botScore=0;
			document.getElementById("playerScore").innerHTML = 0;
			document.getElementById("botScore").innerHTML = 0;
			document.getElementById("playerNumber").innerHTML = "-";
			document.getElementById("botNumber").innerHTML = "-";
		}
	}
}