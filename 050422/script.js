function init() {
    var sirka = parseInt(document.getElementById('rozliseni').value)*50+600;
    var vyska = (2/3)*sirka;

    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.clearRect(0,0,1200,800);

    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,sirka,vyska);
    /*
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(sirka/3, vyska/2);
    ctx.lineTo(0, vyska);
    ctx.lineTo(0, 0);
    ctx.fill();

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, vyska);
    ctx.lineTo(sirka, vyska);
    ctx.lineTo(sirka, vyska/2);
    ctx.lineTo(sirka/3, vyska/2);
    ctx.lineTo(0, vyska);
    ctx.fill();
    */
}