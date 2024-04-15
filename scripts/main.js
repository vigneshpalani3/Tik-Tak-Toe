const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset');
const lines = document.querySelectorAll('.line');
const overlay = document.querySelector('.overlay-result');

let isRunning = true;
let player1Turn = true;
let player2Turn = false;
let spaces = ['','','','','','','','',''];
const winningPossibility = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
];

boxes.forEach((box,index)=>{
  box.addEventListener('click',()=>{
    isRunning && playerMove(box,index);
  });
});

resetBtn.addEventListener('click',()=>{
  spaces = ['','','','','','','','',''];
  boxes.forEach(box=>{
    box.innerHTML='';
  });

  lines.forEach((line,index)=>{
    if(index<3){
      line.style.width = '0';
    }
    else{
      line.style.height ='0';
    }
  }); 
  
  overlay.style.transform='translate(-50%,-50%) scale(0)';

  player1Turn = true;
  player2Turn = false;
  isRunning = true;
});

function checkVictory(){
  let isWin=false;
  winningPossibility.forEach((arr,index)=>{
    num1 = spaces[arr[0]]; 
    num2 = spaces[arr[1]]; 
    num3 = spaces[arr[2]]; 
    if(num1!='' && num2!='' && num3 !=''){
      if(num1 === num2 && num1 === num3 && num2 === num3){
        lineStrike(index,num1);
        showResult(num1);
        isRunning=false;
        isWin=true;
      }
    }
  });
  if(!isWin){
    let isEmpty = false;
    spaces.forEach(space=>{
      if(space==''){ 
        isEmpty = true;
      }
    });
    if(!isEmpty){
      isRunning=false;
      showResult('draw');
    }
  }
}

function lineStrike(index,move){
  if(move ==='X'){
    lines[index].style.backgroundColor = 'red';
  }
  else{
    lines[index].style.backgroundColor = 'blue';
  }
  if(index<3){
    lines[index].style.width = '100%';
  }
  else if(index>2 && index<6){
    lines[index].style.height = '100%';
  }
  else{
    lines[index].style.height = '130%';
  }
}
 
function showResult(winner){
  const ect = document.querySelector('#sec');
  const player = document.querySelector('#winner');
  const result = document.querySelector('.result');
  if(winner == 'draw'){
    ect.innerText = 'O';
    player.innerText = 'X';
    result.innerText= 'Draw';
  }
  else{
    ect.innerText = '';
    player.innerText = winner;
    result.innerText = 'Winner';
  }
  setTimeout(()=>{
    overlay.style.transform = 'translate(-50%,-50%) scale(1)';
  },500);
}