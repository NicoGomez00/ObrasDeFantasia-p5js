/**
 * Esta clase contiene las escenas y el estado global
 * del mundo que es nuestro programa, el sketch de varias
 * pantallas.
 */

class World {
  constructor() {
    this.scenes = [];
    this.currentScene = null;
    this.currentIndex = null;
  }

  addScene(scene) {
    this.scenes.push(scene);
  }

  setScene(i) {
    // Compruebo posibles errores con mediante inversión de flujo.
    // Si no hay escenas en la lista tira error, retorna y no hace nada.
    if (this.scenes.length == 0) {
      print("Error, no hay escenas en la lista de escenas");
      return;
    }

    // Si no es un índice válido, tira error, retorna y no hace nada.
    if (i >= this.scenes.length || i < 0) {
      return;
    }

    this.currentScene = this.scenes[i];
    this.currentIndex = i;
  }

  /**
   * Mueve a la escena siguiente en la lista, si llegó
   * al final no realizo acciones.
   */
  nextScene() {
    let i = (this.currentIndex + 1) % this.scenes.length;
    if (i == 0) {
      return;
    }
    this.setScene(i);
  }

  /**
   * Mueve a la escena previa en la lista, si llegó
   * al principio no realizo acciones.
   */
  prevScene() {
    let i = this.currentIndex - 1;
    this.setScene(i);
  }
}
