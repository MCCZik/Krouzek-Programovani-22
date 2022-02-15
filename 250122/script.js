var Correct = null;
var LivesLeft = 9;
var CurrentLevel = 1;
var Above = [];
var Below = [];

const Levels = [
    [1,10,5],
    [1,20,7],
    [1,30,8],
    [1,50,9],
    [1,100,10],
    [1,20,6],
    [1,100,9],
    [1,200,10],
    [1,500,12],
    [1,1000,13],
    [1,1000,12],
    [1,1000,11],
    [1,10000,15],
    [1,100000,18],
    [1,1000000,20],
    [1,1000000,19],
    [1,1000000,18],
    [1,1000000,17],
    [1,1000000,16],
    [1,1000000,15],
    [1,1000000,14],
    [1,1000000,13],
    [1,1000000,12],
    [1,1000000,11],
    [1,1000000,10],
    [1,1000000,5],
    [1,1000000,1]
]

function Init() {
    RunLevel(1);
}

function RunLevel(level) {
    CurrentLevel = level;
    NewLevel(Levels[level-1][0], Levels[level-1][1], Levels[level-1][2]);
}

function NewLevel(min, max, lives) {
    Above = [];
    Below = [];
    Correct = min + (Math.floor((max - min + 1)*Math.random()));
    LivesLeft = lives + 2;
    Answer(min-1);
    Answer(max+1);
}

function Submit() {
    Answer(parseInt(document.getElementById('guess').value))
}

function Answer(num) {
    if (num == Correct) {
        RunLevel(CurrentLevel + 1);
    } else {
        LivesLeft -= 1;
        if (LivesLeft == 0) {
            RunLevel(Math.max(CurrentLevel - 10, 1));
        } else {
            if (num > Correct) {
                Shout("Lower!");
                Above.push(num);
            } else {
                Shout("Higher!");
                Below.push(num);
            }
        }
    }

    Update();
}

function Update() {
    document.body.style.backgroundColor = "hsl("+((CurrentLevel-1)*36)+", 100%, 5%)";

    Above.sort(function(a, b) {
        return b - a;
    });

    Below.sort(function(a, b) {
        return b - a;
    });

    document.getElementById('above').innerHTML = "";
    document.getElementById('below').innerHTML = "";

    for (let i = 0; i < Above.length; i++) {
        document.getElementById('above').innerHTML += "<br>" + Above[i];
    }

    for (let i = 0; i < Below.length; i++) {
        document.getElementById('below').innerHTML += Below[i] + "<br>";
    }

    document.getElementById('lives').innerText = LivesLeft;
    document.getElementById('number').innerText = CurrentLevel;

    document.getElementById('submit').className = "border" + Math.min(Math.ceil(CurrentLevel/3),6);
    document.getElementById('guess').className = "border" + Math.min(Math.ceil(CurrentLevel/3),6);
}

function Shout(message) {

}