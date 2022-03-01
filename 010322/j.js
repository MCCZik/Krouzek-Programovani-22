var answer;
var score; 

function init(){
    score = 100;
    answer = (""+(Math.floor(Math.random()*10000)+10000)).slice(1);
}

function send(){
    var input = document.getElementById('input').value;
    if (input == answer) {
        win();
    } else {
        score -= 5;
        var pocty1 = [0,0,0,0,0,0,0,0,0,0];
        var pocty2 = [0,0,0,0,0,0,0,0,0,0];
        var output = [0,0] // počet správných, počet polosprávných
        for (let i = 0; i < 4; i++) {
            if (input[i] == answer[i]) {
                output[0] += 1;
            } else {
                pocty1[parseInt(input[i])] += 1;
                pocty2[parseInt(answer[i])] += 1;
            }
        }
        for (let i = 0; i < 10; i++) {
            output[1] += Math.min(pocty1[i], pocty2[i]);
        }
        document.getElementById('score').innerText = "Score: " + score;
        document.getElementById('output').innerHTML += "<b>" + input + "</b>" + " (correct: " + output[0] + ", semicorrect: " + output[1] + ")<br>";
        if (score <= 0) lose();
    }
}

function win() {
    alert("lets go pog\nscore " + score);
    window.location.reload();
}

function lose() {
    alert("dostal jsi noscope naložíno\nscore " + 0);
    window.location.reload();
}