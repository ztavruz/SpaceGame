window.onload = init;//

let map;//
let ctxMap; //

let gameWidth = 1000;
let gameHeight = 500;


let background = new Image();
background.src = "img/space1.jpg";

let playerShip;
let enemyShip;

function init()
{
    map = document.getElementById('map');//
    ctxMap = map.getContext("2d");//
    
    playerShip = new PlayerShip();
    enemyShip = new EnemyShip();
    
    map.width = gameWidth;
    map.height = gameHeight;

    canvasPlayerShip.width = gameWidth;
    canvasPlayerShip.height = gameHeight;
    
    canvasEnemyShip.width = gameWidth;
    canvasEnemyShip.height = gameHeight;
    

    drawBg();
    startLoop();

    document.addEventListener("keydown", checkKeyDown, false);
    document.addEventListener("keyup",  checkKeyUp, false);
}

function draw()
{
    playerShip.draw();
    // enemyShip.draw();   
}

function drawBg()
{
    ctxMap.drawImage(background,0, 0, 800, 500, 
        0, 0, gameWidth, gameHeight);
}

let isPlaying;

let requestAnimFrame = window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame;

function loop()
{
    if(isPlaying)
    {
        draw();
        update();
        requestAnimFrame(loop);
    }
}
function startLoop()
{
    isPlaying = true;
    loop();
}
function stopLoop()
{
    isPlaying = false;
    
}

function update()
{
    playerShip.update();
    // enemyShip.update();
}
