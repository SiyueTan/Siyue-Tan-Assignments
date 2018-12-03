var arrayStrings;
var countriesArray = []; //create an array for country
var cnv;
var d;

function preload() {
	arrayStrings = loadStrings("DataGDPgrowth.csv");
}


function setup() {
	createCanvas(windowWidth, windowHeight);

	frameRate(30);


	for (var i = 1; i < arrayStrings.length; i++) {
		var line = arrayStrings[i];
		line.split(",") //with line break, break from ,
		var arr = line.split(",");
		var country = arr[0];
		var growth = float(arr[1]);
		var name = arr[0];


		if (!isNaN(growth)) { //IF growth is not a number
			var country = new Country(name, growth);;
			countriesArray.push(country);
		}


	}
}


function draw() {
	background(10, 20, 100);

	translate(width / 2, height / 2);

	pushAway();
	mouseOver();
	mouseOut();



	for (var i = 0; i < countriesArray.length; i++) {
		var c = countriesArray[i];



		var p1 = mouseX;
		var p2 = mouseY;
		var p3 = c.pos.x;
		var p4 = c.pos.y;

		var d1 = dist(p1 - width / 2, p2 - height / 2, p3, p4);

		c.draw();
		c.attract();


		if (d1 < c.radius) {

			//ellipse(c.pos.x, c.pos.y, c.radius * 2, c.radius * 2);
			//c.draw();

			textSize(10);
			fill(255);
			var n = c.name;
			var g = c.growth;
			textAlign(CENTER);
			text(n, c.pos.x, c.pos.y);
			textSize(8);
		
			text(g, c.pos.x, c.pos.y + 12);

		} else {
			//c.radius=c.radius;

		}



	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function pushAway() {

	for (var STEPS = 0; STEPS < 3; STEPS++) {
		for (var i = 0; i < countriesArray.length - 1; i++) {
			for (var j = 0; j < countriesArray.length; j++) {
				var pa = countriesArray[i];
				var pb = countriesArray[j];
				var ab = p5.Vector.sub(pb.pos, pa.pos);
				var distSq = ab.magSq();
				if (distSq <= sq(pa.radius + pb.radius)) {
					var dist = sqrt(distSq);
					var overlap = (pa.radius + pb.radius) - dist;
					ab.div(dist);
					ab.mult(overlap * 0.5);
					pb.pos.add(ab);
					ab.mult(-1);
					pa.pos.add(ab);
				}
			}
		}

	}

}

function mouseOver() {

	for (var i = 0; i < countriesArray.length; i++) {
		var pa = countriesArray[i];
		var mouseDist = sqrt(sq(mouseX - width / 2 - pa.pos.x) + sq(mouseY - height / 2 - pa.pos.y));
		if (mouseDist <= pa.radius) {
			if (pa.radius < 50) {
				pa.radius = pa.radius + 10;

			}else{
				
			}
		}
	}
}


function mouseOut() {

	for (var i = 0; i < countriesArray.length; i++) {
		var pa = countriesArray[i];
		var mouseDist = sqrt(sq(mouseX - width / 2 - pa.pos.x) + sq(mouseY - height / 2 - pa.pos.y));
		if (mouseDist > pa.originalRadius) {
			if (pa.radius > 50) {
				pa.radius = pa.originalRadius;

			}
		}
	}
}



class Country {
	//create a country class

	constructor(name, growth) {
		this.growth = growth;
		this.radius = sqrt(growth) * 8;
		this.originalRadius = this.radius
		this.name = name; //this.name to the name started in this class, name to the name in constructor
		//same 
		this.pos = createVector(random(-200, 200), random(-200, 200));
		this.pos.div(this.radius);
		this.pos.mult(1);



	}


	draw() {
		noStroke();

		fill(100, 100, 200, 200);

		ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);




	}
	attract() {
		//this is gonna attract the particle to the center (0, 0)
		var center = createVector(0, 0);
		var att = p5.Vector.sub(center, this.pos);
		att.normalize();
		att.div(5);
		this.pos.add(att);

	}

}
