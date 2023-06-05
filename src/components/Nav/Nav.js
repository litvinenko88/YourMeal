import FoodMenu from "../FoodMenu";
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
  }

  menuCategories() {
    let html = "";
    let htmlContent = "";

    this.categories.forEach((list, icon) => {
      const icons = this.icons[icon];

      htmlContent += `
      <li class="${style.container}">
         <div class="${style.list}">
            <img class="${style.icon}" src="${icons}">
            <h3 class="${style.link}">${list}</h3>
         </div>
      </li>
      `;

      html = `
         <ul class="${style.wrapper}">
            ${htmlContent}
         </ul>
      `;
    });

    return html;
  }
}

export default Nav;
