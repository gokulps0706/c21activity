var fixedRect, movingRect,fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = false;
  fixedRect1 = createSprite(200, 100, 50, 80);
  fixedRect1.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = false;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
  else
 {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "yellow";
  fixedRect1.shapeColor = "green";
 }
  drawSprites();
}

