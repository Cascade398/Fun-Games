var level = 64;
var n = 10;
var tiles = document.querySelectorAll(".square");
var mines = [];


for(var i=0;i<tiles.length;i++){
  tiles[i].addEventListener("click",function(){
    this.style.backgroundColor = "#CCCCCC";
    this.textContent = "2";
  });
}

for(var i=0;i<n;i++){
  mines.push(Math.floor(Math.random()*81));
}
