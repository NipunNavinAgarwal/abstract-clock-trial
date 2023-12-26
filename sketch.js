// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    background(0);
    let hr = hour();
  let min = minute();
  let sec = second();

var h = map(hr, 0, 24, 0, 760);
var m = map(min, 0, 60, 0, 760);
var s = map(sec, 0, 60, 0, 760);

fill(125, 10, 10)
rect(20, 20, s, 560)
fill(191, 49, 49)
rect(24, 100, m, 250)
fill(234, 209, 150)
rect(24,400, h, 100)

}