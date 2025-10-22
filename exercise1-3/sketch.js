function setup(){

    createCanvas(600,600)
}

let mouseX1 = []
let mouseY1 = []
let mouseLag = 5

function draw(){

    background(200,100,50)
    fill(20,200,100)
    mouseX1.unshift(mouseX)
    mouseY1.unshift(mouseY)

    for(let i = mouseLag; i > 0; i--){

        circle(mouseX1[i], mouseY1[i], 20 - (2 * i))
    }
}