function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
  frameRate(60
    
    
    
    
    
    );
}

function draw() {
  noStroke();
  fill('deepskyblue');
  ellipse(450,450,200);
  fill('gray');
  ellipse(mouseX,mouseY,200);
  fill('black');
  ellipse(100,100,100);
}