function playGame(playerInput){
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    function getMoveName(randomNumber){
        
        if( randomNumber == 1){
        return 'papier';
        }
        else if( randomNumber == 2){
            return 'kamień';
        }
        else if( randomNumber == 3){
            return 'nożyce';
        }
        
    }  
    let playerMove = getMoveName(playerInput);
    let computerScore = 0;
    let playerScore = 0;

    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');

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
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else if (argPlayerMove === 'kamień' && argComputerMove === 'nożyce'){
            printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }else if (argPlayerMove === 'nożyce' && argComputerMove === 'papier'){
            printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }else if (argPlayerMove === 'nożyce' && argComputerMove === 'kamień'){
            printMessage('Przykro mi, przegrałeś rozgrywkę. ');
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else if (argPlayerMove === 'papier' && argComputerMove === 'kamień'){
            printMessage('Gratuluję! Wgrałeś rozgrywkę. ');
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }else if (argPlayerMove === 'papier' && argComputerMove === 'nożyce'){
            printMessage('Przykro mi, przegrałeś rozgrywkę. ');   
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } 
        }

        let result = displayResult(computerMove, playerMove); 
        printMessage('Wynik komputera to: ' + computerScoreBoard );
        printMessage('Twój wynik to: ' + playerScoreBoard);
}

function imgClicked1(){

    playGame(1);
  }
  
  let playPaper = document.getElementById('img-paper');
  
  playPaper.addEventListener('click', imgClicked1);

  function imgClicked2(){
    playGame(2);
  }
  
  let playRock = document.getElementById('img-rock');
  
  playRock.addEventListener('click', imgClicked2);

  function imgClicked3(){
    playGame(3);
  }
  
  let playScissors = document.getElementById('img-scissors');
  
  playScissors.addEventListener('click', imgClicked3);
 