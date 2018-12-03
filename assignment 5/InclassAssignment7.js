function setup(){
	createCanvas(400,400);
	frameRate(30);
}

function draw(){
	background(255);
	
	strokeWeight(1);
	noFill();
	
	
	rectMode(CORNER);
	translate(width/2,height/2);
	
	rotate(frameCount/15);
	ellipse(0,0,5,5);
	
	
	
	push();
	translate(20,0);
	rectMode(CENTER);
	rotate(frameCount/15);
	rect(0,0,10,10);
	pop();
	
	
	
	push();
	translate(50,0);
	rectMode(CENTER);
	rotate(frameCount/12);
	rect(0,0,20,20);
	pop();
	
	
	push();
	translate(80,0);
	rectMode(CENTER);
	rotate(frameCount/3);
	rect(0,0,30,30);
	pop();
	
	
}