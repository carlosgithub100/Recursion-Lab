// circles.js
// Recursive function to draw circles (or other shapes) along both axes
function setup() {
  createCanvas(600, 600);
  noFill();
  stroke(0);
  drawRecursiveCircles(width / 2, height / 2, 200, 4); // Starting with a center circle
}

// Recursive function for circles
function drawRecursiveCircles(x, y, radius, depth) {
  // Base case: stop recursion when depth is 0
  if (depth <= 0 || radius < 5) {
    return;
  }
  
  // Draw the current circle
  ellipse(x, y, radius * 2, radius * 2);

  // Recursively draw smaller circles at the four axes
  drawRecursiveCircles(x - radius / 2, y, radius / 2, depth - 1); // Left
  drawRecursiveCircles(x + radius / 2, y, radius / 2, depth - 1); // Right
  drawRecursiveCircles(x, y - radius / 2, radius / 2, depth - 1); // Up
  drawRecursiveCircles(x, y + radius / 2, radius / 2, depth - 1); // Down
}
