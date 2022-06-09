// This function will randomly select either rock, paper, or scissors

function computerPlay() {
    const number = Math.random() * 100
    if (number <= 33) {
        return('Rock')
    }   else if (number > 33 && number <= 66) {
        return('Paper')
    }   else {
        return('Scissors')
    }
}

//  This function put the play selection up against the computer selection from the computerPlay function

function playRound (playerSelection, computerSelection){
    if ( playerSelection === computerSelection ) {
    return('tie!')
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return('Rock loses to Paper!')
    }  else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return ('Rock beats Scissors')
    }   else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return ('Paper loses to Scissors')
    }   else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return ('Paper beats Rock')
    }   else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return ('Scissors loses to Rock')
    }   else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return ('Scissors beats Paper')
    } 
}
 





// This function prompts the user for a selection of either rock, paper, or scissors and then inputs it in the playRound function

function game () {
    let playerSelection = prompt ('Rock, Paper, or Scissors?');
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    

}






// This function plays the round 5 times. 

for (let i = 1; i <= 5; i++) {
    game()
}
