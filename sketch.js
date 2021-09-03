var track, boy, leftBoundary, rightBoundary;
var trackImage, boyImage


function preload(){
  //pre-load images
  boyImage = loadAnimation("Runner-1.png" , "Runner-2.png")
  trackImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here

  track=createSprite(200,200);
  track.addImage(trackImage);
  track.velocityY = 5;
  track.scale=1.2;

  //boy running Sprite
  boy = createSprite(200,350,30,30);
  boy.scale=0.075;
  boy.addAnimation("boyRunning",boyImage);

  //creating boundary sprites
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(400,0,100,800);
  rightBoundary.visible = false;

}

function draw() {
  background(0);
  track.velocityY =5;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background
  if(track.y > 400 )
  {
    track.y = height/2;
  }
  


  drawSprites();
}
