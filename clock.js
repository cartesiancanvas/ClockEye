let robota;
let size;
let eyes = [];
let eye_l;
let inp1;

function preload() {
  robota = loadFont("Roboto-Medium.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  size=width/4;
  textFont(robota);
  noStroke();
  fill(255);
  colorMode(HSB, 360, 1, 1, 255);

  inp1 = createColorPicker('#000000');
  inp1.position(0, height-30);
}

function draw() {

  background(0, 0, 0.2);

  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss ;
  var points=robota.textToPoints(time, width/2-size*2, height/2+size/4, size, {
  sampleFactor: 
    1/size*14, 
    simplifyThreshold: 
    0
  }
  );

  while (eyes.length > 0) {
    eyes.pop();
  }

  for (var i=0; i<points.length; i++) {
    x_pos=points[i].x;
    y_pos=points[i].y;
    eyes.push(new eye(x_pos, y_pos, size/16, 0.01, 255, 1, 0));
    eyes[i].update(mouseX, mouseY);
    eyes[i].sketch();
  }
  eye_l=new eye(width/2, height/2, size/2, 1, 125, 0, inp1.color());
  eye_l.update(mouseX, mouseY);
  eye_l.sketch();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
