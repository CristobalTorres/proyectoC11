 
var sea, ship, shipImg1, seaImg, paloma, isla;


function preload(){
  shipImg1= loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png")
  paloma = loadImage("paloma.png")
  island = loadImage("island.png")

}

function setup(){
  createCanvas(550,400);

  sea = createSprite(200,200,1000,800);
  sea.addImage("sea",seaImg);
  sea.scale= 0.2

  sea2 = createSprite(-400,200,1000,800);
  sea2.addImage("sea",seaImg);
  sea2.scale= 0.2

  sea3 = createSprite(-1000,200,1000,800);
  sea3.addImage("sea",seaImg);
  sea3.scale= 0.2

 

  isla = createSprite(100,200,120,50)
  isla.addImage("island", island)
  isla.scale=0.09

  gabiota = createSprite(400,100,20,20);
  gabiota.addImage("gabiota", paloma)
  gabiota.scale= 0.005

  gabiota2 = createSprite(350,150,20,20);
  gabiota2.addImage("gabiota2", paloma)
  gabiota2.scale= 0.005

  gabiota3 = createSprite(250,80,20,20);
  gabiota3.addImage("gabiota3", paloma)
  gabiota3.scale= 0.005

  ship = createSprite(400,200,20,20);
  ship.addAnimation("moving", shipImg1);
  ship.scale=0.2;

}

function draw() {
  background("white");

if(sea.x<0 ){
  sea.x=sea.width/2;
}



if(keyDown("down")){
  ship.y=ship.y+2;
}
if(keyDown("up")){
  ship.y=ship.y-2;
}
if(keyDown("left")){
  ship.x=ship.x-2;
}
if(keyDown("right")){
  ship.x=ship.x+2;
}

isla.velocityX= 0.1

sea.velocityX=1;
sea2.velocityX=1;
sea3.velocityX=1;

gabiota.velocityX=-0.5;
gabiota2.velocityX=-0.5;
gabiota3.velocityX=-0.5;

  drawSprites();
}


