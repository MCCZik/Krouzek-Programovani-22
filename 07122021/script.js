var ctx = document.createElement('canvas').getContext('2d');
var Prev = null;
var Mouse = false; // true pokud je stisklá myš

function Init() {
    ctx = document.getElementById('canvas').getContext('2d');
    Clear();
}

function MouseMove(e) {
    if (Mouse == true) {
        if (Prev != null) {
            Check();
            ctx.lineWidth = Size;
            ctx.strokeStyle = Color;
            ctx.beginPath();
            ctx.moveTo(Prev[0], Prev[1]);
            ctx.lineTo(e.layerX, e.layerY);
            ctx.stroke();
        }
        Prev = [e.layerX, e.layerY];
    }
}

function MouseDown(e) {
    Mouse = true;
    MouseMove(e);
}

function MouseUp(e) {
    MouseMove(e);
    Mouse = false;
    Prev = null;
}

var Color = "#000";
var Size = 1;
function Check() {
    Color = document.getElementById('color').value;
    Size = parseFloat(document.getElementById('tl').value);
}

function Clear() {
    ctx.fillStyle= white;
    ctx.fillRect(0,0,1280,720);
}