import style from "./Menu.module.css";
import { catalogFood } from "../../util/CatalogFood";

class Menu {
  constructor() {}

  async render(promise) {
    let menuHTML = "";
    let menuData = await catalogFood.getFood(promise);

    menuData.forEach(({ img, price, title, weight }) => {
      menuHTML += `
         <div class="${style.card}">
            <img class="${style.img}" src="${img}">
            <p class="${style.price}">${price}₽</p>
            <h3 class="${style.title}">${title}</h3>
            <p class="${style.weight}">${weight}</p>
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
