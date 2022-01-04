function preload(){

}
function setup(){
    canvas=createCanvas(500,600);
    canvas.position(70,200);
    take=createCapture(VIDEO);
    take.hide();
}
function draw(){
    image(take,50,50,400,320);
    stroke(9, 235, 51);
    fill(9, 62, 235);

    circle(40,40,50)
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(9, 235, 51);
    fill(235, 54, 9);

    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(448,63,25,275);
}
function take_snapshot(){
  save("Frame.png");
}
