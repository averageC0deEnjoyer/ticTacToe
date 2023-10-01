let gameBoard = ["","","","","","","","",""]
let winnerBool = 0
let player1Turn = 1;
let player2Turn = 0;
let gameRun = 1;
let divBody;
let divResult;
let resetBtn;

function DOMGameBoard(){
    let body = document.body;
    divBody = document.createElement('div');
    let divChild;
    body.append(divBody);
    divBody.classList.add('div-body');
    for(let i = 0; i < 9; i++){
        divChild = document.createElement('div');
        // divChild.textContent = i;
        divChild.classList.add('cell');
        divChild.setAttribute("data-value",`${i}`)
        divBody.append(divChild);
    }    
    divResult = document.createElement('div');
    divResult.classList.add('result');
    divBody.append(divResult);

    resetBtn = document.createElement('button');
    resetBtn.textContent = 'reset';
    body.append(resetBtn);
}

//check if player already win/not
function winChecker(gameboard){
    if ((gameboard[0] == 'x' && gameboard[1] == 'x' && gameboard[2] == 'x') ||
        (gameboard[3] == 'x' && gameboard[4] == 'x' && gameboard[5] == 'x') ||
        (gameboard[6] == 'x' && gameboard[7] == 'x' && gameboard[8] == 'x') ||
        (gameboard[0] == 'x' && gameboard[3] == 'x' && gameboard[6] == 'x') ||
        (gameboard[1] == 'x' && gameboard[4] == 'x' && gameboard[7] == 'x') ||
        (gameboard[2] == 'x' && gameboard[5] == 'x' && gameboard[8] == 'x') ||
        (gameboard[0] == 'x' && gameboard[4] == 'x' && gameboard[8] == 'x') ||
        (gameboard[2] == 'x' && gameboard[4] == 'x' && gameboard[6] == 'x')) { 
            winnerBool = 1;
            gameRun = 0;
            divResult.textContent = 'player1 win';
    } else if
        ((gameboard[0] == 'o' && gameboard[1] == 'o' && gameboard[2] == 'o') ||
        (gameboard[3] == 'o' && gameboard[4] == 'o' && gameboard[5] == 'o') ||
        (gameboard[6] == 'o' && gameboard[7] == 'o' && gameboard[8] == 'o') ||
        (gameboard[0] == 'o' && gameboard[3] == 'o' && gameboard[6] == 'o') ||
        (gameboard[1] == 'o' && gameboard[4] == 'o' && gameboard[7] == 'o') ||
        (gameboard[2] == 'o' && gameboard[5] == 'o' && gameboard[8] == 'o') ||
        (gameboard[0] == 'o' && gameboard[4] == 'o' && gameboard[8] == 'o') ||
        (gameboard[2] == 'o' && gameboard[4] == 'o' && gameboard[6] == 'o')) {
            winnerBool = 1;
            gameRun = 0;
            divResult.textContent = 'player2 win';
    }
}



function drawChecker(gameboard){
    if(gameboard[0]!="" &&
        gameboard[1]!="" &&
        gameboard[2]!="" &&
        gameboard[3]!="" &&
        gameboard[4]!="" &&
        gameboard[5]!="" &&
        gameboard[6]!="" &&
        gameboard[7]!="" &&
        gameboard[8]!="" &&
        winnerBool == 0){
            divResult.textContent = 'draw';
            gameRun = 0;
        }
}

const playerFactory = (name, mark) => {
    return { name, mark };
}

const player1 = playerFactory('player1','x');
const player2 = playerFactory('player2','o');



DOMGameBoard();
divBody.addEventListener('click',(event) => {
    if(event.target.classList.contains('cell')) {
        if(player1Turn === 1 && event.target.textContent === "" && winnerBool == 0){
        gameBoard[event.target.getAttribute('data-value')] = player1.mark;
        event.target.textContent = player1.mark;
        player1Turn = 0;
        player2Turn = 1;
        winChecker(gameBoard);
        drawChecker(gameBoard);
    } else if(player2Turn === 1 && event.target.textContent === "" && winnerBool == 0){
        gameBoard[event.target.getAttribute('data-value')] = player2.mark;
        event.target.textContent = player2.mark;
        player1Turn = 1;
        player2Turn = 0;
        winChecker(gameBoard);
        drawChecker(gameBoard);
    }
}
})


// console.log(divBody.children[2])
resetBtn.addEventListener('click', ()=> {
    
    if(gameRun == 0){
        for(let i = 0; i < divBody.children.length ; i++){
            divBody.children[i].innerText = "";
        }
        gameBoard = ["","","","","","","","",""];
        winnerBool = 0;
        player1Turn = 1;
        player2Turn = 0;
        gameRun = 1;
    }
})