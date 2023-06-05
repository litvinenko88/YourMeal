import style from "./App.module.css";
import FoodMenu from "../FoodMenu";
import Nav from "../Nav/Nav";
import Head from "../Head";


class App {
  async render() {
    Head.render();
    FoodMenu.render()
  }
}

export default new App();

