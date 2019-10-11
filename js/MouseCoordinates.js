let mouseX;
let mouseY;

function mouseMove(e)
{
    mouseX = e.pageX;
    mouseY = e.pageY;

    document.getElementById("gameName").innerHTML = "X: "+ mouseX +"Y: " +mouseY;
}

function mouseClick(e)
{
    playerShip.wayX = mouseX - 75;
    playerShip.wayY = mouseY - 70;
    
    document.getElementById("gameName").innerHTML = "wayX: "+ enemyShip.wayX +"wayY: " + enemyShip.wayY;

}


document.addEventListener("mousemove", mouseMove, false);
document.addEventListener("click", mouseClick, false);