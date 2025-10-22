
let sx = []
let sy = []

function setup() {

    createCanvas(600,600)
}

function draw() {

    background(20,40,200)
    fill(100);

    for(let i = 0; i < sx.length; i++){

        star(sx[i],sy[i])
    }

    moveStar()
}



/**
 * Draws a star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */
function star(x, y) {
    fill(255, 234, 20);
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
}

function moveStar(){

    for(let i = 0; i < sy.length; i++){

        sy[i] += 2
    }
}