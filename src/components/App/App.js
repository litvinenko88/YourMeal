import style from "./App.module.css";

import Head from "../Head";
import Nav from "../Nav";
import FoodMenu from "../FoodMenu";

class App {
  async render() {
    Head.render();
    Nav.render();
    FoodMenu.render();
  }

}

export default new App();
