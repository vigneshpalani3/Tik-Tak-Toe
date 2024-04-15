function playerMove(box,index){
  if(spaces[index]==''){
    if(player1Turn){
      box.innerHTML = '<img src="styles/images/x.png" alt="">';
      spaces[index] = 'X';
      player1Turn = false;
      player2Turn = true;
      checkVictory();
      setTimeout(()=>{
        isRunning && winningMove();
      },500);
    }
  }
}

function winningMove(){
  let canWin = false;
  for(let i=0;i<winningPossibility.length;i++){
    let empty = [];
    let oCount = 0;
    winningPossibility[i].forEach(n=>{
      if(spaces[n]=='O'){
        ++oCount;
      }else if(spaces[n]==''){
        empty.push(n);
      }
    });
    console.log(oCount+' '+empty);
    if(oCount==2 && empty.length==1){
      console.log('winning move');
      canWin=true;
      makeMove(empty[0]);
      checkVictory();
      break;
    }
  }
  if(!canWin){
    console.log('counter move');
    counterMove();
  }
}

function counterMove(){
  let isConterNeed=false;
  for(let i=0;i<winningPossibility.length;i++){
    let emptySpace;
    let xCount=0;
    winningPossibility[i].forEach(n=>{
      if(spaces[n]=='X'){
        ++xCount;
      }
      else if(spaces[n]==''){
        emptySpace=n;
      }
    });
    if(xCount==2 && emptySpace){
      isConterNeed = true;
      makeMove(emptySpace);
      break;
    }
  }
  if(!isConterNeed){
    freeMove();
  }
  checkVictory();
}

function makeMove(index){
  boxes[index].innerHTML='<img src="styles/images/o.png" alt="">';
  spaces[index]='O';
  player1Turn=true;
  player2Turn=false;
}

function freeMove(){
  let canWin =  false;
  for(let i=0;i<winningPossibility.length;i++){
    let empty = [];
    let oCount = 0;
    winningPossibility[0].forEach(n=>{
      if(spaces[n]=='O'){
        ++oCount;
      }else if(spaces[n]==''){
        empty.push(n);
      }
    });
    if(oCount==1 && empty.length==2){
      makeMove(empty[0]);
      canWin=true;
    }
  }
  if(!canWin){
    let random;
    while(true){
      random =  Math.floor(Math.random()*9);
      if(spaces[random]==''){
        makeMove(random);
        break;
      }
    }
  }
}
