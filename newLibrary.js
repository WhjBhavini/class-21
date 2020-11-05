function isTouching(object1, object2)
 {

  
  if(Math.abs(object1.x-object2.x) <= (object1.width/2+object2.width/2) && (Math.abs(object1.y-object2.y) <= (object1.height/2+object2.height/2)))
  {
    object1.shapeColor=object2.shapeColor="green"
  }
  else
  {
    object1.shapeColor=object2.shapeColor="yellow"
  }
 }
 
 function bounceOff(ob1,ob2){ 
    if(Math.abs(ob1.x-ob2.x) <= (ob1.width/2+ob2.width/2)) 
    {
       ob1.velocityX=ob1.velocityX*-1
    }
    if (Math.abs(ob1.y-ob2.y) <= (ob1.height/2+ob2.height/2))
    {
        ob1.velocityY=ob1.velocityY*-1
       
    }}
