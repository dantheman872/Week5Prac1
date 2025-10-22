let cx = []
let cy = []
    
function setup(){

    createCanvas(600,600)
}



function draw(){

    background(200,100,20)
    for(let i = 0; i < cx.length; i++){

        fill(140,200,20)
        circle(cx[i], cy[i], 20)
    }
}

function mouseClicked(){

    cx.push(mouseX)
    cy.push(mouseY)
}

function keyPressed(){

    if(key === 'z'){

        cy.pop()
        cx.pop() 
    }
}