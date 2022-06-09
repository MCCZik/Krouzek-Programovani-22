var RoomJSON = {};
var ctx = document.createElement('canvas').getContext('2d');

function init() {
    ctx = document.getElementById('canvas').getContext('2d');
    newRoom();
    displayRoom();
}

function newRoom() {
    RoomJSON = {}
    RoomJSON.imageURL = null;
    RoomJSON.image = null;
    displayRoom();
}

function displayRoom() {
    ctx.clearRect(0,0,1280,720);
    if (RoomJSON.image != null) {
        ctx.drawImage(RoomJSON.image,0,0,1280,720);
        // display image
    }

    //elementy
    ctx.lineWidth = 2;
    ctx.font = "10px Verdana";
    ctx.textAlign = 'left';
    var temp=[];
    for (let i = 0; i < document.getElementById('cont').children.length; i++) {
        const element = document.getElementById('cont').children[i];
        if (element.className == 'elem') {
            ctx.fillStyle = "magenta";
            ctx.strokeStyle = "magenta";
            var params = [];
            for (let j = 0; j < element.children.length -1; j++) {
                params[j] = (j == 0) ? element.children[j].value : parseInt(element.children[j].value);
            }
            console.log(params);
            ctx.strokeRect(params[1]-(params[3]/2), params[2]-(params[4]/2), params[3], params[4]);
            ctx.fillText(params[0],params[1]-(params[3]/2),params[2]-(params[4]/2)-3)
        } else {
            temp[i] = {};
            temp[i].e = element;
            temp[i].FR = new FileReader;
            temp[i].FR.readAsDataURL(element.children[5].files[0]);
            temp[i].FR.onload = function() {
                var IMG = new Image;
                IMG.src = temp[i].FR.result;
                IMG.onload = function() {
                    ctx.fillStyle = "cyan";
                    ctx.strokeStyle = "cyan";
                    var params = [];
                    for (let j = 0; j < temp[i].e.children.length -2; j++) {
                        params[j] = (j == 0) ? temp[i].e.children[j].value : parseInt(temp[i].e.children[j].value);
                    }
                    console.log(params);
                    ctx.drawImage(IMG, params[1]-(params[3]/2), params[2]-(params[4]/2), params[3], params[4])
                    ctx.strokeRect(params[1]-(params[3]/2), params[2]-(params[4]/2), params[3], params[4]);
                    ctx.fillText(params[0],params[1]-(params[3]/2),params[2]-(params[4]/2)-3)
                }
            }


        }
    }
}

function addImage() {
    var FR = new FileReader;
    FR.readAsDataURL(document.getElementById('input_img').files[0]);
    FR.onload = function() {
        var IMG = new Image;
        IMG.src = FR.result;
        RoomJSON.imageURL = FR.result;
        IMG.onload = function() {
            ctx.clearRect(0,0,1280,720);
            ctx.drawImage(IMG,0,0,1280,720);
            RoomJSON.image = new Image;
            RoomJSON.image.src = document.getElementById('canvas').toDataURL();
            RoomJSON.image.onload = function() {
                displayRoom();
            }
        }
    }
}

function addElement() {
    document.getElementById('cont').appendChild(document.getElementById('sample').children[0].cloneNode(true));
}

function addObject() {
    document.getElementById('cont').appendChild(document.getElementById('sample2').children[0].cloneNode(true));
}

var MousePos = [0,0];
function mouseMove(e) {
    MousePos = [Math.round(e.offsetX*1280/e.target.clientWidth),Math.round(e.offsetY*720/e.target.clientHeight)];
}

function mouseClick() {
    alert(MousePos);
}

function saveRoom() {
    RoomJSON.elements = [];
    RoomJSON.objects = [];
    var temp=[];
    for (let i = 0; i < document.getElementById('cont').children.length; i++) {
        const element = document.getElementById('cont').children[i];
        if (element.className == 'elem') {
            var params = [];
            for (let j = 0; j < element.children.length -1; j++) {
                params[j] = (j == 0) ? element.children[j].value : parseInt(element.children[j].value);
            }
            RoomJSON.elements.push({params:params});
        } else {
            temp[i] = {};
            temp[i].e = element;
            temp[i].FR = new FileReader;
            temp[i].FR.readAsDataURL(element.children[5].files[0]);
            temp[i].FR.onload = function() {
                var params = [];
                for (let j = 0; j < temp[i].e.children.length -2; j++) {
                    params[j] = (j == 0) ? temp[i].e.children[j].value : parseInt(temp[i].e.children[j].value);
                }
                params.push(temp[i].FR.result);
                RoomJSON.objects.push({params:params});
            }
        }
    }
    setTimeout(function(){
        document.getElementById('save').value = JSON.stringify(RoomJSON);
    },1000)
}