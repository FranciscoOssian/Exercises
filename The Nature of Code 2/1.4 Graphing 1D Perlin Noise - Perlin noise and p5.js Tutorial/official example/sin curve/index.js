var xoff1 = 0;
var xoff2 = 100;

var inc = 0.01;
var start = 0;

function setup(){
    createCanvas(400, 400);
}

//como sera q deixa mais rapido/
//talvez só depende da quanticade de vezes 
    //q draw eh chamada🤔 

function draw(){
    background(51);

    stroke(255);
    noFill();
    beginShape();

    var xoff = start;

    for (var x = 0; x < width; ++x){
        stroke(255);
        var y = height/2 + sin(xoff) * height/2;
        vertex(x, y);

        xoff += inc;
    }
    endShape();

    start += inc;

    //noLoop();
}