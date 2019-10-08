var squares = document.querySelectorAll(".square");
var player = 1;
var turn = 1;

// pieces
{
var bRook1;
var bRook2;
var bKnight1;
var bKnight2;
var bBishop1;var bBishop2;
var bQueen;
var bKing;
var wRook1;
var wRook2;
var wKnight1;
var wKnight2;
var wBishop1;
var wBishop2;
var wQueen;
var wKing;
var bPawn1;
var bPawn2;
var bPawn3;
var bPawn4;
var bPawn5;
var bPawn6;
var bPawn7;
var bPawn8;
var wPawn1;
var wPawn2;
var wPawn3;
var wPawn4;
var wPawn5;
var wPawn6;
var wPawn7;
var wPawn8;
}

function board(){
  for(var i=0;i<64;i++){
    var x = Math.floor(i/8);
    if(x%2==0){
      if(i%2!=0){
        squares[i].style.backgroundColor = "#0303EE";
      }else{
        squares[i].style.backgroundColor = "#03AAFF";
      }
    }else{
      if(i%2==0){
        squares[i].style.backgroundColor = "#0303EE";
      }else{
        squares[i].style.backgroundColor = "#03AAFF";
      }
    }
  }
}

function initial(){
  if(player == 0){
    wRook1 = 0;
    wRook2 = 7;
    wKnight1 = 1;
    wKnight2 = 6;
    wBishop1 = 2
    wBishop2 = 5;
    wQueen = 4;
    wKing = 3;

    bRook1 = 56;
    bRook2 = 63;
    bKnight1 = 57;
    bKnight2 = 62;
    bBishop1 = 58;
    bBishop2 = 61;
    bQueen = 60;
    bKing = 59;

    wPawn1 = 8;
    wPawn2 = 9;
    wPawn3 = 10;
    wPawn4 = 11;
    wPawn5 = 12;
    wPawn6 = 13;
    wPawn7 = 14;
    wPawn8 = 15;

    bPawn1 = 48;
    bPawn2 = 49;
    bPawn3 = 50;
    bPawn4 = 51;
    bPawn5 = 52;
    bPawn6 = 53;
    bPawn7 = 54;
    bPawn8 = 55;
  }else{
    bRook1 = 0;
    bRook2 = 7;
    bKnight1 = 1;
    bKnight2 = 6;
    bBishop1 = 2
    bBishop2 = 5;
    bQueen = 3;
    bKing = 4;

    wRook1 = 56;
    wRook2 = 63;
    wKnight1 = 57;
    wKnight2 = 62;
    wBishop1 = 58;
    wBishop2 = 61;
    wQueen = 59;
    wKing = 60;

    bPawn1 = 8;
    bPawn2 = 9;
    bPawn3 = 10;
    bPawn4 = 11;
    bPawn5 = 12;
    bPawn6 = 13;
    bPawn7 = 14;
    bPawn8 = 15;

    wPawn1 = 48;
    wPawn2 = 49;
    wPawn3 = 50;
    wPawn4 = 51;
    wPawn5 = 52;
    wPawn6 = 53;
    wPawn7 = 54;
    wPawn8 = 55;
  }
}

function setup(){
  if(bRook1!=-1){
    squares[bRook1].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-rook black"></i>');
  }
  if(bRook2!=-1){
    squares[bRook2].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-rook black"></i>');
  }
  if(bKnight1!=-1){
    squares[bKnight1].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-knight black"></i>');
  }
  if(bKnight2!=-1){
    squares[bKnight2].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-knight black"></i>');
  }
  if(bBishop1!=-1){
    squares[bBishop1].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-bishop black"></i>');
  }
  if(bBishop2!=-1){
    squares[bBishop2].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-bishop black"></i>');
  }
  if(bQueen!=-1){
    squares[bQueen].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-queen black"></i>');
  }
  if(bKing!=-1){
    squares[bKing].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-king black"></i>');
  }

  if(bPawn1!=-1){
    squares[bPawn1].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn black"></i>');
  }
  if(bPawn2!=-1){
    squares[bPawn2].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn black"></i>');
  }
  if(bPawn3!=-1){
    squares[bPawn3].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn black"></i>');
  }
  if(bPawn4!=-1){
    squares[bPawn4].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn black"></i>');
  }
  if(bPawn5!=-1){
    squares[bPawn5].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn black"></i>');
  }
  if(bPawn6!=1){
    squares[bPawn6].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn black"></i>');
  }
  if(bPawn7!=1){
    squares[bPawn7].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn black"></i>');
  }
  if(bPawn8!=1){
    squares[bPawn8].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn black"></i>');
  }


  if(wRook1!=-1){
    squares[wRook1].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-rook white"></i>');
  }
  if(wRook2!=-1){
    squares[wRook2].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-rook white"></i>');
  }
  if(wKnight1!=-1){
    squares[wKnight1].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-knight white"></i>');
  }
  if(wKnight2!=-1){
    squares[wKnight2].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-knight white"></i>');
  }
  if(wBishop2!=-1){
    squares[wBishop1].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-bishop white"></i>');
  }
  if(wBishop2!=-1){
    squares[wBishop2].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-bishop white"></i>');
  }
  if(wQueen!=-1){
    squares[wQueen].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-queen white"></i>');
  }
  if(wKing!=-1){
    squares[wKing].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-king white"></i>');
  }

  if(wPawn1!=-1){
    squares[wPawn1].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn white"></i>');
  }
  if(wPawn2!=-1){
    squares[wPawn2].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn white"></i>');
  }
  if(wPawn3!=-1){
    squares[wPawn3].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn white"></i>');
  }
  if(wPawn4!=-1){
    squares[wPawn4].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn white"></i>');
  }
  if(wPawn5!=-1){
    squares[wPawn5].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn white"></i>');
  }
  if(wPawn6!=-1){
    squares[wPawn6].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn white"></i>');
  }
  if(wPawn7!=-1){
    squares[wPawn7].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn white"></i>');
  }
  if(wPawn8!=-1){
    squares[wPawn8].insertAdjacentHTML('afterbegin','<i class="fas fa-chess-pawn white"></i>');
  }
}


initial();
board();
setup();
turn++;
