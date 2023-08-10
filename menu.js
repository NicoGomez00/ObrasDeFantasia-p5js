class Menu extends Scene {
  constructor() {
    super();
    this.xoff = 0.0;
    this.n;
  }

  draw() {
    push();

    background(255);

    image(world.portada, 0, 0);

    /**Desplazo dentro de un rango de manera aleatoria las imagenes usando
     * map() y noise()
     */
    this.xoff += 0.01;
    this.n = map(noise(this.xoff) * height, 0, 10, 0, 0.1);
    image(world.arrow_left, 20 + this.n, height - 55, 40, 40);
    image(world.arrow_right, width - 60 + this.n, height - 55, 40, 40);

    strokeWeight(3);
    strokeCap(SQUARE);
    stroke(255);
    line(100, 250, 200, 250);

    image(world.pointer, width / 2 + this.n * 8, 245, 40, 40);
    pop();
  }
}
