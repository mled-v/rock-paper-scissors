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


function playRound (playerSelection, computerSelection){
    if ( (playerSelection === 'Rock' && computerSelection === 'Rock') || 
         (playerSelection === 'Paper' && computerSelection === 'Paper') ||
         (playerSelection === 'Scissors' && computerSelection === 'Scissors') ) {
    return('tie!')
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return('Rock loses to Paper!')
    }  else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return ('Rock beats Scissors')
    }
        


}
const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))