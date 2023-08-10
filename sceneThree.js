
class SceneThree extends Scene {
  constructor() {
    super();
    this.figuras = [];
    this.c;
    this.size = 30;
    this.xoff = 0.0;
    this.pallette = ["#edb886", "#f1c691", "#ffe498", "#f9f9f1", "#b9a58d"];
    this.pallette2 = ["#000706", "#00272d", "#134647", "#0c7e7e", "#bfac8b"];
    this.pallette3 = ["#fb7968", "#f9c593", "#fafad4", "#b0d1b2", "#89b2a2"];
    this.pallette4 = ["#ff8591", "#efaaa3", "#8caaa2", "#5a9b95", "#44878f"];
    this.colors = [
      this.pallette,
      this.pallette2,
      this.pallette3,
      this.pallette4,
    ];
    this.addFig();
  }

  /**Rellena el array y colorea aleatoriamente los objetos de la clase */
  color() {
    for (let i = 0; i < height; i++) {
      this.r = floor(random(0, this.colors[this.random].length));
      this.c = this.colors[this.random][this.r];
      this.figuras[i] = new Figura(this.x, this.y, this.c, this.size);

      this.x += this.size;
      this.y += this.size;
    }
  }

  //Inicializa los objetos
  addFig() {
    this.x = 0;
    this.y = this.size;
    this.random = floor(random(0, 4));
    this.color();
  }

  /**Metodo que llama a los metodos de la clase Particle que agregan el movimiento */
  move(value) {
    for (let i = 0; i < height; i++) {
      value[i].move();
    }
  }

  draw() {
    push();
    background(0);

    this.move(this.figuras);
    //Mueve la imagen de manera irregular
    this.xoff += 0.01;
    this.n = map(noise(this.xoff) * height, 0, 50, 0, 1);
    image(world.globe, 100 + this.n, 50 + this.n);

    image(world.paisaje, 0, 60);
    pop();
  }
}

class Figura {
  constructor(p1, p2, c, size) {
    this.p1 = p1;
    this.p2 = p2;
    this.c = c;
    this.size = size;
    this.vel = 0;
  }

  /**Metodo que llama a conjunto de metodos */
  move() {
    this.draw();
    this.update();
    this.wrap();
  }

  /**Desplaza la posicion de cada objeto dentro del canvas en base 
   * al mouseX */
  update() {
    this.constrainedMouseX = constrain(mouseX, 0, width);
    this.mouse = map(this.constrainedMouseX, 0, width, 1, 10);
    this.p1 += this.vel + this.mouse;
    this.p2 += this.vel + this.mouse;
  }

  /**Determina la forma del objeto */
  draw() {
    push();
    noStroke();
    fill(this.c);
    quad(this.p1, 0, this.p2, 0, 0, height, 0, height);
    pop();
  }

  /**Metodo que devuelve una posicion inicial una vez que el objeto
   * quede fuera del canvas
   */
  wrap() {
    if (this.p1 > 2000) {
      this.p1 = -this.size;
      this.p2 = 20;
    }
  }
}
