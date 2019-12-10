function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
  frameRate(60);
}



function draw() {
    noStroke();
    fill ('green');
    rect(175,0,100,100);
}

if (keyIsPressed(DOWN_ARROW)){
    translate (0,5);
}