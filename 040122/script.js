var World = {};
var Blocks;
const WorldSize = [160, 80];

function Init() {
    Blocks = new Image;
    Blocks.src = "tiles.png";

    WorldGen();

    Render();
}

function Render() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.clearRect(0,0,2560,1280);

    for (let x = 0; x < WorldSize[0]; x++) {
        for (let y = 0; y < WorldSize[1]; y++) {
            ctx.drawImage(Blocks, 16*World.Map[x][y], 0, 16, 16, 16*x, 16*y, 16, 16);
        }
    }

    requestAnimationFrame(Render);
}

function WorldGen() {
    World.Map = [];
    for (let x = 0; x < WorldSize[0]; x++) {
        World.Map[x] = [];
        for (let y = 0; y < WorldSize[1]; y++) {
            if (Height(x) < y) {
                if (Height(x) < (y-3)) {
                    World.Map[x][y] = 0; // kámen
                } else {
                    World.Map[x][y] = 5; // hlína
                }
            } else {
                if (Height(x) < (y+1)) {
                    World.Map[x][y] = 4; // tráva
                } else {
                    World.Map[x][y] = -1; // vzduch
                }
            }
        }
    }

    for (let i = 0; i < 150; i++) {
        // Generace uhlí
        var X = Math.round(Math.random()*159);
        var Y = Math.round(Math.random()*50+20);
        World.Map[X][Y] = 1;
    }

    for (let i = 0; i < 70; i++) {
        // Generace železa
        var X = Math.round(Math.random()*159);
        var Y = Math.round(Math.random()*40+25);
        World.Map[X][Y] = 2;
    }

    for (let i = 0; i < 20; i++) {
        // Generace dia
        var X = Math.round(Math.random()*159);
        var Y = Math.round(Math.random()*20+55);
        World.Map[X][Y] = 3;
    }
}

function Height(x) {
    return Math.round(Math.sin(x*0.25)) + Math.round(Math.sin(x*0.15)*2) + 5;
}

function Click(e) {
    console.log(e.layerX);
    var X = Math.floor(e.layerX/16);
    var Y = Math.floor(e.layerY/16);
    var BlockID = parseInt(document.getElementById('tool').value)
    World.Map[X][Y] = BlockID;
}