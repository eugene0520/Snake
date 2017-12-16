// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

var s;
var scl = 20;
var speed = 0;
var food;

function setup() {
  createCanvas(400, 400);
  s = new Snake();
  frameRate(7);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
    speed ++;
    frameRate(7+(speed/10));
    console.log(7+(speed/10));
  }
  s.death();
  s.update();
  s.show();


  fill(random(255),random(255),random(255));
  rect(food.x, food.y, scl, scl);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
