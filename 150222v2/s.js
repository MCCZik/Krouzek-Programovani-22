function switchScreen(id) {
    for (let i = 0; i < document.getElementsByClassName('screen').length; i++) {
        document.getElementsByClassName('screen')[i].setAttribute('hidden', true);
    }
    document.getElementById(id).removeAttribute('hidden');
}

const Colors = ["#900", "#090", "#990", "#009", "#909", "#099", "#000", "#999"];
var ctx = document.createElement('canvas').getContext('2d');
const data = [
    "QWERTZUIOPLKJHGFDSAYXCVBNM",
    "QWERTZUIOPLKJHGFDSAYXCVBNMqwertzuioplkjhgfdsayxcvbnm"
];
var meta = {};

function init() {
    ctx = document.getElementById('canvas').getContext('2d');
    switchScreen('menu');
}

function start(easy) {
    switchScreen('game');
    meta.easy = easy;
    meta.level = 0;
    newLevel();
}

function newLevel() {
    meta.color = Colors[Math.floor(Colors.length*Math.random())];
    meta.level += 1;
    meta.solution = "";
    meta.difficulty = 5000 + (meta.level*250);
    if (meta.easy) {
        for (let i = 0; i < 4; i++) {
            meta.solution += data[0][Math.floor(data[0].length*Math.random())];
        }
    } else {
        for (let i = 0; i < 4; i++) {
            meta.solution += data[1][Math.floor(data[1].length*Math.random())];
        }
    }
    render();
}

function render() {
    ctx.fillStyle = meta.color;
    ctx.clearRect(0, 0, 320, 160);
    ctx.font = "72px Arial Black";
    ctx.textAlign = "center";
    ctx.fillText(meta.solution, 140, 76);
    for (let i = 0; i < meta.difficulty; i++) {
        ctx.fillRect(Math.random()*280, Math.random()*100, 2.5, 2.5);
    }
}  

function Send() {
    var ans = document.getElementById('ans').value;
    if (!meta.easy) {
        ans = ans.replaceAll("l", "§").replaceAll("I", "§")
        meta.solution = meta.solution.replaceAll("l", "§").replaceAll("I", "§")
    }
    if (ans.toLowerCase() == meta.solution.toLowerCase()) {
        newLevel();
    } else {
        alert("Failed! The answer was " + meta.solution + "\nLevel " + meta.level);
        switchScreen('menu');
    }
    document.getElementById('ans').value = "";
}