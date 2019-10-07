var canvas = document.getElementById("canvas");
var game = canvas.getContext("2d");

var length = 3;
var tail = length;
var left = false;
var right = false;
var up = false;
var down = false;
var x = 380;
var y = 280;
var size = 20;
var shiftX = 0;
var shiftY = 0;
var foodX = 0;
var foodY = 0;
var snake = []

document.addEventListener("keydown", keyDown, false);

function keyDown(e) {
  switch (e.keyCode) {
    case 37:
      shiftX = -1;
      shiftY = 0;
      break;
    case 38:
      shiftX = 0;
      shiftY = -1;
      break;
    case 39:
      shiftX = 1;
      shiftY = 0;
      break;
    case 40:
      shiftX = 0;
      shiftY = 1;
      break;
  }
}




function food(){
  game.beginPath();
  game.rect(foodX,foodY,size,size);
  game.fillStyle = "#DD0000";
  game.fill();
  game.closePath();
}

function block(){
  game.beginPath();
  game.rect(x,y,size,size);
  game.fillStyle = "#0095DD";
  game.fill();
  game.closePath();
}

function draw(){
  game.clearRect(0, 0, canvas.width, canvas.height);
  block();
  food()
  x = x + shiftX;
  y = y + shiftY;
}

var interval = setInterval(draw, 5);
