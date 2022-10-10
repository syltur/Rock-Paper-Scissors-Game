function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

if (randomNumber == 1){
  computerMove = 'kamień';
  printMessage('Ruch komputera to : ' + computerMove);
} else if (randomNumber == 2) {
	computerMove = 'papier';
	printMessage('Ruch komputera to : ' + computerMove);
} else if (randomNumber == 3) {
	computerMove = 'nożyczki';
	printMessage('Ruch komputera to : ' + computerMove);
}

