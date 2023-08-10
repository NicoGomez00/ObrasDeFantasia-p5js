
class SceneTwo extends Scene {
  constructor() {
    super();
    this.particlesFront = [];
    this.particlesBack = [];
    this.numParticles = 300;
    this.initParticle();
  }

  //Rellena los dos array con los con variantes en random que de definen su radio
  particles() {
    for (let i = 0; i < this.numParticles; i++) {
      this.x = random(width);
      this.y = random(height);
      this.r1 = random(3, 5);
      this.r2 = random(0, 3);
      this.particlesFront[i] = new Particle(this.x, this.y, this.r1);
      this.particlesBack[i] = new Particle(this.x, this.y, this.r2);
    }
  }

  //Inicializa el objeto Particle
  initParticle() {
    for (let i = 0; i < this.numParticles; i++) {
      this.particle = new Particle();
      this.particlesFront.push(this.particle);
      this.particlesBack.push(this.particle);
    }
    this.particles();
  }

  /**Metodo que llama a los metodos de 
   * la clase Particle que agregan el movimiento 
   * */
  initMove(value) {
    for (let i = 0; i < this.numParticles; i++) {
      value[i].move();
    }
  }

  draw() {
    push();

    background(10, 10, 0, 200);
    frameRate(40);
    noStroke();

    this.initMove(this.particlesBack);
    image(world.boy, 60, 380, 150, 150);
    image(world.light, -30, 70, 500, 500);
    this.initMove(this.particlesFront);

    pop();
  }
}

class Particle {
  constructor(xIn, yIn, r) {
    this.posX = xIn;
    this.posY = yIn;
    this.r = r;
    this.incr = 0;
    this.n = 0;
    this.opac = random(180, 255);
    this.vIy = 0;
  }

  //Metodo que llama a conjunto de metodos
  move() {
    this.draw();
    this.update();
    this.wrap();
  }

  //Actualiza la posicion de cada objeto dentro del canvas
  update() {
    this.incr += 0.8;
    this.vIy = map(this.r, 0, 6, 0, 6);
    this.n = noise(TWO_PI + this.incr);

    //Limita el rango de muestreo de mouseX para ser aplicado en los limites del lienzo
    this.constrainedMouseX = constrain(mouseX, 0, width);
    this.mx = map(this.constrainedMouseX , 0 , width , -3 , 3)
    
    this.posX += 2 * sin(this.n) + this.mx;
    this.posY += 2 * cos(this.n) + this.vIy;
  }

  //Determina la forma del objeto
  draw() {
    stroke(255, this.opac);
    ellipse(this.posX, this.posY, this.r);
  }

  //Metodo que devuelve una posicion inicial una vez que el objeto quede fuera del canvas
  wrap() {
    if (this.posX < 0) {
      this.posX = width - this.r;
    }
    if (this.posX > width + this.r) {
      this.posX = 0;
    }
    if (this.posY < 0) {
      this.posY = height;
    }
    if (this.posY > height) {
      this.posY = 0;
    }
  }
}

