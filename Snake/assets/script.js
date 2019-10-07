var canvas = document.getElementById("canvas");
var game = canvas.getContext("2d");
var tail = 1;
var left = false;
var right = false;
var up = false;
var down = false;
var size = 20;
var length = (canvas.width)/size;
var breadth = (canvas.height)/size;
var snakeX = length/2;
var snakeY = breadth/2;
var shiftX = 0;
var shiftY = 0;
var foodX = Math.floor(Math.random() * length);
var foodY = Math.floor(Math.random() * breadth);
var snake = []


snake.push({ x:snakeX, y:snakeY});



document.addEventListener("keydown", keyDown, false);

function keyDown(e) {
  if(e.keyCode == 37 && shiftX != 1) {
    shiftX = -1;
    shiftY = 0;
  }else if(e.keyCode == 38 && shiftY != 1) {
    shiftX = 0;
    shiftY = -1;
  }else if(e.keyCode == 39 && shiftX != -1) {
    shiftX = 1;
    shiftY = 0;
  }else if(e.keyCode == 40 && shiftY != -1) {
    shiftX = 0;
    shiftY = 1;
  }
}





function food(){
  game.beginPath();
  game.rect(foodX*size,foodY*size,size,size);
  game.fillStyle = "#DD0000";
  game.fill();
  game.closePath();
}

function serpent(){
  game.beginPath();
  for(var i=0;i<snake.length;i++){
    game.rect(snake[i].x*size,snake[i].y*size,size,size);
    if (snake[i].x == snakeX && snake[i].y == snakeY) {
      tail = 3;
    }
  }
  game.fillStyle = "green";
  game.fill();
  game.closePath();
}

function eat(){
  foodX = Math.floor(Math.random() * length);
  foodY = Math.floor(Math.random() * breadth);
  for(var i=0;i<snake.length;i++){
    if(snake[i].x == foodX && snake[i].y == foodY){
      foodX = Math.floor(Math.random() * length);
      foodY = Math.floor(Math.random() * breadth);
    }else{
      break;
    }
  }
}

function draw(){
  game.clearRect(0, 0, canvas.width, canvas.height);
  snakeX = snakeX + shiftX;
  snakeY = snakeY + shiftY;
  if (snakeX < 0) {
    snakeX = length - 1;
  }
  if (snakeX > length - 1) {
    snakeX = 0;
  }
  if (snakeY < 0) {
    snakeY = breadth - 1;
  }
  if (snakeY > breadth - 1) {
    snakeY = 0;
  }
  if (snakeX == foodX && snakeY == foodY) {
    tail++;
    eat();
  }
  serpent();
  food();
  snake.push({ x: snakeX, y: snakeY });
  while (snake.length > tail) {
    snake.shift();
  }
}

var interval = setInterval(draw, 200);
