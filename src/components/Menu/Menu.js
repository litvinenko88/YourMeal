import style from "./Menu.module.css";
import { ROOT_MENU } from "../../constants/constants";
import { catalogFood } from "../../util/CatalogFood";
import {
  BURGER,
  SNACKS,
  HOT_DOG,
  COMBO,
  SHAWARMA,
  PIZZA,
  WOK,
  DESSERT,
  SAUCES,
} from "../../constants/api";

class Menu {
  async render() {
    let htmlContent = "";
    const data =  await catalogFood.getFood(BURGER);

    data.forEach(({img, price, title, weight}) => {

      htmlContent += `
        <div class="${style.card}">
          <img class="${style.img}" src="${img}" alt="Изображения">
          <p class="${style.price}">${price}</p>
          <h3 class="${style.title}">${title}</h3>
          <p class="${style.weight}">${weight}</p>
          <button class="${style.btn}">Добавить</button>
        </div>
      `;

      let html = `
        <div class="${style.container}">
          <h2>Бургеры</h2>

          <div class="${style.wrapper}">
            ${htmlContent}
          </div>
        </div>
      `;

      ROOT_MENU.innerHTML = html;
    });
  }
}

export default new Menu();
