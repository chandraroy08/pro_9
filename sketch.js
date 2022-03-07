var ball



function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,20,20)
}

function draw() {
  background("black");

  if(keyDown("RIGHT_ARROW")){
    ball.velocityX= 5
  }

  if(keyDown("LEFT_ARROW")){
    ball.velocityX= -5
  }





  drawSprites()
}