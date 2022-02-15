var Board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
var Turn = 1;
var Turns = 0;
var NoWinner = true;

function Init() {

}

function Tile(y, x) {
    if (Board[x][y] == 0) {
        Turns += 1;
        Board[x][y] = Turn;
        if (Turn == 1) {
            document.getElementById(''+y+x).innerText = "O";
            document.getElementById(''+y+x).className = "red";
        } else {
            document.getElementById(''+y+x).innerText = "X";
            document.getElementById(''+y+x).className = "blue";
        }
        CheckWinner(Turn);
        Turn = Turn%2+1;
        if (Turns == 9) {
            alert("Remíza!")
            window.location.reload();
        }
    }
}

function CheckWinner(Turn) {
    for (let a = 0; a < 3; a++) {
        if (Board[a][0] == Turn && Board[a][1] == Turn && Board[a][2] == Turn) Win(Turn);
        if (Board[0][a] == Turn && Board[1][a] == Turn && Board[2][a] == Turn) Win(Turn);
    }
    if (Board[0][0] == Turn && Board[1][1] == Turn && Board[2][2] == Turn) Win(Turn);
    if (Board[0][2] == Turn && Board[1][1] == Turn && Board[2][0] == Turn) Win(Turn);
}

function Win(Turn) {
    if (Turn == 1) {
        alert("Hráč 1 (O) vyhrál!")
    } else {
        alert("Hráč 2 (X) vyhrál!")
    }
    window.location.reload();
}