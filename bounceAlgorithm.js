var movingRect,fixedRect
var objectA, objectB;

function setup()
{
    createCanvas(1000,500)
    movingRect=createSprite(100,100,50,50)
    fixedRect=createSprite(400,400,100,100)
    fixedRect.shapeColor="yellow"
    movingRect.velocityX=5
    movingRect.velocityY=7
    objectA=createSprite(400,200,180,100)
    objectA.shapeColor="green"
     objectA.setCollider("circle",0,0,50)
     movingRect.setCollider("circle",0,0,50)
    movingRect.debug =true;
   objectA.debug=true;
   //objectB=createSprite(600,200,100,100)
   //objectA.shapeColor=objectB.shapeColor="red"
}

function draw(){
    background("pink")
   //console.log(Math.abs(90-80) + " " +Math.abs(80-90));
   
 bounceOff(movingRect,objectA)
    drawSprites()
}
