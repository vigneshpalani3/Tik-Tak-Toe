const autoPlayBtn = document.querySelector('#autoPlay');

autoPlayBtn.addEventListener('click',()=>{
  window.location.href = 'mode-auto.html';
});

function playerMove(box,index){
  if(spaces[index]==''){
    if(player1Turn){
      box.innerHTML = '<img src="styles/images/x.png" alt="">';
      spaces[index] = 'X';
      player1Turn=false;
      player2Turn=true;
      checkVictory();
    }
    else{
      box.innerHTML = '<img src="styles/images/o.png" alt="">';
      spaces[index] = 'O';
      player1Turn=true;
      player2Turn=false;
      checkVictory();
    }
  }
}