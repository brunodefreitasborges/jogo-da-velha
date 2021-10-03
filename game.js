// INICIAR AS VARIAVEIS

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;
let symbols = ['O', 'X'];
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
var scribble1 = new Audio('./assets/scribble-effect1.ogg');
var scribble2 = new Audio('./assets/scribble-effect2.ogg');
var scribble3 = new Audio('./assets/scribble-effect3.ogg');

var victory = new Audio('./assets/victory.ogg');


function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = hasWon();

        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;
            
            let sound = Math.floor(Math.random() * 3) + 1;
            
            if (sound == 1) {
                scribble1.play();
            } else if (sound == 2) {
                scribble2.play();
            } else {
                scribble3.play();
            }
            
            if (playerTime == 0){
                turno = document.getElementById('turno');
                turno.innerHTML = '<h2 id="turno">Turno: Jogador 0 </h2>'
            } else {
                turno.innerHTML = '<h2 id="turno">Turno: Jogador 1 </h2>'
            }

        }
    }

    return gameOver;
}

function hasWon() {

  
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true;
        }

    }

    return false;

}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    slots = document.querySelectorAll(".slot");
    
    for(slot of slots) {
        slot.innerHTML = '';
    }

    console.log("Resetado");
}