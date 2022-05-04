var canvas = document.getElementById("canvas-main");

canvas.width = window.innerWidth; // ширина холста занимает всю ширину экрана
canvas.height = window.innerHeight; // высота холста занимает всю высоту экрана

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
// Сразу же вызываем эту функцию
createRegion();
function update() {
    // Очищаем холст
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    // Отрисовываем прямоугольник
    ctx.fillStyle="green";
    ctx.fillRect(regionX,regionY,regionW,regionH);
        // Выводим количество очков
        ctx.font = "20px Arial"
        ctx.fillStyle="white";
        ctx.fillText(score,30,40);
}
// Объявляем переменную с кадрами, вначале их 0
var frames = 0;
setInterval(function () {
    if(isGameOver===false){
    frames++; // увеличиваем количество кадров на 1
    if(frames%25==0) { // Если прошло 25 кадров, то
        time = time + 1;// Увеличили время
        checkTime();  // Проверили, не закончилось ли оно
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
            // Если попали мышкой по региону, то генерируем новый регион
            createRegion();
            score = score + 1;
        }
    }
}
function checkTime() {
    if(time>=10) {
        alert("Game over! You have " + score + " scores!");
        isGameOver=true;
    }
}