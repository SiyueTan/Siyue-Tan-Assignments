var arrString;
var countriesArray=[];
var growthArray=[];
function preload(){
	arrayStrings=loadStrings("GDPgrowth2000-2017.csv");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
	//var countriesArray=[] empty array
	//print ("a,b,c".split(","));
	
	for(var i=1; i<arrayStrings.length;i++){
		var line=arrayStrings[i];
		line.split(",")//with line break, break from ,
		var arr=line.split(",");
		var country=arr[0];
		var growth=float(arr[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
		
		
		
		//print(country+" "+growth);
		if(!isNaN(growth)){//IF growth is not a number
			var country=new Country(name, growth);;
			countriesArray.push(country);
		}
	
		
		
		
	}
}
function draw(){
	background(255);

	var x = 50;
	var y = 50;
	
	for(var i=0; i<countriesArray.length; i++){
		var c = countriesArray[i];
		
		c.draw(x,y);
		//print(c);
		

		x = x + 100;
		if(x > width){
			x = 50;
			y=y+50;
			
				
			
		}
		
	}	
	
	
}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

class Country{
	
	constructor(name,growth){
		this.name=name;
		this.growth=growth;
		
		
		
	}
	
	
	draw(x, y){
	
	   noStroke();
		
		
	
	
		textSize(20);
		fill(0);
		var n =this.name;
		
		text(n,x+20,y);
		textSize(10);
		var g=this.growth;
		text(g,x+20,y+8);
		
		
	}
}
	
