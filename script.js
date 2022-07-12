function computerPlay(){
    let choices=['Rock','Paper','Scissors'];
    let which=Math.floor(Math.random()*3);
    return choices[which];
}

function singleRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if((playerSelection===computerSelection)){
        return 2;
    }
    else if((playerSelection==='rock' && computerSelection==='paper')||(playerSelection==='paper'&& computerSelection==='scissors')||(playerSelection==='scissors' && computerSelection==='rock')){
       
        return 1;
    }
    else{
        res=true;
        return 0;
        
    }
}

function game(){
    let playerScore=0;
    let computerScore=0;

    for (let i = 0; i < 5; i++) {
        playerSelection=prompt('Rock, paper, scissors?');
        computerSelection=computerPlay();
        res=(singleRound(playerSelection,computerSelection));
        if(res==0){
            playerScore++;
            console.log( `You won! ${playerSelection} beats ${computerSelection}`);
        }
        else if(res==1){
            computerScore++;
            console.log( `You lost! ${computerSelection} beats ${playerSelection}`);
        }else if(res==2){
            console.log("It's a tie!")
        }        
    }
    if(playerScore>computerScore){
        console.log('You won!');
    }else if(playerScore<computerScore){
        console.log('You lost!');
    }else{
        console.log('Wow!It\'s a tie!');
    }
}