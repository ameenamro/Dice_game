         
     let max_scoure=0;
    const number_win=document.querySelector("#winningScore");
    const start_game=document.querySelector(".secound");
    number_win.addEventListener("input", (e) => {
        e.preventDefault();
      max_scoure= e.target.value;

      if (max_scoure>2)
      {
        start_game.removeAttribute("disabled", false);  
      }
      

      if (max_scoure == 0 ) {
        start_game.setAttribute("disabled", true);
        
      }



      
    });

    console.log(max_scoure);
  
  start_game.addEventListener("click",()=>
  {
    
console.log(max_scoure);
localStorage.setItem('max', max_scoure);
    window.location.href="secund.html";
  });













