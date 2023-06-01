import style from "./Menu.module.css";
import { catalogFood } from "../../util/CatalogFood";
import {
  BURGER,
  SNACKS,
  HOT_DOG,
  COMBO,
  SHAWARMA,
  PIZZA,
  WOK,
  DESSERT,
  SAUCES,
} from "../../constants/api";
import App from "../App/App";

import FoodMenu from "../FoodMenu";

class Menu {
  async render() {
    let htmlContent = "";
    let data = await catalogFood.getFood(BURGER);

    data.forEach(({ img, price, title, weight}) => {
      console.log(data);
    });
  }
}

export default new Menu();
