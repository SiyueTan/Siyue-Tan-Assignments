var arrayStrings;
var countriesArray=[];//create an array for country
function preload(){
	arrayStrings=loadStrings("DataGDPgrowth.csv");
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
		var growth=float(arr[1]);
		//print (growth);
		
		var name=arr[0];
		
		
		
		//print(country+" "+growth);
		if(!isNaN(growth)){//IF growth is not a number
			var country=new Country(name, growth);;
			countriesArray.push(country);
		}
	
		
		
		//var country=new Country(name, growth);
		
	}
}
function draw(){
	background(255);

	var x = 50;
	var y = 50;
	
	for(var i=0; i<countriesArray.length; i++){
		var c = countriesArray[i];
		
		c.draw(x, y);
		print(c);
		

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
	//create a country class
	
	constructor(name, growth){
		this.name=name;//this.name to the name started in this class, name to the name in constructor
		this.growth=growth;//same 
		
		
		
	}
	
	
	draw(x, y){
		noStroke();
		
		if(this.growth>=0.0){
			fill('green');
			var size=sqrt(this.growth)*7;
			ellipse(x, y, size, size);
		
		}else if(this.growth<0.0){
			
			fill('red');
			 var size=sqrt(-this.growth)*7;
			 ellipse(x, y, size, size);
		}else{
			fill('gray');
			var size=sqrt(sqrt(this.growth*this.growth))*7;
		    ellipse(x, y, size, size);
		}
	
	   
	
	
		
		
		
		textSize(6);
		fill(0);
		var n =this.name;
		text(n,x+20,y);
		textSize(5);
		var g=this.growth;
		text(g,x+20,y+8);
		
		//sort the countries array by growth rate vefroe drawing it.(in p5.js)
		//arrray.sort(comparator);
		//function comparator(a,b){
		 //>0, a>b, if =0, a=b,  /*
		/*this function will return;
		1 if a>b;
		-1 if a<blur0 if a ==b
		*/
	//}
	}
}
	
