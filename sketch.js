var fixedrect,movingrect;
var go1,go2,go3,go4;
function setup() {

  createCanvas(1200,800);
 fixedrect=createSprite(200,200,50,100);
 fixedrect.shapeColor = "green";
 movingrect=createSprite(400,200,80,30);
 movingrect.shapeColor = "green";
 fixedrect.debug=true;
 movingrect.debug=true;
 go1=createSprite(100,100,50,50);
 go1.shapeColor="blue";
 
}
function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  movingrect.velocityY = -5;
  fixedrect.velocityY = 5;
  if(isTouching(movingrect,go1)){

    go1.shapeColor = "yellow";
    movingrect.shapeColor = "yellow";
  }
  else
  {

    go1.shapeColor = "green";
    movingrect.shapeColor = "green";

  }
bounceoff(movingrect,fixedrect)  
  drawSprites();
}

function bounceoff(o1,o2){
if(o1.x-o2.x < o1.width/2+o2.width/2 && 
  o2.x-o1.x<o1.width/2+ o2.width/2){

  o1.velocityX = o1.veloctiyX * (-1)
  o2.velocityX = o2.veloctiyX * (-1)
  }
  if(o1.y-o2.y < o1.height/2+o2.height/2 && o2.y-o1.y < o1.height/2+ o2.height/2){
o1.velocityY = o1.velocityY * (-1)



  }
  
  





}