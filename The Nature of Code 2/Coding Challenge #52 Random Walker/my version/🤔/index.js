var inc = 0;

function setup(){
    createCanvas(400, 400);
}


function draw(){
    background(51);
    var axis_x = 0;
    var time = inc;
    for( ; time < width; ++time){
        stroke(255);
        point((noise(axis_x)*height), noise(time)*width);
        ++axis_x;
    }

    inc += 0.01;


}