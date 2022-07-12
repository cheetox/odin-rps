function computerPlay(){
    let choices=['Rock','Paper','Scissors'];
    let which=Math.floor(Math.random()*3);
    return choices[which];
}

function singleRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if((playerSelection===computerSelection)){
        return "It's a tie!";
    }
    else if((playerSelection==='rock' && computerSelection==='paper')||(playerSelection==='paper'&& computerSelection==='scissors')||(playerSelection==='scissors' && computerSelection==='rock')){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else{
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        playerSelection=prompt('Rock, paper, scissors?');
        computerSelection=computerPlay();
        console.log(singleRound(playerSelection,computerSelection));        
    }
}