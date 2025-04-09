function setup() {
  let canvas = createCavas(400,400);
  canvas.parent("thegame");
}

function draw() {
  background(220);
  rect(1,1,400,400);
  rectMode(CENTER);
  fill(255);
}
