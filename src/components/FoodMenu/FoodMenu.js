import style from "./FoodMenu.module.css";
import Nav from "../Nav";
import Menu from "../Menu";
import Basket from "../Basket";
import { ROOT_FOOD_MENU } from "../../constants/constants";
import { BURGER } from "../../constants/api";

class FoodMenu {
  constructor() {
    this.nav = new Nav();
    this.menu = new Menu();
    this.basket = new Basket();
  }

  async render() {
    let html = `
    <div class="${style.wrapper}">
      <div class="${style.nav}">${this.nav.render()}</div>
      <div class="${style.basket}">${this.basket.render()}</div>
      <div class="${style.menu}">${await this.menu.getPromise(this.nav.setPromise())}</div>
    </div>

   `;

    ROOT_FOOD_MENU.insertAdjacentHTML("beforeend", html);
  }
}

export default new FoodMenu();
