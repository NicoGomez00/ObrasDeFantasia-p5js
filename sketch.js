const world = new World();

function preload() {
  //Scene one
  world.boy = loadImage("assets/img/sceneOne/img.png");
  world.light = loadImage("assets/img/sceneOne/palo-de-luz.png");
  //Scene two
  world.globe = loadImage("assets/img/sceneTwo/globo.png");
  world.paisaje = loadImage("assets/img/sceneTwo/paisaje.png");
  //Scene three
  world.cuadro = loadImage("assets/img/sceneFour/cuadro.png");
  world.boat1 = loadImage("assets/img/sceneFour/boat1.png");
  world.boat2 = loadImage("assets/img/sceneFour/boat2.png");
  world.boat3 = loadImage("assets/img/sceneFour/boat3.png");
  world.boat4 = loadImage("assets/img/sceneFour/boat4.png");
  //Menu
  world.arrow_right = loadImage("assets/img/menu/arrow_right.png");
  world.arrow_left = loadImage("assets/img/menu/arrow_left.png");
  world.portada = loadImage("assets/img/menu/portada.png");
  world.contratapa = loadImage("assets/img/menu/contratapa.png");
  world.pointer = loadImage("assets/img/menu/pointer.png");
}

function setup() {
  createCanvas(300, 500);
  background(0);

  pixelDensity(1);

  const menu = new Menu();
  const sceneOne = new SceneOne();
  const sceneTwo = new SceneTwo();
  const sceneThree = new SceneThree();
  const contratapa = new Contratapa();

  world.addScene(menu);
  world.addScene(sceneOne);
  world.addScene(sceneTwo);
  world.addScene(sceneThree);
  world.addScene(contratapa);

  world.setScene(0);
}

function draw() {
  world.currentScene.draw();
}

//Funcion que cambia las escenas usando las flechas del teclado
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    world.nextScene();
  } else if (keyCode === LEFT_ARROW) {
    world.prevScene();
  }
}

