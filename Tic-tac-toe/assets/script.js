var squares = document.querySelectorAll(".square");
var turn = 1;
var board =[];

init();

function changeTurn(){
    if(turn == 1){
        turn = 2;
    }else{
        turn = 1;
    }
}

function setStatus(){
    for(var i=0;i<9;i++){
        squares[i] = {status: 0};
        squares[i].status = 0;
    }
}

function clicked(){
    for(var i=0;i<9;i++){
        squares[i].addEventListener("click", function(){
            if(this.status == 0){
                this.status = turn;
                if(turn == 1){
                    this.insertAdjacentHTML('afterbegin','<i class="fas fa-times"></i>');
                }
                if(turn == 2){
                    this.insertAdjacentHTML('afterbegin','<i class="far fa-circle"></i>');
                }
                changeTurn();
                updateBoard();
                check();
            }
        });
    }
}

function updateBoard(){
    for(var i=0;i<9;i++){
        board[i] = squares[i].status;
    }
}

function check(){
    // 0--1--2
    checkBoard(0, 1, 2);
    // 3--4--5
    checkBoard(3, 4, 5);
    // 6--7--8
    checkBoard(6, 7, 8);
    // 0--4--8
    checkBoard(0, 4, 8);
    // 2--4--6
    checkBoard(2, 4, 6);
    // 0--3--6
    checkBoard(0, 3, 6);
    // 1--4--7
    checkBoard(1, 4, 7);
    // 2--5--8
    checkBoard(2, 5, 8);
}

function checkBoard(i, j, k){
    if((board[i]==board[j])&&(board[j]==board[k])){
        if(board[i]!=0){
            squares[i].style.backgroundColor = "rgb(255, 0 ,0)";
            squares[j].style.backgroundColor = "rgb(255, 0 ,0)";
            squares[k].style.backgroundColor = "rgb(255, 0 ,0)";
            ending();
        }
    }
}

function init(){
    setStatus();
    updateBoard();
    clicked();
}

function ending(){
    for(var i=0;i<9;i++){
        squares[i].status = 3;
    }
}