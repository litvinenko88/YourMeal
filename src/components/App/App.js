import style from "./App.module.css";

import Head from "../Head";
import Nav from "../Nav";
import FoodMenu from "../FoodMenu";
import Menu from "../Menu/Menu";
import Basket from "../Basket";

class App {
  async render() {
    Head.render();
    Nav.render();
    FoodMenu.render()
  }

}

export default new App();
