let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

function getMoveName(randomNumber){
    
    if( randomNumber == 1){
      return 'kamień';
    }
    else if( randomNumber == 2){
        return 'papier';
    }
    else if( randomNumber == 3){
        return 'nożyce';
    }
    
}  
let playerMove = getMoveName(playerInput);

printMessage('Ruch komputera to: ' + computerMove);
printMessage('Mój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
    if(argPlayerMove === 'kamień' && argComputerMove === 'kamień'){
        printMessage('Remis '); 
    }else if (argPlayerMove === 'papier' && argComputerMove === 'papier'){
        printMessage('Remis '); 
    }else if (argPlayerMove === 'nożyce' && argComputerMove === 'nożyce'){
        printMessage('Remis '); 
    } else if (argPlayerMove === 'kamień' && argComputerMove === 'papier'){
        printMessage('Przykro mi, przegrałeś rozgrywkę. ');
    }else if (argPlayerMove === 'kamień' && argComputerMove === 'nożyce'){
        printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
    }else if (argPlayerMove === 'nożyce' && argComputerMove === 'papier'){
        printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
    }else if (argPlayerMove === 'nożyce' && argComputerMove === 'kamień'){
        printMessage('Przykro mi, przegrałeś rozgrywkę. ');
    }else if (argPlayerMove === 'papier' && argComputerMove === 'kamień'){
        printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
    }else if (argPlayerMove === 'papier' && argComputerMove === 'nożyce'){
        printMessage('Przykro mi, przegrałeś rozgrywkę. ');   
    } else {
    printMessage('Błędny numer');
    }
    }

    let result = displayResult(computerMove, playerMove); 