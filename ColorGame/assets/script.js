var level = 6;

var colors = genColors(level);
var squares = document.querySelectorAll(".square");
var picked = Math.floor(Math.random()*level);
var display = document.getElementById("display");
var mess =  document.querySelector("#mess");
var head = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");

display.textContent = colors[picked];

resetBtn.addEventListener("click", function(){
  resetBtn.textContent = "New Colors";
  colors = genColors(level);
  picked = Math.floor(Math.random()*level);
  display.textContent = colors[picked];
  for(var i=0;i<level;i++){
    squares[i].style.backgroundColor = colors[i];
  }
  mess.textContent = "";
  head.style.backgroundColor = "steelblue";
});



easy.addEventListener("click", function(){
  easy.classList.add("selected");
  medium.classList.remove("selected");
  hard.classList.remove("selected");
  level = 3;
  colors = genColors(level);
  picked = Math.floor(Math.random()*level);
  display.textContent = colors[picked];
  for(var i=0;i<squares.length;i++){
    if(i<level){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.backgroundColor = "#232323";
    }
  }
  mess.textContent = "";
  head.style.backgroundColor = "steelblue";
});

medium.addEventListener("click", function(){
  easy.classList.remove("selected");
  medium.classList.add("selected");
  hard.classList.remove("selected");
  level = 6;
  colors = genColors(level);
  picked = Math.floor(Math.random()*level);
  display.textContent = colors[picked];
  for(var i=0;i<squares.length;i++){
    if(i<level){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.backgroundColor = "#232323";
    }
  }
  mess.textContent = "";
  head.style.backgroundColor = "steelblue";
});

hard.addEventListener("click", function(){
  easy.classList.remove("selected");
  medium.classList.remove("selected");
  hard.classList.add("selected");
  level = 9;
  colors = genColors(level);
  picked = Math.floor(Math.random()*level);
  display.textContent = colors[picked];
  for(var i=0;i<squares.length;i++){
    if(i<level){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.backgroundColor = "#232323";
    }
  }
  mess.textContent = "";
  head.style.backgroundColor = "steelblue";
});


  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clicked = this.style.backgroundColor;
      if(clicked === colors[picked]){
        mess.textContent = "Correct!";
        changeColors(clicked);
        head.style.backgroundColor = clicked;
        reset.textContent = "Play Again?";
      }else{
        this.style.backgroundColor = "#232323";
        mess.textContent = "Try again!";
      }
    });
  }


function changeColors(color){
  for(var i=0;i<level;i++){
    squares[i].style.backgroundColor = color;
  }
}

function genColors(n){
  var arr = [];
  for(var i=0;i<n;i++){
    arr.push("rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")");
  }
  return arr;
}
