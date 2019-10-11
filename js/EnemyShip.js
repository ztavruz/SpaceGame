let canvasEnemyShip;
let ctxEnemyShip;

canvasEnemyShip = document.getElementById('enemy');
ctxEnemyShip = canvasEnemyShip.getContext("2d");

let imgEnemyShip = new Image();
imgEnemyShip.src = "img/enemyShip1.png";



function EnemyShip() 
{
    this.srcX = 0;
    this.srcY = 0;
    this.cutX = 206;
    this.cutY = 171;


    this.drawX = 0;
    this.drawY = 0;
    this.width = 150;
    this.heyght = 105;

    this.wayX = 0;
    this.wayY = 0;

    this.coordsNewSpaunX;
    this.coordsNewSpaunY;

    this.speed = 1/10;
}
EnemyShip.prototype.draw = function () 
{
    this.clearCtxEnemyShip(); 
    ctxEnemyShip.drawImage(imgEnemyShip, this.srcX, this.srcY, this.cutX, this.cutY,
        this.drawX, this.drawY, this.width, this.heyght);
}
EnemyShip.prototype.update = function () 
{
    
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

EnemyShip.prototype.clearCtxEnemyShip = function () 
{
    ctxEnemyShip.clearRect(0, 0, gameWidth, gameHeight);
}