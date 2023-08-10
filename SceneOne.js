class SceneOne extends Scene {
  constructor() {
    super();
    this.numGotas = 2;
    this.gotas = [];
    this.n = 0;
    this.initGotas();
  }

  /**Inicializa el objeto gota */
  initGotas() {
    for (let i = 0; i < this.numGotas; i++) {
      this.gota = new Gota(120 + this.my, 160, 220);
      this.gotas[i] = this.gota;
    }
  }

  /**Inicia los metodos de movimiento del objeto */
  iniciar() {
    for (let i = 0; i < this.numGotas; i++) {
      this.gotas[i].move();
    }
  }

  draw() {
    push();
    frameRate(60);
    background(190 + this.my, 190, 190);

  //Metodo que devuelve una posicion inicial una vez que el objeto quede fuera del canvas
    this.constrainedMouseX = constrain(mouseX, 0, width);
    this.my = map(this.constrainedMouseX, 0, height, -65, 50);

    noStroke();
    ellipseMode(CENTER);
    fill(250, 140 - this.my, 100);
    ellipse(width / 2, height / 2 + this.my - 20, 20);

    fill(120 + this.my, 160, 220);
    rect(50, 230, width, height);

    //Botes img
    this.n += 0.015;
    image(world.boat1, 70 + this.n, 200, 40, 40);
    image(world.boat2, 180 + this.n * -1, 220, 60, 60);
    image(world.boat3, 180 + this.n * -1, 280, 60, 60);
    image(world.boat4, 40 + this.n, 280, 80, 80);

    image(world.cuadro, 0, 0);

    this.iniciar();
    pop();
  }
}

class Gota {
  constructor(c) {
    this.c = c;
    this.r = 2;
    this.inY = 404;
    this.a = 3;
  }

  move() {
    this.update();
    this.draw();
    this.wrap();
  }

  draw() {
    fill(this.c);
    ellipseMode(CENTER);
    ellipse(280, this.inY, this.r);
  }

  update() {
    if (this.r < 4.5) {
      this.r += 0.06;
    } else {
      this.a += 0.2;
      this.inY += this.a;
    }
  }

  wrap() {
    if (this.inY > height) {
      this.inY = 405;
      this.a = 3;
      this.r = 2;
    }
  }
}

