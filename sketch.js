function setup() {
  createCanvas(1400,200);
  car = createSprite(200, 100, 50, 50);
  wall = createSprite(1200,100,50,50);
  car.velocityX = 5;
  speed=random(25,31);
  weight=random(400,1500);

 
  

 

  
}

function draw() {
  background("black");  

if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0
  var deformation=0.5*weight*speed*speed/22500
  if(deformation<180)
  {
    car.shapeColor=color("yellow");
    wall.shapeColor=color("white")
  }
}
  drawSprites();
}