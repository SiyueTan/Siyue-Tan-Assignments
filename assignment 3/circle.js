function setup(){
	createCanvas(400,400);
	background(255);
	frameRate(30);
	
	
	

}
	

function draw(){
	
	background(255);

	
	for(var i=50; i<width; i+=80){
		
		
		var x=i;
		for( var j=50; j<height; j+=80){
			var y=j;
			
			if(mouseIsPressed){
				var a=mouseX;
				var b=mouseY;
				var Distance=dist(x,y,a,b);
				if(Distance<20){
					ellipse(x,y,50,50);
				}else{
					ellipse(x,y,20,20);
				}
			}else{
				ellipse(x,y,20,20);
			}
		}
	}	
	
}


