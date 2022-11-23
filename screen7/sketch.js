//https://www.youtube.com/watch?v=OIfEHD3KqCg

var canvas;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    fill('#fa923f');
    strokeWeight(5);
    background(220);
}

function keyPressed() {
  clear();
}

function draw() {
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }

    var a = min(frameCount/(windowWidth/300), 1200);
    var b = min(frameCount/(windowHeight/300), 400);
    ellipse(windowWidth/2, windowHeight/3, b, a);
    //can't do no loop if doing mouse interactions?
    // if (frameCount > 1200) {
    //     noLoop();
    // }
}
