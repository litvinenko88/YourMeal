import style from "./Basket.module.css";
import delivery from "../../icon/delivery.png";

class Basket {
  constructor() {
    this.basket = [];
  }

  render() {
    let basketHTML = `
    <div class="${style.top_text_container}">
      <h3 class="${style.top_heading}">Корзина</h3>
      <p class="${style.top_result}"> 4</p>
   </div>

      <div class="${style.style}"></div>

   <div>
      <div class="${style.order_container}">
         <div class="${style.box1}">
            <img class="${style.img}" src="https://s1.1zoom.ru/b5050/243/Big_cats_Leopards_Snout_479812_1920x1200.jpg">
            
            <div>
               <h3 class="${style.title}">Супер сытный</h3>
               <p class="${style.weight}">520г</p>
               <p class="${style.price}">896₽</p>
            </div>
         </div>
            
         <div class="${style.container_quantity}">
            <button class="${style.minus} ${style.button}">-</button>
            <p class="${style.quantity}">1</p>
            <button class="${style.plus} ${style.button}">+</button>
         </div>
         
      </div>
      <div class="${style.style}"></div>
   </div>

   <div class="${style.result}">
      <div class="${style.bottom_text_container}">
         <h3 class="${style.buttom_heading}">Итого</h3>
         <p class="${style.buttom_result}">450₽</p>
      </div>

      <button class="${style.button_order}">Оформить заказ</button>
         
      <div class="${style.delivery_container}">
         <img class="${style.icon}" src="${delivery}">
         <p class="${style.delivery_text}">У вас бесплатная доставка</p>
      </div>
   </div>
    `;

    let html = `
      <div class="${style.wrapper}">
         ${basketHTML}
      </div>
    `;
    return html;
  }
}

export default Basket;
