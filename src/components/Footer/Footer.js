import style from "./Footer.module.css";
import { ROOT_FOOTER } from "../../constants/constants";
import logo from "../../icon/buttom-logo.png";
import iconV from '../../icon/vk.png'
import iconT from '../../icon/tt.png'

class Footer {
  render() {
    let footerHTML = `
    <div class="${style.container}">
      <div class="${style.box1}">
        <img class="${style.logo}" src="${logo}">
        <p class="${style.text}">© YouMeal, 2022</p>
        <p class="${style.text}">Design: Anastasia Ilina</p>
      </div>

      <div>
        <h3 class="${style.contact_text}">Номер для заказа</h3>

        <div class="${style.contact_container}">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-fill ${style.icon_tel}" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.243L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.243 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            
            <p class="${style.iphone}">+7(930)833-38-11</p>
        </div>
      </div>

        <div class="${style.network_container}">
          <h3 class="${style.network_text}">Мы в соцсетях</h3>

          <div class="${style.icon_container}">
            <img class="${style.icon_net}" src="${iconV}">
            <img class="${style.icon_net}" src="${iconT}">
          </div>
      </div>
    </div>

      `;

    let html = `
    <div class="${style.wrapper}">
      ${footerHTML}
    </div>
   `;

    ROOT_FOOTER.innerHTML = html;
  }
}

export default new Footer();
