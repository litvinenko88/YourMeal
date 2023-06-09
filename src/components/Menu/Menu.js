import style from "./Menu.module.css";
import { catalogFood } from "../../util/CatalogFood";

class Menu {
  constructor() {
    this.menu = [];
  }

  async getPromise(promise) {
    let menuData = await catalogFood.getFood(promise);
    this.menu = menuData;
    return this.render();
  }

  async render() {
    let menuHTML = "";

    this.menu.forEach(({ img, price, title, weight }) => {
      menuHTML += `
         <div class="${style.card}">
            <img class="${style.img}" src="${img}">
            <p class="${style.price}">${price}₽</p>
            <h3 class="${style.title}">${title}</h3>
            <p class="${style.weight}">${weight}г</p>
            <button class="${style.button}">Добавить</button>
         </div>
      `;
    });

    let html = `
    <div class="${style.wrapper}">
      ${menuHTML}
    </div>
    `;

    return html;


  }
}

export default Menu;
