import style from "./Nav.module.css";

import icon1 from "../../icon/icon-1.png";
import icon2 from "../../icon/icon-2.png";
import icon3 from "../../icon/icon-3.png";
import icon4 from "../../icon/icon-4.png";
import icon5 from "../../icon/icon-5.png";
import icon6 from "../../icon/icon-6.png";
import icon7 from "../../icon/icon-7.png";
import icon8 from "../../icon/icon-8.png";
import icon9 from "../../icon/icon-9.png";

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

class Nav {
  constructor() {
    this.categories = [
      "Бургеры",
      "Закуски",
      "Хот-доги",
      "Комбо",
      "Шаурма",
      "Пицца",
      "Вок",
      "Десерты",
      "Соусы",
    ];

    this.icons = [
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon7,
      icon8,
      icon9,
    ];

    this.navButton = [
      BURGER,
      SNACKS,
      HOT_DOG,
      COMBO,
      SHAWARMA,
      PIZZA,
      WOK,
      DESSERT,
      SAUCES,
    ];

    this.activButton = BURGER;
  }

  setPromise(promise) {
    // обновляем активную кнопку навигации и возвращаем ее значение
    this.activButton = promise || this.activButton;
    return this.activButton;
  }

  render() {
    let navHTML = "";

    this.categories.forEach((list, i) => {
      const icons = this.icons[i];
      const navButton = this.navButton[i];

      navHTML += `
      <li class="${style.container}" data-value="${navButton}">
         <div class="${style.list}">
            <img class="${style.icon}" src="${icons}">
            <h3 class="${style.link}">${list}</h3>
         </div>
      </li>
      `;
    });

    let html = `
       <ul class="${style.wrapper}">
          ${navHTML}
       </ul>
    `;

    return html;
  }
}

export default Nav;
