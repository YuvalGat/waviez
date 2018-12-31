const iw = window.innerWidth;
const ih = window.innerHeight;

const balls = [];

function setup() {
	createCanvas(iw, ih);

	for (let i = 0; i < 0.75 * iw / 10; i++) {
		balls.push(new Ball(i * 10, 0, i % 10 === 0 ? color(0, 255, 0) : color(255, 0, 0)));
		balls[i].time = i;
	}
}

function draw() {
	background(51);
	translate(iw / 8, ih / 2);
	stroke(25);
	line(-iw / 8, 0, iw, 0);

	// balls[0].update();
	for (const [index, b] of balls.entries()) {
		if (index < balls.length - 1) {
			stroke(255);
			line(b.x, b.y, balls[index + 1].x, balls[index + 1].y);
		}
		b.update();
		b.show();
	}
}
