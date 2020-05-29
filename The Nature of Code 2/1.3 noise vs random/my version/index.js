var increase_x1_Element = document.getElementById("increase_x1");
var increase_x2_Element = document.getElementById("increase_x2");

var xoff1 = 0;
var xoff2 = 10000;

var point1 = {
    x: 0,
    y: 0
}

var point2 = {
    x: 0,
    y: 0
}

function setup(){
    createCanvas(400, 400);
    increase_x1_Element.value = 0.01;
    increase_x2_Element.value = 0.02;

}

function draw(){
    background(51);

    point1.x = map(noise(xoff1), 0, 1, 0, width);
    point1.y = map(noise(xoff2), 0, 1, 0, width);

    point2.x = random(width);
    point2.y = random(width);

    fill(255,255,255);
    ellipse(point1.x, point1.y, 24, 24);
    fill(255,0,0);
    ellipse(point2.x, point2.y, 24, 24);
    
    xoff1 += 0.01;
    xoff2 += 0.02;
}