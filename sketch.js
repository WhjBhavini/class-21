 //creating algorithms --
var movingRect, fixedRect;
var objectA, objectB;

function setup()
 {
   createCanvas(1000,400)
   movingRect=createSprite(100,100,50,50)
   fixedRect=createSprite(200,200,100,100)
   movingRect.shapeColor=fixedRect.shapeColor="yellow"
   objectA=createSprite(400,200,100,100)
   objectB=createSprite(600,200,100,100)
   objectA.shapeColor=objectB.shapeColor="red"
  fixedRect.debug=true;
  movingRect.debug=true
 }

 function draw()
 {
   background(0);
     movingRect.x= World.mouseX;
     movingRect.y=World.mouseY;
     console.log("center gap" + (movingRect.x-fixedRect.x) + "  width gap " +(movingRect.width/2+fixedRect.width/2))
     //console.log("difference in width" + (movingRect.width/2+fixedRect.width/2))
    isTouching(movingRect, objectA);
   isTouching(movingRect,objectB)


    
     drawSprites();


 }

 