var canvas = document.getElementById("canvas-main");

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var ctx = canvas.getContext('2d');
var score = 0;
var time = 0;
var isGameOver = false;
var regionX, regionY, regionW, regionH;
function createRegion() {
    regionX = Math.random() * WIDTH;
    regionY = Math.random() * HEIGHT;
    regionW = 20;
    regionH = 20;
}
// Відразу викликаємо цю функцію
createRegion();
function update() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    // вимальовуємо прямокутник
    ctx.fillStyle="green";
    ctx.fillRect(regionX,regionY,regionW,regionH);
        // вивід кількості балів
        ctx.font = "20px Arial"
        ctx.fillStyle="white";
        ctx.fillText(score,30,40);
}

var frames = 0;
setInterval(function () {
    if(isGameOver===false){
    frames++; 
    if(frames%25==0) { 
        time = time + 1;
        checkTime(); 
    }
    update();
} else {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    ctx.font = "40px Arial"
    ctx.fillStyle="red";
    ctx.fillText("The end",WIDTH/2-100,HEIGHT/2);
    ctx.fillStyle="green";
    ctx.fillText("You've got " + score + " scores",WIDTH/2-100,HEIGHT/2+50);
}
}, 40);
document.onmousedown = function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;var isGameOver = false;

    if(mouseX>=regionX && mouseX<=regionX+regionW) {
        if(mouseY>=regionY && mouseY<=regionY+regionH) {
            createRegion();
            score = score + 1;
        }
    }
}
function checkTime() {
    if(time>=10) {
        alert("Гра закінчена( Ти отримав " + score + " балів!");
        isGameOver=true;
    }
}
