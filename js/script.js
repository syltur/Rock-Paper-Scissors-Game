{
    function playGame(playerInput){
        clearMessages();
        const randomNumber = Math.floor(Math.random() * 3 + 1);
            computerMove = getMoveName(randomNumber);
            playerMove = getMoveName(playerInput);

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
    const result = displayResult(computerMove, playerMove); 
}

function imgClicked1(){
    playGame(1);
  }
  const playPaper = document.getElementById('img-paper');
  playPaper.addEventListener('click', imgClicked1);

  function imgClicked2(){
    playGame(2);
  }
  const playRock = document.getElementById('img-rock');
  playRock.addEventListener('click', imgClicked2);

  function imgClicked3(){
    playGame(3);
  }
  const playScissors = document.getElementById('img-scissors');
  playScissors.addEventListener('click', imgClicked3);
}