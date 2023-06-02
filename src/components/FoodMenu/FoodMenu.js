import Menu from "../Menu";
import Basket from "../Basket";
import { ROOT_FOOD_MENU } from "../../constants/constants";

class FoodMenu {
  async render() {
    Menu.render();
    Basket.render();
  }
}

export default new FoodMenu();
