var canvas;
var ctx;
var w = 1650;
var h = 650;
var allCircles = [];


var o1 = {
    "x": w/2,
    "y": h/2,
    "w": 100,
    "h": 300,
    "c": 260,
    "a": 0.2,
    "angle": 0,
    "changle": 30,
    "distance": 50
}


var oneDegree = 2*Math.PI/360;



setUpCanvas();


animationLoop();
createData(10);



function animationLoop(){

    drawAllCircles(allCircles);
    updateAllData(allCircles);


    requestAnimationFrame(animationLoop);
}



function clear(){
    ctx.clearRect(0,0,w,h);
}

function updateAllData(a){
    for(var i=0; i<a.length; i++){
        updateData(a[i]);
    }
}

function drawAllCircles(a){
    for(var i=0; i<a.length; i++){
        circle(a[i]);
    }
}

function updateData(o){
    o.x += o.dx;
    o.y += o.dy;
}

function createData(num){
    for(var i =0; i<num; i++){

        allCircles.push({
            "x": i,
            "dx":randn(10),
            "y": rand(h),
            "dy": randn(10),
            "c": 300+rand(60),
            "a": rand(0.1),
            "r": 30,
        })
    }
}


function updateData(o){
    o.x += o.dx;
    o.y += o.dy;
    
    if(o.x > w || o.x < 0){
        o.dx *= -1;
    };
    if(o.y > h ||o.y < 0){
        o.dy *= -1;
    }
}

function circle(o){
    ctx.beginPath();
    ctx.arc(o.x,o.y,o.r,0, 2*Math.PI);
    ctx.fillStyle = "hsla("+o.c+", 100%, 50%, "+o.a+")";
    ctx.fill();
}

function randn(r){
    var result = Math.random()*r-r/2;
    return result
}


function randi(r){
    var result = Math.floor(Math.random()*r);
    return result
}

function rand(r){
    return Math.random()*r
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;

}