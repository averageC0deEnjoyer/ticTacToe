    let gameBoard = ["","","","","","","","",""]

    let winnerBool = 0

    let player1Turn = 1;
    let player2Turn = 0;

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
                console.log('player1 wins!')
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
                console.log('player2 wins!')
        }
    }


    //check if the cell already contain a mark
    function cellChecker(gameboard){
        for(let i=0; i<gameboard.length; i++){
            if(gameboard[i]!="") {return};
        }
    }

    const playerFactory = (name, mark) => {
        return { name, mark };
    }

    const player1 = playerFactory('player1','x');
    const player2 = playerFactory('player2','o');

    function game(){
        while(!winnerBool) {
            if(player1Turn == 1){
                let markLocationPlayer1 = prompt('player 1 where to put your mark?');
                gameBoard[markLocationPlayer1] = player1.mark;
                player1Turn = 0;
                player2Turn = 1;
                console.log(gameBoard);
                winChecker(gameBoard);
            } else if (player2Turn == 1) {
                markLocationPlayer2 = prompt('player 2 where to put your mark?');
                gameBoard[markLocationPlayer2] = player2.mark;
                player1Turn = 1;
                player2Turn = 0;
                console.log(gameBoard);
                winChecker(gameBoard);
            }
        }
    }

    game();