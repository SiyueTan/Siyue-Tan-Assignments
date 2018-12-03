function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	frameRate(30);
	colorMode(HSB, 360, 100, 100, 100);
}

function draw() {


	background(0);
	blendMode(SCREEN);

	var xSize = width / 2;
	var ySize = height / 2;


	textFont('Avenir Next LT Pro');


	//fill(255);
	var h = (nf(hour(), 2));
	var m = (nf(minute(), 2));
	var s = (nf(second(), 2));

	//var b = ':';
	//fill('red'); 
	var clock = h + ':' + m + ":" + s;

	var splits = clock.split("");






	translate(xSize - 320, ySize);



	for (var j = 0; j < splits.length; j++) { //X

		translate(80, 0);
		for (var n = 0; n <= 3; n++) {

			fill(((sin(frameCount / 10 + n)) + 1) * 100, 100, 90);
			var size = ((sin(frameCount / 10 + j + n)) + 1) * 100;


			textAlign(CENTER, CENTER);
			textSize(size);
			//sine for color

			text(splits[j], 0, 0);


		}





	}


	//translate(windowWidth/2, windowHeight/2);
	/*var h = hour();
						var m = minute();
						var s = second();
						var b = ':';
						fill('red');
						//var clock = [h,m,s];
						//var separator = ' ：';
						//var Time = join(clock, separator);
						//var timeSplit=split(Time,'');

						var size = ((sin(frameCount / 10) + 1) * 80) + 50;
						textSize(size);
						text(h, xSize, 0);
						text(b, xSize * 2, 0);
						text(m, xSize * 3, 0);
						text(b, xSize * 4, 0);
						text(s, xSize * 5, 0);
	
	
						var size = ((sin(frameCount / 10) + 1) * 80) + 20;
						fill('yellow');
						textSize(size);
						text(h, xSize, 0);
						text(b, xSize * 2, 0);
						text(m, xSize * 3, 0);
						text(b, xSize * 4, 0);
						text(s, xSize * 5, 0);
	
						var size = ((sin(frameCount / 10) + 1) * 80) + 10;
						fill('green');
						textSize(size);
						text(h, xSize, 0);
						text(b, xSize * 2, 0);
						text(m, xSize * 3, 0);
						text(b, xSize * 4, 0);
						text(s, xSize * 5, 0);



						//for(var i=0; i<timeSplit.length;i++){
						*/

}
//pop();
