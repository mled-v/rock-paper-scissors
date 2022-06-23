
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
        document.getElementById("scoreResult").innerHTML = 'Results: Tie!'
     } if ((playerSelection === 'Rock' && computerSelection === 'Scissors' ) ||
          (playerSelection === 'Paper' && computerSelection === 'Rock') ||
          (playerSelection === 'Scissors' && computerSelection === 'Paper')){
              playerScore++
        document.getElementById("playerScore").innerHTML = 'Player score ' + playerScore
        document.getElementById("scoreResult").innerHTML = 'Results: You win! ' + playerSelection + ' beats ' + computerSelection

    } if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
         (computerSelection === 'Paper' && playerSelection === 'Rock') ||
         (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
        computerScore++
        document.getElementById("computerScore").innerHTML = 'Computer score ' + computerScore
        document.getElementById("scoreResult").innerHTML = 'Results: You lose! ' + computerSelection + ' beats ' + playerSelection
    }
} 

function checkWinner (playerScore, computerScore){
    if( playerScore === 5){
        document.getElementById("finalResult").innerHTML = ("Final Result: player wins")
    }if (computerScore === 5) {
        document.getElementById("finalResult").innerHTML = ("Final Result: computer wins")
    }
}

function endGame (){
    if ((playerScore >= 5) || computerScore >= 5) {
        document.getElementById("playerScore").innerHTML = "Player Score: 0"
        document.getElementById("computerScore").innerHTML = "Computer Score: 0"
        playerScore = 0
        computerScore = 0
    }
}   

function addPlayerImage(playerSelection) {
    if (playerSelection === 'Rock'){
        playerRockDisplay.style.display = 'block'
    } else playerRockDisplay.style.display = 'none'

    if (playerSelection === 'Paper') {
        playerPaperDisplay.style.display = 'block'
    } else playerPaperDisplay.style.display = 'none'

    if (playerSelection === 'Scissors') {
        playerScissorDisplay.style.display = 'block'
    } else playerScissorDisplay.style.display = 'none'
}

function addComputerImage(computerSelection) {
    if (computerSelection === "Rock"){
        computerRockDisplay.style.display = 'block'
    } else computerRockDisplay.style.display = 'none'

    if (computerSelection === "Paper"){
        computerPaperDisplay.style.display = 'block'
    } else computerPaperDisplay.style.display = 'none'

    if (computerSelection === "Scissors") {
        computerScissorDisplay.style.display = 'block'
    } else computerScissorDisplay.style.display ='none'
}

// This function prompts the user for a selection of either rock, paper, or scissors and then inputs it in the playRound function

function game () {
    playerScore = 0
    computerScore =0
    const choices = document.querySelectorAll('.rps')
    choices.forEach(choices => choices.addEventListener('click', () => {
    const playerSelection = choices.id
    const computerSelection = computerPlay()
    
    
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
    endGame(playerScore, computerScore)
    addPlayerImage(playerSelection)  
    addComputerImage(computerSelection)
}))
    
}

game()
