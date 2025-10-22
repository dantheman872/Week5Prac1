let sx = []
let sy = []
let sr = []
let sg = []

function setup() {

    createCanvas(600,600)
}

function draw() {

    background(0)

    for(let i = 0; i < sx.length; i++){

        fill(sr[i], sg[i], 0)
        star(sx[i], sy[i])
        sy[i] += 2
        sr[i] += -2
        sg[i] += -2
    }
}



/**
 * Draws a star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */
function star(x, y) {

    noStroke();
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);

}

function mouseClicked(){

    sx.push(mouseX)
    sy.push(mouseY)
    sr.push(255)
    sg.push(234)
}