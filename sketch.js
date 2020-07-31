function setup() {
    createCanvas(500, 500);
    background(255);
}

function draw() {
    //give circles random colors
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    
    //give circle random sizes
    let size = random(5, 35);
    //give circles random offsets
    let offsetX = random(-25, 25);
    let offsetY = random(-25, 25);
    //turn off outline
    noStroke();
    //give circles random transparency
    let opacity = random(120,180);
     // make circle constantly follow the mouse
     fill(r, g, b, opacity);
     ellipse(mouseX + offsetX, mouseY + offsetY, size, size);
}

function mouseClicked() {
    //clear canvas
    background(255);
}