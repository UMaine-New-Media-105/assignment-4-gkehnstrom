function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawStar(-100,0,50, "yellow", 5);
    drawStar(100,25,55, "yellow", 5);
      drawStar(11,85,55, "yellow", 5);


}

function drawStar(x,y,scale, color, points) {
  push()
  // Set the fill color
  fill(color);
 translate(x,y)
  // Calculate the angle between points
  const angle = TWO_PI / (2 * points);

  // Draw the star
  beginShape();
  for (let i = 0; i < 2 * points; i++) {
    const r = (i % 2 == 0) ? scale : scale / 2;
    const x = width / 2 + r * cos(i * angle);
    const y = height / 2 + r * sin(i * angle);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop()
}
