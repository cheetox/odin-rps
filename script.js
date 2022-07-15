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

window.onload=function(){
    let playerScore=0;
    let computerScore=0;
    const scores=document.querySelector('.scores');
    const blocks=document.querySelectorAll('.ch');
    const result=document.createElement('h2');
    const you=document.querySelector('.you');
    const computer=document.querySelector('.computer');
    scores.appendChild(result);

    
    blocks.forEach((block) =>{
        block.addEventListener('click',()=>{
            
            
            
            
            
            const computerSelection=computerPlay();
            const res=singleRound(block.id,computerSelection);
            if(res==0){
                playerScore++;
                result.textContent=`You won! ${block.id} beats ${computerSelection}`;
               
                
            }
            else if(res==1){
                computerScore++;
                result.textContent= `You lost! ${computerSelection} beats ${block.id}`;
                
            }else if(res==2){
                result.textContent="It's a tie!";
                
            } 
            
            if(playerScore===5){
                result.textContent='You WON!';
                scores.appendChild(result);
            }else if(computerScore===5){
                result.textContent='You LOST!';
                
            }
            you.textContent=playerScore;
            computer.textContent=computerScore;
            scores.classList.add('show');
            
        })
    })

};

function game(){
    

    for (let i = 0; i < 5; i++) {
        playerSelection=prompt('Rock, paper, scissors?');
        computerSelection=computerPlay();
        res=(singleRound(playerSelection,computerSelection));
        
    }
    if(playerScore>computerScore){
        console.log('You won!');
    }else if(playerScore<computerScore){
        console.log('You lost!');
    }else{
        console.log('Wow!It\'s a tie!');
    }
}

const controls = document.querySelector('.controls');  


controls.addEventListener('click',()=>{
    console.log('yoo')
})



