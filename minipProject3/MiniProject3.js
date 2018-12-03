var arrString;
var countriesArray = [];

function preload() {
	arrayStrings = loadStrings("GDPgrowth2000-2017.csv");

}

function setup() {

	frameRate(30);

	for (var i = 1; i < arrayStrings.length; i++) {
		var line = arrayStrings[i];
		line.split(",")
		var arr = line.split(",");
		var country = arr[0];


		var growthArray = [];
		var name = arr[0];
		for (var j = 1; j < arr.length; j++) {
			var year = j + 1999;
			growthArray[year] = arr[j];

		}


		var country = new Country(name, growthArray);
		countriesArray.push(country);




	}

	//var myHeight = countriesArray.length * 40;
	createCanvas(1350, 7050);
	//window.scrollBy(windowWidth,myHeight);

}

function draw() {

	background(0);

	noStroke();
	textAlign(LEFT);
	textFont('Times');


	var x = 80;
	var y = 150;


	fill(100, 200, 200);

	textSize(20);
	text('GDP Growth 2000-2017', x + 60, 50);

	fill(255, 180);
	textSize(10);
	text('2000', x + 60, y);
	text('2017', x + 330, y);

	for (var i = 0; i < countriesArray.length; i++) {
		//print(i);
		var c = countriesArray[i];
		push();
		translate(x + 100, y);



		c.draw();


		fill(255, 180);
		textSize(9);
		textAlign(LEFT);

		text(c.name, -120, 0);
		pop();
		//print(c);


		x = x + 450;
		if (x>1350) {
			x = 80;
			y = y + 100;



		}

	}


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

class Country {

	constructor(name, growthArray, radius) {
		this.name = name;
		this.growthArray = growthArray;




	}


	draw() {


		strokeCap(SQUARE);
		textAlign(CENTER);
		textSize(7);

		for (var i = 2000; i <= 2017; i++) {

			var m = this.growthArray[i];

			var x = map(i, 2000, 2017, 0, 210);




			if (m > 0.0) {


				stroke(100, 200, 200, 150);
				strokeWeight(4);
				var size = sqrt(m) * 5;

				push();
				translate(0, -size);
				line(x, 0, x, size);
				pop();

				noStroke();
				fill(100, 200, 200, 150);
				text(m, x, -40);



				//vertex(x, sqrt(m) * 15);

			} else if (m <= 0.0) {
				stroke(255, 10, 0, 150);
				strokeWeight(4);
				var size = sqrt(abs(m)) * 5;
				//noFill();
				push();

				line(x, 0, x, size);
				pop();


				noStroke();
				fill(255, 10, 0, 150);
				text(m, x, 40);



				//vertex(x, sqrt(m) * 15);
				//var size = sqrt(abs(m)) * 10;
			} else {
				fill('gray');
				noStroke();
				rect(x - 2.5, 0 - 2.5, 5, 5);



			}

			stroke(50, 60, 10);
			strokeWeight(1);
			line(0 - 10, 0, x + 10, 0);



		}





	}
}
