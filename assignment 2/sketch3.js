function setup(){
    var canvas=createCanvas(500,500);
	canvas.parent("canvas");
	frameRate(30);
	background(255);
	
	
}

var x=0;
var x1=500;
var y=200;


function draw(){
	background(255);
	noStroke();
    fill(255,200,0);
	
	var angle=(sin(frameCount)+1)/2*PI/6;//make it between 0-1
	
	x=x+2;
	
	if(x>width){
		x=0
	}
	
	arc(x,y,60,60,angle,-angle);
	
	
	var angle=(sin(frameCount)+1)/2*PI/6;
	
	x1=x1-2;
	
	if(x1<0){
		x1=width;
	}
	
	arc(x1,y,60,60,PI+angle,PI-angle);
		
	console.log(frameCount);	
	
}