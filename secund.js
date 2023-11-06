const score0E1=document.querySelector("#score-0");
const score1E1=document.querySelector("#score-1");
const dice1 =document.querySelector("#dice1");
const dice2 =document.querySelector("#dice2");
const btnRoll=document.querySelector(".btn-roll");
const btnHold=document.querySelector(".btn-hold ");
const current0E1=document.querySelector("#current-0");
const current1E1=document.querySelector("#current-1");
dice1.classList.add("hidden");
dice2.classList.add("hidden");
score0E1.textContent=0;
score1E1.textContent=0;
let courentScore=0;
let activeplayer=0;
let diceRandom1=0;
let diceRandom2=0;
let sorce=[0,0];
let max=localStorage.getItem('max');


btnRoll.addEventListener("click",(e)=>
{
dice1.classList.remove("hidden");
dice2.classList.remove("hidden");
let diceRandom1=Math.floor(Math.random()*6)+1;
let diceRandom2=Math.floor(Math.random()*6)+1;
dice1.src=`dice-${diceRandom1}.png`;
dice2.src=`dice-${diceRandom2}.png`;
if(diceRandom1 == 6 && diceRandom2 ==6 )
{

 document.querySelector(`#current-${activeplayer}`).textContent=0;    
  if(activeplayer==0)
{

    document.getElementById('dice1').classList.add("hidden");
    document.getElementById('dice2').classList.add("hidden");
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); 
    activeplayer=1 
    courentScore=0; 
}
  else
{        
    
    document.getElementById('dice1').classList.add("hidden");
    document.getElementById('dice2').classList.add("hidden");
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); 
    activeplayer=0;
    courentScore=0; 
}



}
else
{
   
    let allRandom=diceRandom1+diceRandom2;

    courentScore+=allRandom;
    document.querySelector(`#current-${activeplayer}  `).textContent=courentScore; 
       
   
}


});



btnHold.addEventListener("click",()=>
{

sorce[activeplayer]+=courentScore;
document.querySelector(`#score-${activeplayer}`).textContent=sorce[activeplayer];
const max_scoure=max;

    // Checking if the player won the game
    if (sorce[activeplayer] >= max_scoure) {

        
        document.querySelector('#name-' + activeplayer).textContent = 'Winner!';
  
        // Hiding the dices
        document.getElementById('dice1').classList.add("hidden");
        document.getElementById('dice2').classList.add("hidden");
        // Adding the 'winner' class to the player
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
  
        // Removing the active player status from the winner 
        document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
  
  
      } else {
        
        if(activeplayer==0)
        {
        
            document.getElementById('dice1').classList.add("hidden");
            document.getElementById('dice2').classList.add("hidden");
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active'); 
            activeplayer=1 
            courentScore=0; 
        }
          else
        {        
            
            document.getElementById('dice1').classList.add("hidden");
            document.getElementById('dice2').classList.add("hidden");
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active'); 
            activeplayer=0;
            courentScore=0; 
        }
      }





});


