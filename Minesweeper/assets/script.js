var col = 8;
var row = 8;
var level = col*row;
var n = 10;
var tiles = document.querySelectorAll(".square");
var mines = [];

var mine = document.createAttribute("data-mine");

function addmines(){
  for(var i=0;i<n;i++){
    mines.push(Math.floor(Math.random()*level));
    tiles[mines[i]].status = 0;
  }
}

function click(){
  for(var i=0;i<level;i++){
    tiles[i].addEventListener("click",clickCell);
  }
}

function clickCell(e){
  if(this.status == 0){
    this.style.backgroundColor = "#DD0000";
  }else{
    this.style.backgroundColor = "#CCCCCC";
  }
}

function generate(){
  for(var i=0;i<level;i++){
    tiles[i] = { status: 1 };
  }
  addmines();
}




generate();
click();

