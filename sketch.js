let myShader;
let img;
let canvas;

function preload() {
  myShader = loadShader(
    "https://cdn.glitch.global/558b2932-66a6-4ebc-a2f2-09216332cbe0/shader.vert?v=1728599945036",
    "https://cdn.glitch.global/558b2932-66a6-4ebc-a2f2-09216332cbe0/shader.frag?v=1728599957102"
  );
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage(
    "https://cdn.glitch.global/558b2932-66a6-4ebc-a2f2-09216332cbe0/fondo4.jpeg?v=1728602560809"
  );
  shader(myShader);
  myShader.setUniform("tex", img);
  noStroke();
}

function draw() {
  background(255, 1);
  //ambientLight(128, 128, 128);
  //directionalLight(128, 128, 128, 0, 0, -1);
  let time = millis();
  push();
  rotateX(time / 1000);
  rotateY(time / 1234);
  pop();

  let freq = map(mouseX, 0, width, 0, 10.0);
  let amp = map(mouseY, 0, height, 0, 0.25);

  myShader.setUniform("frequency", freq);
  myShader.setUniform("amplitude", amp);
  myShader.setUniform("time", frameCount * 0.01);
  fill(250, 100);
  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
