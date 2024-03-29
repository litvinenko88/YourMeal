import React, { createContext, useState } from "react";

import icon1 from "../assets/icons/btn-1.png";
import icon2 from "../assets/icons/btn-2.png";
import icon3 from "../assets/icons/btn-3.png";
import icon4 from "../assets/icons/btn-4.png";
import icon5 from "../assets/icons/btn-5.png";
import icon6 from "../assets/icons/btn-6.png";
import icon7 from "../assets/icons/btn-7.png";
import icon8 from "../assets/icons/btn-8.png";
import icon9 from "../assets/icons/btn-9.png";

export const MenuContext = createContext();

function MenuProvider({ children }) {
  //menu
  const [activ, setActiv] = useState(1);
  const [menu, setMenu] = useState([
    {
      id: 1,
      icons: icon1,
      text: "Бургеры",
      link: "https://gist.githubusercontent.com/litvinenko88/9d58c8d9576ada4b43465919cd1ac5bf/raw/5c7ea64405969e281150c882b07b6ae6c88e1b90/burger.json",
    },
    {
      id: 2,
      icons: icon2,
      text: "Закуски",
      link: "https://gist.githubusercontent.com/litvinenko88/24c9c9f39e8df448c03a2d50dbe0cc3f/raw/aae89b08689a88e1866dc90892e882eb226ed583/snacks.json",
    },
    {
      id: 3,
      icons: icon3,
      text: "Хот-доги",
      link: "https://gist.githubusercontent.com/litvinenko88/7edf6e45fcabb96fb66971ba18a2eb47/raw/42095042efc799091f34815ccdb5a185643bbc71/hot-dog.json",
    },
    {
      id: 4,
      icons: icon4,
      text: "Комбо",
      link: "https://gist.githubusercontent.com/litvinenko88/7b6c0ff2da1d97fd6cfac469612d1606/raw/21137663ce1db24ec4017538ce8a0c99c6b46570/combo.json",
    },
    {
      id: 5,
      icons: icon5,
      text: "Шаурма",
      link: "https://gist.githubusercontent.com/litvinenko88/c816662f3fc86c9e73906d69dc7245ad/raw/2b45a289506dd7c10401a195d55809c8e53d884b/shawarma.json",
    },
    {
      id: 6,
      icons: icon6,
      text: "Пицца",
      link: "https://gist.githubusercontent.com/litvinenko88/d319097f210e808253fc765022b5521e/raw/231bef77cb517dda794dae549a6508b4a793c0a6/pizza.json",
    },
    {
      id: 7,
      icons: icon7,
      text: "Вок",
      link: "https://gist.githubusercontent.com/litvinenko88/71504dca7f3444e907cdb6bdd41dc585/raw/87197c39bcd61c1e023f57076d96826c786df0a8/wok.json",
    },
    {
      id: 8,
      icons: icon8,
      text: "Дессерт",
      link: "https://gist.githubusercontent.com/litvinenko88/63386ddb357175b69e276313539def5c/raw/1158be8e68c12fa3c7c2b0bca7910a5a7344cc7c/dessert.json",
    },
    {
      id: 9,
      icons: icon9,
      text: "Соусы",
      link: "https://gist.githubusercontent.com/litvinenko88/7346740421d93cdaf2033b72d07aa3ed/raw/1d99c907bbc6c3be9e7f55dcf2cdb351a215859d/sauces.json",
    },
  ]);

  return (
    <MenuContext.Provider value={{ menu, activ, setActiv }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;
