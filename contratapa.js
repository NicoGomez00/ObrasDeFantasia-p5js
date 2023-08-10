class Contratapa extends Scene {
  constructor() {
    super();
    this.xoff = 0.0;
    this.n;
  }

  draw() {
    push();

    background(255);

    image(world.contratapa, 0, 0);

    this.xoff += 0.01;
    this.n = map(noise(this.xoff) * height, 0, 10, 0, 0.1);
    image(world.arrow_left, width / 2 - 20 + this.n, height - 55, 40, 40);

    pop();
  }
}
