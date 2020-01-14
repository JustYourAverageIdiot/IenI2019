function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  noLoop();
  background(240,240,240);
  colorMode(RGB,255,255,255,1);  
}

function draw() {
  noStroke();
  fill(143, 85, 44);
  rect(225,0,225,225);
  fill(240,240,240);
  rect(275,50,125,125);
  fill(250,225,175,0.5);
  triangle(0,150,450,0,300,450);
  fill(50,50,50);
  ellipse(87.5,362.5,175);
}
