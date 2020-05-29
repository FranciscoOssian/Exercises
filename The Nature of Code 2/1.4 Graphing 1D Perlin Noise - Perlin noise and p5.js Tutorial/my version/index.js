var xoff1 = 0;
var xoff2 = 100;

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(51);

    for (var x = 0; x < width; ++x){
        stroke(255);
        point(x, map(noise(xoff1), 0, 1, 0, height));
        xoff1 += 0.003;
    }

}