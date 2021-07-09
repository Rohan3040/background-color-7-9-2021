var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  //creating a button
  btn_red=createButton("RED");
  btn_red.position(100,50)
  btn_red.mousePressed(red_bj)
  
  
  btn_green=createButton("GREEN");
  btn_green.position(150,50)
  btn_green.mousePressed(green_bj)
}

function draw() {
  background(r,g,b);



  //drawSprites();
}
//creating a function to make the background green
function green_bj(){
  r=0
  g=255
  b=0
}






//creating a function to change the background color to red
function red_bj(){
r=255
g=0
b=0
}


