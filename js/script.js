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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
  printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == 2) {
	playerMove = 'nożyczki';
	printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == 3) {
	playerMove = 'nożyczki';
	printMessage('Ruch komputera to : ' + playerMove);
}

