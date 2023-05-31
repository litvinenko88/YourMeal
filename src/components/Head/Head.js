import { ROOT_HEAD } from "../../constants/constants";
import style from "./Head.module.css";

import logo from "../../img/logo.png";
import headBurger from "../../img/head-burger.png";

class Head {
  async render() {
    let htmlContent = `
      <div class="${style.content}">
        <img src="${logo}" class="${style.logo}">

        <div class="${style.box}">
          <img src="${headBurger}" class="${style.burger}">

          <div class="">
            <h2 class="${style.heading}">Только самые<br><span>сочные бургеры</span></h2>
            <p class="${style.text}">Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </div>
    `;

    let html = `
      <div class="${style.container}">
        ${htmlContent}
      </div>
    `;

    ROOT_HEAD.innerHTML = html;
  }
}

export default new Head();
