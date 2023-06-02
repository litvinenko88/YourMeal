import style from "./Basket.module.css";
import { ROOT_BASKET } from "../../constants/constants";

class Basket {
  render() {
    let htmlContent = `
      <div class="${style.wrapper}">

        <div class="${style.container_text}">
          <h3 class="${style.basket_text}">Корзина</h3>
          <h3 class="${style.basket_number}">4</h3>
          <div class="${style.style}"></div>
        </div>
        
        <div class="${style.container_food}">
          <img class="${style.img}" src="https://main-cdn.sbermegamarket.ru/hlr-system/-16/017/136/771/181/559/100029622423b0.jpg">

          <div class="${style.food_order}">
            <h3 class="${style.title}">Супер сырный</h3>
            <h3 class="${style.weight}">520г</h3>
            <h3 class="${style.price}"></h3>
          </div>

          <div class="${style.container_quantity}">
            <button class="${style.minus}">-</button>
            <p class="${style.quantity}">4</p>
            <button class="${style.plus}">+</button>
          </div>
        </div>

        <div class="${style.wrapper_result}">
          <div class="${style.container_resul}">
            <h3 class="${style.result_text}">Итого</h3>
            <h3 class="${style.amount}">1100</h3>
          </div>

          <button>Оформить заказ</button>

        </div>

      </div>
      
    `;

    ROOT_BASKET.innerHTML = htmlContent;
  }
}

export default new Basket();
