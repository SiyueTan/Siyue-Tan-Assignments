var gray=[];

function setup(){
	createCanvas(240,120);
	for(var i=0;i<20;i++){
		gray[i]=random(0,255);
	}
}

function draw(){
	background(204);
	
	var r=random(5,15);
for(var i=0;i<gray.length;i+=3){
	//stroke(0);
	line(i,0,i,height);
	
}


}