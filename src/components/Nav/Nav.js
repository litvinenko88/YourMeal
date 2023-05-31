import style from "./Nav.module.css";
import { ROOT_NAV } from "../../constants/constants";

import icon_1 from "../../icon/icon-1.png";
import icon_2 from "../../icon/icon-2.png";
import icon_3 from "../../icon/icon-3.png";
import icon_4 from "../../icon/icon-4.png";
import icon_5 from "../../icon/icon-5.png";
import icon_6 from "../../icon/icon-6.png";
import icon_7 from "../../icon/icon-7.png";
import icon_8 from "../../icon/icon-8.png";
import icon_9 from "../../icon/icon-9.png";

class Nav {
  async render() {
    let htmlContent = `
      <li class=" ${style.list} ${style.activ}">
         <div class=${style.wrapper}>
            <img src="${icon_1}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Бургеры</a>
         </div>
      </li>
      <li class="${style.list}">
         <div class="${style.wrapper}">
            <img src="${icon_2}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Закуски</a>
         </div>
         
      </li>
      <li class="${style.list}">
         <div class="${style.wrapper}">
            <img src="${icon_3}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Хот-доги</a>
         </div>
         
      </li>
      <li class="${style.list}">
         <div class="${style.wrapper}">
            <img src="${icon_4}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Комбо</a>
         </div>
      
      </li>
      <li class="${style.list}">
         <div class="${style.wrapper}">
            <img src="${icon_5}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Шаурма</a>
         </div>
      
      </li>
      <li class="${style.list}">
         <div class="${style.wrapper}">
            <img src="${icon_6}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Пицца</a>
         </div>
         
      </li>
      <li class="${style.list}">
         <div class="${style.wrapper}">
            <img src="${icon_7}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Вок</a>
         </div>
         
      </li>
      <li class="${style.list}">
         <div class="${style.wrapper}">
            <img src="${icon_8}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Десерты</a>
         </div>
         
      </li>
      <li class="${style.list}">
         <div class="${style.wrapper}">
            <img src="${icon_9}" class="${style.iconNav}">
            <a href="#" class="${style.link}">Соусы</a>
         </div>
         
      </li>
      `;

    let html = `
      <ul class="${style.container}">
         ${htmlContent}
      </ul>
      `;

    ROOT_NAV.innerHTML = html;
  }
}

export default new Nav();
