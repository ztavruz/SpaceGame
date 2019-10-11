let canvasPlayerShip;
let ctxPlayerShip;

canvasPlayerShip = document.getElementById('player');
ctxPlayerShip = canvasPlayerShip.getContext("2d");

let imgPlayerShip = new Image();
imgPlayerShip.src = "img/playerShip1.png";



function PlayerShip() {
    this.srcX = 0;
    this.srcY = 0;
    this.cutX = 150;
    this.cutY = 100;


    this.drawX = 0;
    this.drawY = 0;
    this.width = 150;
    this.heyght = 100;

    this.speed = 0.009;
    // ---for mouse driver---
    this.wayX;
    this.wayY;
    // ---for key---
    this.isUp = false;
    this.isDown = false;
    this.isRight = false;
    this.isLeft = false;
}



PlayerShip.prototype.draw = function () {
    this.clear();
    ctxPlayerShip.drawImage(imgPlayerShip, this.srcX, this.srcY, this.cutX, this.cutY,
        this.drawX, this.drawY, this.width, this.heyght);
}
PlayerShip.prototype.update = function () {
    // this.chooseDir();
    this.mouseUpdate();
    if(this.drawX >= 600 && this.drawX < 601 ){
        this.giperJump();
    }
}
PlayerShip.prototype.clear = function () {
    ctxPlayerShip.clearRect(0, 0, gameWidth, gameHeight);
}
PlayerShip.prototype.chooseDir = function () {
    if (this.isUp) {
        this.drawY -= this.speed;
    }
    if (this.isDown) {
        this.drawY += this.speed;
    }
    if (this.isLeft) {
        this.drawX -= this.speed;
    }
    if (this.isRight) {
        this.drawX += this.speed;

    }
}
PlayerShip.prototype.giperJump = function(){
    let url = "http://spacegame-server/index.php"; 

    let coordinates = [];
    coordinates["x"] = this.drawX;
    coordinates["y"] = this.drawY;

    let fd = new FormData();
    fd.append('coordinates',  coordinates['y']);

    // console.log(fd);
    $.ajax({
        url: url,
        method: "POST",
        contentType: false,
        processData: false,
        data: fd,
        success: function(data){
            console.log(data);
        }
    });
    window.location.href = 'file:///C:/Users/ztavruz/Desktop/SpaceGame-client/space1.html';
}

PlayerShip.prototype.mouseUpdate = function(){
    if(this.drawX < this.wayX ){
        for(i = 0; i< this.wayX - this.drawX; i++){
            this.drawX += this.speed;
        }
        if(this.drawY < this.wayY){
            for(i = 0; i < this.wayY - this.drawY; i++){
                this.drawY += this.speed;
            }
        }
        if(this.drawY > this.wayY){
            for(i = 0; i < this.drawY - this.wayY; i++){
                this.drawY -= this.speed;
            }
        }
    }
    if(this.drawX > this.wayX ){
        for(i = 0; i< this.drawX - this.wayX; i++){
            this.drawX -= this.speed;
        }
        if(this.drawY < this.wayY){
            for(i = 0; i < this.wayY - this.drawY; i++){
                this.drawY += this.speed;
            }
        }
        if(this.drawY > this.wayY){
            for(i = 0; i < this.drawY - this.wayY; i++){
                this.drawY -= this.speed;
            }
        }
    }
}

// -------------drivers-----------------
function checkKeyDown(e)
{
    let keyID = e.keyCode || e.wich;
    let keyChar = String.fromCharCode(keyID);
    if(keyChar == "W")
    {
        playerShip.isUp = true;
        e.preventDefault();
    }
    if(keyChar == "S")
    {
        playerShip.isDown = true;
        e.preventDefault();
    }
    if(keyChar == "A")
    {
        playerShip.isLeft = true;
        e.preventDefault();
    }
    if(keyChar == "D")
    {
        playerShip.isRight = true;
        e.preventDefault();
    }
}
function checkKeyUp(e)
{
    let keyID = e.keyCode || e.wich;
    let keyChar = String.fromCharCode(keyID);
    if(keyChar == "W")
    {
        playerShip.isUp = false;
        e.preventDefault();
    }
    if(keyChar == "S")
    {
        playerShip.isDown = false;
        e.preventDefault();
    }
    if(keyChar == "A")
    {
        playerShip.isLeft = false;
        e.preventDefault();
    }
    if(keyChar == "D")
    {
        playerShip.isRight = false;
        e.preventDefault();
    }
}