vardamage, bullet,thickness,speed,weight,wall;


function setup() {
  createCanvas(1500,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  
  bullet=createSprite(400, 200, 60, 30);
bullet.velocityX=speed;
bullet.shapeColor=color(255,255,255);
  wall=createSprite(1400,200,thickness,height/2);
}

function draw(){




  background(0,0,0);  
 if(hascollided(wall,bullet)){
   
   bullet.visible=false;
   
   if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
  
  
  
 } 
  drawSprites();
fill("red");
textSize(30);
  text("damage-"+Math.round(damage),900,350);
  
}

