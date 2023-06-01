import Menu from "../Menu";
import Basket from "../Basket";

class FoodMenu {
  async render() {
    Basket.render();
    Menu.render();
  }
}

export default new FoodMenu();
