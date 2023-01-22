function setup() {
  createCanvas(400, 400);
}

var x = 200;
var y = 200;

function draw(){
  noStroke();
  background(300);

  // Put time in variables for easy testing
  var s = second();
  var m = minute();
  var h = hour();
  
  // Testing min state
  console.log(m);
  fill(255,200,215,120);
  circle(x, y, 400)
  
  var ls = radians(map(s, 0, 60, 0, 360)-90)
  var lm = radians(map(m, 0, 60, 0, 360)-90)
  var lh = radians(map(h, 0, 24, 0, 360)-90)
  
  fill(255,200,215,200);
  arc(x, y, 400, 400, radians(-90), ls, PIE);
  fill(255,175,185,255);
  arc(x, y, 300, 300, radians(-90), lm, PIE);
  fill(255,150,175,200);
  arc(x, y, 200, 200, radians(-90), lh, PIE);

  // Example print statements (they do exactly the same thing, use 1 at a time)
  // console.log(map(s, 0, 60, 0, width), height);
  // print(map(s, 0, 60, 0, width), height);
}