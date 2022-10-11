let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

if (randomNumber == 1){
  computerMove = 'kamień';
  printMessage('Ruch komputera to : ' + computerMove);
} else if (randomNumber == 2) {
	computerMove = 'papier';
	printMessage('Ruch komputera to : ' + computerMove);
} else if (randomNumber == 3) {
	computerMove = 'nożyce';
	printMessage('Ruch komputera to : ' + computerMove);
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień';
  printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == 2) {
	playerMove = 'papier';
	printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == 3) {
	playerMove = 'nożyce';
	printMessage('Twój ruch to: ' + playerMove);
}
if(playerMove === 'kamień' && computerMove === 'kamień'){
    printMessage('Remis '); 
}else if (playerMove === 'papier' && computerMove === 'papier'){
    printMessage('Remis '); 
}else if (playerMove === 'nożyce' && computerMove === 'nożyce'){
    printMessage('Remis '); 
} else if (playerMove === 'kamień' && computerMove === 'papier'){
    printMessage('Przykro mi, przegrałeś rozgrywkę. ');
}else if (playerMove === 'kamień' && computerMove === 'nożyce'){
    printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
}else if (playerMove === 'nożyce' && computerMove === 'papier'){
    printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
}else if (playerMove === 'nożyce' && computerMove === 'kamień'){
    printMessage('Przykro mi, przegrałeś rozgrywkę. ');
}else if (playerMove === 'papier' && computerMove === 'kamień'){
    printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
}else if (playerMove === 'papier' && computerMove === 'nożyce'){
    printMessage('Przykro mi, przegrałeś rozgrywkę. ');   
}else if (playerMove === 'nieznany ruch'){
    printMessage('Wpisałeś błędny numer ');
}
