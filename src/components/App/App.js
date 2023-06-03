import style from "./App.module.css";

import Head from "../Head";
import Nav from "../Nav";
import FoodMenu from "../FoodMenu/FoodMenu";
import Menu from "../Menu/Menu";
import Basket from "../Basket";

class App {
  async render() {
    Head.render();
    Nav.render();
  }

}

export default new App();
