
import style from "./FoodMenu.module.css";

class FoodMenu {
  constructor() {
    this.nav = [];
    this.menu = []
    this.basket = {}
  }

  addMenuItem(menuItem) {
    this.navMenuList.push(menuItem);
  }
  //Возвращает список меню 
  getMenuList() {
    let d = this.menuList;
    console.log(d);
  }
}

export default FoodMenu;


