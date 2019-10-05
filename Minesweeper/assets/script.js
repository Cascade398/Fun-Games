var col = 8;
var row = 8;
var level = col*row;
var n = 10;
var tiles = document.querySelectorAll(".square");
var mines = [];
var stat = [];

function generate(){
  for(var i=0;i<level;i++){
    tiles[i] = { status: 1 };
    tiles[i].status = 1;
  }
  addmines();
  check();
  for(var i=0;i<level;i++){
    stat.push(tiles[i].status);
  }
}

function addmines(){
  for(var i=0;i<n;i++){
    mines.push(Math.floor(Math.random()*level));
    tiles[mines[i]].status = -1;
  }
}

function check(){
  for(var i=0;i<level;i++){
    if(tiles[i].status != -1){
      var count = 0;
      var r = Math.floor(i/row);
      var c = i%col;
      for(var m=Math.max(0,r-1);m<=Math.min(r+1,7);m++){
        for(var n=Math.max(0,c-1);n<=Math.min(7,c+1);n++){
          if(tiles[(m*8)+n].status == -1){
            count = count+1;
          }
        }
      }
      tiles[i].status = count;
    }
  }
}


function click(){
  for(var i=0;i<level;i++){
    tiles[i].addEventListener("click",clickCell);
  }
}

function clickCell(i){
  if(this.status == -1){
    this.style.backgroundColor = "#DD0000";
  }else{
    this.style.backgroundColor = "#CCCC";
    this.textContent = this.status;
  }
}



generate();
click();
