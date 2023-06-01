import Menu from "../Menu";
import Basket from "../Basket";
import { ROOT_FOOD_MENU } from "../../constants/constants";

class FoodMenu {
  async render() {
    Basket.render();
    Menu.render();
  }
}

export default new FoodMenu();
