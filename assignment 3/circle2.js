function setup(){
	createCanvas(400,400);
	background(255);
	frameRate(30);
	
	

}
	

function draw(){
	background(255);
	var d=width/6

	//consolog（result）
	for(var i=d; i<=width; i+=d){
		
		var x=i
		for( var j=d; j<=height; j+=d){
			
			var y=j;
			var Distance=dist(200,200,x,y);
			
			a=20/(Distance+100)*100;
			//print(a);
			ellipse(x,y,a,a);
			/*if(Distance>40){
				a=20;
				a--;
				ellipse(x,y,a,a);
			}else{
				ellipse(200,200,40,40);
			}
			*/
			
		}
	}	
	
}