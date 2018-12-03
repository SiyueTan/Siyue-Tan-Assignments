//var g=1200/10;

var xoff = 0.0;
function setup(){
	createCanvas(1200,1200);
	background(255);
	frameRate(30);
	
}

function draw(){
   background(255);
   //var r=random(10,50);
   //var rs=random(-2,2);
   //strokeWeight(1);
	
	var cellSize = width/5;


	
	randomSeed(20);
	
	translate(cellSize/2, cellSize/2);
	
	
	for(var i=0; i<5; i++){
		for(var j=0; j<5; j++){
			var x = i * cellSize;
			var y = j * cellSize;
			noStroke();
			//ellipse(x, y, 10, 10);
			
			push();
			var angle=random(0,TWO_PI );
			translate(x, y);
			rotate(angle);
			stroke(0);
			
			var nlines = random(5, 15);
			var fCount=random(20,100);
			//rotate(angle);
			for(var n = 0; n<nlines; n++){
				
				var yy = map(noise(frameCount/fCount+(n+i+j)), 0, 1, -cellSize/2, cellSize/2);
				
				line(-cellSize/2, yy, cellSize/2, yy);
				
			}
			
			pop();
			
		}
		
	}
		
		
}
		


	
