function setup(){

    createCanvas(400,400)
}

let colourVals = [60,140,180,255]

function draw(){

    let dia = [360,280,200,150]

    for(let i = 0; i < 4; i++){

        fill(colourVals[i],colourVals[i],0)
        circle(width / 2, height / 2, dia[i])
    }
}

function mousePressed(){

    lastCol = colourVals[3]
    colourVals.unshift(lastCol);
}