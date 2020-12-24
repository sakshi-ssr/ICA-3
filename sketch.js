let cluster = [];
let img;

function preload() {
  img = loadImage('/Assets/PA.jpg');
}

function setup() {
  createCanvas(600, 600);
  // colorMode(HSB, 100);
  img.resize(0, height);
  for (let i = 0; i<1000; i++) {
    cluster[i] = new Particle();
  }
}

function draw() {
  // background(255, 20);
  for (i = 0; i<cluster.length; i++) {
    cluster[i].display();
    cluster[i].update();
    if (cluster[i].size<=0) {
      cluster[i] = new Particle();
    } 
  }
  img.loadPixels();
}

class Particle {
  constructor() {
    this.posX = random(0, width);
    this.posY = random(0, height);
    
    let v = 2;
    this.velX = random(-v, v);
    this.velY = random(-v, v);
    
    this.size = 10;
    this.fade = random(0.5, 9);
    
    // this.col = color(random(360), 80, 80);
    // this.col = color(random(255), random(255), random(255));
    this.col = img.get(this.posX, this.posY);
    
    this.accY = 0.01
  }
  
  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    if(this.size > 0) {
    this.size -= this.fade;
    }
//     if(this.size<=0) {
//     this.posX = random(0, width);
//     this.posY = random(0, height);
    
//     this.velX = random(-2, 2);
//     this.velY = random(-2, 2);
    
//     this.size = 20;
//     }
    if(this.posX <= 0) {
      this.velX = -this.velX
    }
    if(this.posX >width) {
      this.velX = -this.velX
  }
    if(this.posY <= 0) {
      this.velY = -this.velY
    }
    if(this.posY >height) {
      this.velY = -this.velY
  }
    this.velY += this.accY;
  }
  
  display() {
    fill(this.col);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  }
}