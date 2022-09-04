class eye {
  constructor(x_loc, y_loc, radius, fac, alpha, decide, col) {
    this.x=x_loc;
    this.y=y_loc;
    this.size=radius;
    this.angle=0;
    this.c=alpha;
    this.fac=fac;
    this.decide=decide;
    this.col=col;
  }

  update(mx, my) {
    if (this.decide===0) {
      this.angle=atan2(-(my-this.y), -(mx-this.x));
    } else {
      this.angle=atan2(my-this.y, mx-this.x);
    }
    this.x=lerp(this.x, mouseX, this.fac);
    this.y=lerp(this.y, mouseY, this.fac);
  }
  sketch() {
    push();
    translate(this.x, this.y);
    stroke(0, this.c);
    fill(0, 0, 1, this.c);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    noStroke();
    if (this.decide===0) {
      fill(this.col, 255);
    } else {
      fill(map(mouseX, 0, width, 0, 360), 1, 1, this.c);
    }
    ellipse((this.size)/4, 0, (this.size)/2, (this.size)/2);
    pop();
  }
}
