let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
];

function setup() {
  createCanvas(450, 450);
  noLoop();
}

function draw() {
  background(220);

  // Set the stroke weight and color
  strokeWeight(1);
  stroke(255);

  // Loop through rows and columns to draw the stars
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // Calculate the x and y coordinates for the current star
      let x = i * 50 + 50;
      let y = j * 50 + 50;

      // size of the star based on the row and column
      let size = (i + j) % 2 == 0 ? 10 : 5;

      // Set the fill color for the star to a random color
      let randomColor = color(random(255), random(255), random(255));
      fill(randomColor);

      // Draw the star
      star(x, y, size);
    }
  }
}

// Function to draw a star
function star(x, y, size) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI * i / 5;
    let px = x + cos(angle) * size;
    let py = y + sin(angle) * size;
    vertex(px, py);
    angle += TWO_PI / 10;
    px = x + cos(angle) * size / 2;
    py = y + sin(angle) * size / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}
