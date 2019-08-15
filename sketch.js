//variables:
// position of ball is ballposx and ballposy
// position of paddle 1 is p1x and p1y
// position of paddle 2 is p2x and p2y



function setup() {
  createCanvas(160,160);
  background(0);
  for(let i= 0;i<160;i+=20){
	  stroke(255);
	  line(i,0,i,height);
	  line(0,i,width,i);
    frameRate(5);
  }
}

let ballposx = 80;
let ballposy = 80;
let p1X = 0;
let p1Y = 0;
let p2X = 140;
let p2Y = 120;



function draw(){
        background(0);
        for(let i= 0;i<160;i+=20){
	  stroke(255);
	  line(i,0,i,height);
	  line(0,i,width,i);
        }
		//draw ball
        fill(255,0,0);
        noStroke();
        rect(ballposx,ballposy,20,20);
  
        //draw paddle1
        fill(255,0,0);
        noStroke();
        rect(p1X,p1Y,20,40);
  
        //draw paddle2
        fill(255,0,0);
        noStroke();
        rect(p2X,p2Y,20,40);
        updateBall();
}

//ballmove

function updateBall(){
  let xspeed = 20;
  let yspeed = 20;
  ballposx = ballposx + xspeed;
  ballposy = ballposy + yspeed;
  if(ballposx == 160 || ballposx == -20) {
      ballposx = 80;
      ballposy = 80;
  if(ballposx == p2X || ballposx == p1X){
  xspeed = -xspeed;  
  }
  
  }
}


//p2 controls
function keyPressed() {
  if (keyCode === UP_ARROW) {
    p2Y = p2Y - 20;
    if(p2Y === -20){
      p2Y = p2Y + 20;
      }
  }
  if (keyCode === DOWN_ARROW) {
    p2Y = p2Y + 20;
    if(p2Y === 140){
      p2Y = p2Y - 20;
      }
  }
  if (keyCode === 87) {
    p1Y = p1Y - 20;
    if(p1Y === -20){
      p1Y = p1Y + 20;
      }
  }
  if (keyCode === 83) {
    p1Y = p1Y + 20;
    if(p1Y === 140){
      p1Y = p1Y - 20;
      }
  }


}





