import FoodMenu from "../FoodMenu";
import style from "./Nav.module.css";

class Nav extends FoodMenu {
  constructor(menuList) {
    super();
    this.menuList = menuList;
  }
}

export default Nav;
