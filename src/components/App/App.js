import style from "./App.module.css";


import Head from "../Head";
import Nav from "../Nav";

class App {
  async render() {
    Head.render()
    Nav.render()
  }
}

export default new App();
