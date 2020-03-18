
let playerSelection = '';
let computerSelection = ''; 
let computerWin = 0;
let playerWin = 0;
let para = document.getElementById('player');
let computer = document.getElementById('computer');
        

function playerPlay () {
   
   playerSelection =   (prompt('Write your choice\nROCK - PAPER - SCISSORS')).toUpperCase();
    if (playerSelection == 'ROCK' || playerSelection == 'SCISSORS' || playerSelection == 'PAPER' ) {
        return playerSelection;
        
    } 
    else {
        return restart ();
    }
}

function computerPlay (random) {

let result = Math.floor(Math.random() * Math.floor(random));
computerSelection = ( result === 0 ) ? 'ROCK' :
( result === 1 ) ? 'PAPER' :
( result === 2 ) ? 'SCISSORS' :
'NaN' ;
alert (`Computer choose = ${computerSelection}`) ;
return computerSelection;

}

function restart () {
    alert ('INVALID INPUT!\nchoose between ROCK - PAPER - SCISSORS');
    return console.log (playerPlay());
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        ++playerWin;
        return alert ('You won! ROCK beats SCISSORS');

    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        ++computerWin;
        return alert ('You Lose! ROCK beats SCISSORS');
    }
    else {
        if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
            ++playerWin;
            return alert ('You won! SCISSORS beats PAPER');
        }
        else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
            ++computerWin;
            return alert ('You Lose! SCISSORS beats PAPER');
        }
        
        else {
            if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
                ++playerWin;
                return alert ('You won! PAPER beats ROCK');
            }
            else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
                ++computerWin;
                return alert ('You Lose! PAPER beats ROCK');
            }
            else {
                return alert (`It's a tie! \ ${playerSelection} = ${computerSelection}`);
            
            }
            }
        }

}

    /*
    if (playerSelection == computerSelection) {
        alert (`you played ${playerSelection} and machine played ${computerSelection} \ It's a TIE!`)

    }
    */

function startGame() {
        
        console.log (`You choose = ${playerPlay()}`);
        console.log (`Computer choose = ${computerPlay(3)}`);
        console.log (playRound(playerSelection, computerSelection));
        console.log (`YOUR SCORE = ${playerWin}`);
        console.log (`COMPUTER SCORE = ${computerWin}`);
        para.textContent = `PLAYER SCORE = ${playerWin}`;
        computer.textContent = `COMPUTER SCORE = ${computerWin}`;
        return game();
        
}
    
function game() {
    if (playerWin == 3 || computerWin == 3) {

        
        if (playerWin > computerWin) {
        alert ("YOU WIN!");
        }
        else {
        alert ('COMPUTER WINS');
        }
    }
    
    else if (playerWin < 3 && computerWin < 3) {
        startGame();
    }

    else if (playerWin > computerWin) {
        alert ("YOU WIN!");
    }
    else {
        alert ('COMPUTER WINS');
    }
    
}