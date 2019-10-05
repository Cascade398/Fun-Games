var canvas = document.getElementById("canvas");
var game = canvas.getContext("2d");
var points = 0;
var x = canvas.width/2;
var y = canvas.height-30;
var speed = 2;
var rad = 10;
var dx = speed;
var dy = -speed;
var hitWidth = 75;
var hitHeight = 10;
var hitX = (canvas.width - hitWidth)/2;
var left = false;
var right = false;
var blockOffesetLeft = 30;
var blockOffesetTop = 30;
var blockWidth = 60;
var blockHeight = 20;
var blockRow = 4;
var blockCol = 8;
var blockPadding = 10;
var blocks = [];
for(var i=0; i<blockCol;i++){
  blocks[i] = [];
  for(var j=0; j<blockRow; j++){
    blocks[i][j] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(e) {
  if(e.key == "Left" || e.key == "ArrowLeft"){
    left = true;
  }
  if(e.key == "Right" || e.key == "ArrowRight"){
    right = true;
  }
}

function keyUp(e) {
  if(e.key == "Left" || e.key == "ArrowLeft"){
    left = false;
  }
  if(e.key == "Right" || e.key == "ArrowRight"){
    right = false;
  }
}

function ball() {
    game.beginPath();
    game.arc(x, y, rad, 0, Math.PI*2);
    game.fillStyle = "#0095DD";
    game.fill();
    game.closePath();
}

function hitter() {
  game.beginPath();
  game.rect(hitX, canvas.height-hitHeight, hitWidth, hitHeight);
  game.fillStyle = "#0095DD";
  game.fill();
  game.closePath();
}

function block() {
  for(var i=0;i<blockCol;i++){
    for(var j=0;j<blockRow;j++){
      if(blocks[i][j].status == 1){
        var blockX = blockOffesetLeft + (i*(blockPadding + blockWidth));
        var blockY = blockOffesetTop  + (j*(blockPadding + blockHeight));
        blocks[i][j].x = blockX;
        blocks[i][j].y = blockY;
        game.beginPath();
        game.rect(blockX,blockY,blockWidth,blockHeight);
        game.fillStyle = "#0095DD";
        game.fill();
        game.closePath();
      }
    }
  }
}

function collision() {
  for(var i=0;i<blockCol;i++){
    for(var j=0;j<blockRow;j++){
      var b = blocks[i][j];
      if(b.status==1){
        if((x+rad > b.x && x-rad < b.x + blockWidth)&&(y+rad > b.y && y-rad < b.y + blockHeight)){
          dy = -dy;
          b.status = 0;
          points++;
          if(points == blockCol*blockRow){
            alert("YOU WON!");
            document.location.reload();
            clearInterval(interval);
          }
        }
      }
    }
  }
}

function score() {
  game.font = "16px Arial";
  game.fillStyle = "#0095DD";
  game.fillText("Score: "+ points, 8, 20);
}

function draw() {
    game.clearRect(0, 0, canvas.width, canvas.height);
    ball();
    hitter();
    collision();
    score();
    block();
    if(x + dx >canvas.width - rad || x + dx < rad){
      dx = -dx;
    }
    if(y + dy < rad){
      dy = -dy;
    }else if(y + dy > canvas.height - rad){
      if(x > hitX && x < hitX + hitWidth){
        dy = -dy;
      }else{
        document.loaction.reload();
        clearInterval(interval);
      }
    }
    if(right){
      hitX += 5;
      if(hitX + hitWidth > canvas.width){
        hitX = canvas.width - hitWidth;
      }
    }else if(left){
      hitX -= 5;
      if(hitX <= 0){
        hitX = 0;
      }
    }
    x += dx;
    y += dy;
}

var interval = setInterval(draw, 10);
