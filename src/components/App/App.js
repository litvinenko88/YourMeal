import style from "./App.module.css";
import FoodMenu from "../FoodMenu";
import Footer from "../Footer";
import Head from "../Head";


class App {
  async render() {
    Head.render();
    FoodMenu.render()
    Footer.render()
  }
}

export default new App();

