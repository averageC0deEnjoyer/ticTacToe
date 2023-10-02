const playerFactory = (name, mark) => {
    
    const sayHi = () => {
        return `my name is ${name}!`
    }

    const getMark = () => {
        return mark;
    }

    const getName = () => {
        return name;
    }
    
    return { sayHi, getMark, getName };
}




const gameBoard = (() => {
    
    board = ["","","","","","","","",""]; //set as private , so have to use method to change the board state

    const setBoard = (index, mark) => { //to set board
        board[index] = mark;
    } 

    const getBoard = (index) => { //to set every cell in the DOM Board
        return board[index];
    }

    const resetBoard = (index) => {
        board[index] = ""
    }

    const currentBoardState = () => {
        return board;
    }

    return {setBoard, getBoard, resetBoard, currentBoardState}
})(); 



const DOMGameBoard = (() => {
    let body = document.body;
    divBody = document.createElement('div');
    body.append(divBody);
    divBody.classList.add('div-body');
    let divChild;
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

    const getDivBody = () => {
        return divBody;
    }

    const getDivResult = () => {
        return divResult;
    }

    const getResetButton = () => {
        return resetBtn;
    }

    return {getDivBody, getDivResult, getResetButton}
})();



const gameController = (() => {
    let winnerBool = 0 //or can use round already 9 to check if draw
    let player1Turn = 1;
    let player2Turn = 0;
    let gameRun = 1;
    let divBody = DOMGameBoard.getDivBody(); 
    let divResult = DOMGameBoard.getDivResult();
    let resetBtn = DOMGameBoard.getResetButton();

    const player1 = playerFactory('jeff','X');
    const player2 = playerFactory('bob','O');

    
    
    const winChecker = (gameboard) => {
        if ((gameboard[0] == 'X' && gameboard[1] == 'X' && gameboard[2] == 'X') ||
            (gameboard[3] == 'X' && gameboard[4] == 'X' && gameboard[5] == 'X') ||
            (gameboard[6] == 'X' && gameboard[7] == 'X' && gameboard[8] == 'X') ||
            (gameboard[0] == 'X' && gameboard[3] == 'X' && gameboard[6] == 'X') ||
            (gameboard[1] == 'X' && gameboard[4] == 'X' && gameboard[7] == 'X') ||
            (gameboard[2] == 'X' && gameboard[5] == 'X' && gameboard[8] == 'X') ||
            (gameboard[0] == 'X' && gameboard[4] == 'X' && gameboard[8] == 'X') ||
            (gameboard[2] == 'X' && gameboard[4] == 'X' && gameboard[6] == 'X')) { 
                winnerBool = 1;
                gameRun = 0;
                divResult.textContent = player1.getName() + ' win';
        } else if (
            (gameboard[0] == 'O' && gameboard[1] == 'O' && gameboard[2] == 'O') ||
            (gameboard[3] == 'O' && gameboard[4] == 'O' && gameboard[5] == 'O') ||
            (gameboard[6] == 'O' && gameboard[7] == 'O' && gameboard[8] == 'O') ||
            (gameboard[0] == 'O' && gameboard[3] == 'O' && gameboard[6] == 'O') ||
            (gameboard[1] == 'O' && gameboard[4] == 'O' && gameboard[7] == 'O') ||
            (gameboard[2] == 'O' && gameboard[5] == 'O' && gameboard[8] == 'O') ||
            (gameboard[0] == 'O' && gameboard[4] == 'O' && gameboard[8] == 'O') ||
            (gameboard[2] == 'O' && gameboard[4] == 'O' && gameboard[6] == 'O')) {
                winnerBool = 1;
                gameRun = 0;
                divResult.textContent = player2.getName() + ' win';
        }
    }

    const drawChecker = (gameboard) => {
        if (gameboard[0]!="" &&
            gameboard[1]!="" &&
            gameboard[2]!="" &&
            gameboard[3]!="" &&
            gameboard[4]!="" &&
            gameboard[5]!="" &&
            gameboard[6]!="" &&
            gameboard[7]!="" &&
            gameboard[8]!="" &&
            winnerBool == 0) {
                divResult.textContent = 'draw';
                gameRun = 0;
            }
    }

    //addEventListener isworking because already instantiated using IIFE
    resetBtn.addEventListener('click', ()=> {
    
        if(gameRun == 0){
            for(let i = 0; i < divBody.children.length ; i++){
                gameBoard.resetBoard(i);
                divBody.children[i].innerText = gameBoard.getBoard(i); // use the data from array as an anchor, 
            }
            divResult.textContent = ""
            winnerBool = 0;
            player1Turn = 1;
            player2Turn = 0;
            gameRun = 1;
        }
    })


    divBody.addEventListener('click',(event) => {
        console.log(event.target);
        if(event.target.classList.contains('cell')) {
            if(player1Turn === 1 && gameBoard.getBoard(event.target.getAttribute('data-value')) === "" && winnerBool === 0) {
                gameBoard.setBoard(event.target.getAttribute('data-value'), player1.getMark());
                event.target.textContent = gameBoard.getBoard(event.target.getAttribute('data-value'));
                player1Turn = 0;
                player2Turn = 1;
                winChecker(gameBoard.currentBoardState());
                drawChecker(gameBoard.currentBoardState());
        } else if (player2Turn === 1 && gameBoard.getBoard(event.target.getAttribute('data-value')) === "" && winnerBool === 0){
                gameBoard.setBoard(event.target.getAttribute('data-value'), player2.getMark());
                event.target.textContent = gameBoard.getBoard(event.target.getAttribute('data-value'));
                player1Turn = 1;
                player2Turn = 0;
                winChecker(gameBoard.currentBoardState());
                drawChecker(gameBoard.currentBoardState());
        }
    }
    })
})()







