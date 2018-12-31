class Ball {
    constructor(x = 0, y = 0, c = color(255, 255, 255), amp = 100, angFreq = 50) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.amp = amp;
        this.angFreq = angFreq;
        this.time = 0;
    }

    update() {
        this.time += 0.001;
        this.y = this.amp * sin(this.angFreq * this.time);
    }

    show() {
        noStroke();
        fill(this.c);
        ellipse(this.x, this.y, 16);
    }
}