import style from "./FoodMenu.module.css";
import Nav from "../Nav";
import Menu from "../Menu";
import { ROOT_FOOD_MENU } from "../../constants/constants";
import axios, { Axios } from "axios";
import { BURGER } from "../../constants/api";

class FoodMenu {
  constructor() {
    this.nav = new Nav();
    this.menu = new Menu();
  }

  async render() {
    let promise = BURGER;

    let html = `
    <div class="${style.wrapper}">
    ${this.nav.render()}
    ${await this.menu.render(promise)}
    
    </div>

   `;

    ROOT_FOOD_MENU.insertAdjacentHTML("beforeend", html);
  }
}

export default new FoodMenu();
