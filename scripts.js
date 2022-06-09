let playerScore = 0
let computerScore = 0







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
    } if ((playerSelection === 'Rock' && computerSelection === 'Scissors' ) ||
          (playerSelection === 'Paper' && computerSelection === 'Rock') ||
          (playerSelection === 'Scissors' && computerSelection === 'Paper')){
              playerScore++
          
    } if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
          (computerSelection === 'Paper' && playerSelection === 'Rock') ||
          (computerSelection === 'Scissors' && playerSelection === 'Paper')) 
              computerScore++
    }
    



    
 





// This function prompts the user for a selection of either rock, paper, or scissors and then inputs it in the playRound function

function game () {
    let playerSelection = prompt ('Rock, Paper, or Scissors?');
    let computerSelection = computerPlay();
    console.log(`Player has chosen ${playerSelection} and the computer has chosen ${computerSelection}`)
    return(playRound(playerSelection, computerSelection));
    
    

}






// This function plays the round 5 times. 

for (let i = 1; i <= 5; i++) {
    game()
    console.log(playerScore)
    console.log(computerScore)
    
    }

    if (playerScore > computerScore){
        console.log('The player wins')
    }else if (playerScore = computerScore) {
        console.log('It is a tie!')    
    }else if (playerScore < computerScore){
        console.log('The computer wins!')
    }
