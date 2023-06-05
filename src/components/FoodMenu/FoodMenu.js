import style from "./FoodMenu.module.css";
import Nav from "../Nav/Nav";
import { ROOT_FOOD_MENU } from "../../constants/constants";

class FoodMenu {
  constructor() {
    this.nav = new Nav();
  }

  render() {
    let html = `
    <div class="${style.wrapper}">
       ${this.nav.menuCategories()}
    </div>
   `;

    ROOT_FOOD_MENU.innerHTML = html;
  }
}

export default new FoodMenu();
