js;
class FoodMenu {
  constructor() {
    this.nav = new Nav();
    this.menu = new Menu();
    this.basket = new Basket();
  }

  display() {
    this.nav.loadMenuCategories();
    this.menu.loadMenu();
    this.basket.displayBasket();
  }
}

js;
class Nav {
  constructor() {
    this.categories = [];
    this.categoryList = document.querySelector(".category-list");
  }

  loadMenuCategories() {
    axios
      .get("/api/categories")
      .then((response) => {
        this.categories = response.data;
        this.renderCategoryList();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderCategoryList() {
    let html = "";
    this.categories.forEach((category) => {
      html += `<li>${category.name}</li>`;
    });
    this.categoryList.innerHTML = html;
  }
}

js;
class Menu {
  constructor() {
    this.menuItems = [];
    this.menuList = document.querySelector(".menu-list");
  }

  loadMenu() {
    axios
      .get("/api/menu")
      .then((response) => {
        this.menuItems = response.data;
        this.renderMenuList();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderMenuList() {
    let html = "";
    this.menuItems.forEach((item) => {
      html += `
        <div class="menu-item">
          <img src="${item.image}">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <button data-id="${item.id}">Add to Basket</button>
        </div>
      `;
    });
    this.menuList.innerHTML = html;
  }
}

js;
class Basket {
  constructor() {
    this.basketItems = [];
    this.basketList = document.querySelector(".basket-list");
    this.totalPrice = document.querySelector(".total-price");
  }

  addBasketItem(id) {
    let item = this.menuItems.find((item) => item.id === id);
    this.basketItems.push(item);
    this.renderBasketList();
  }

  renderBasketList() {
    let html = "";
    let total = 0;
    this.basketItems.forEach((item) => {
      html += `
        <div class="basket-item">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
        </div>
      `;
      total += item.price;
    });
    this.basketList.innerHTML = html;
    this.totalPrice.textContent = `Total: ${total}`;
  }

  displayBasket() {
    this.basketList.innerHTML = `<p>No items in basket</p>`;
    this.totalPrice.textContent = `Total: 0`;
  }
}

const foodMenu = new FoodMenu();
foodMenu.display();


Можно упаковать всю эту логику в класс Menu. Например, так:

javascript
class Menu {
  constructor(menuContainerId) {
    this.menuContainer = document.getElementById(menuContainerId);
  }

  async render(promise) {
    try {
      const menuData = await catalogFood.getFood(promise);
      let menuHTML = '';
      menuData.forEach((element) => {
        menuHTML += `<img src="${element.img}">`;
      });
      this.menuContainer.innerHTML = menuHTML;
    } catch (error) {
      console.log(error);
    }
  }
}

// Пример использования:
const menu = new Menu('menu-container');
menu.render().then(() => {
  console.log('Меню успешно отрисовано');
});

В конструкторе класса мы получаем ссылку на элемент контейнера 
меню по его идентификатору. В методе render мы сначала вызываем 
метод getFood для получения данных, затем формируем HTML-код для 
меню и выводим его внутрь контейнера. В случае возникновения ошибки 
мы ловим ее с помощью конструкции try...catch.




class Nav {
  constructor() {
    this.categories = [
      "Бургеры",
      "Закуски",
      "Хот-доги",
      "Комбо",
      "Шаурма",
      "Пицца",
      "Вок",
      "Десерты",
      "Соусы",
    ];

    this.icons = [
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon7,
      icon8,
      icon9,
    ];

    this.navButton = [
      "BURGER",
      "SNACKS",
      "HOT_DOG",
      "COMBO",
      "SHAWARMA",
      "PIZZA",
      "WOK",
      "DESSERT",
      "SAUCES",
    ];

    this.activeClass = "active";

    this.navContainer = document.querySelector(.${style.wrapper});
    this.navItems = this.navContainer.querySelectorAll(.${style.container});

    this.navItems.forEach((item) => {
      item.addEventListener("click", this.handleClick.bind(this));
    });
  }

  handleClick(event) {
    const clickedItem = event.currentTarget;

    this.navItems.forEach((item) => item.classList.remove(this.activeClass));
    clickedItem.classList.add(this.activeClass);

    const value = clickedItem.getAttribute("data-value");
    this.setPromise(value);
  }

  setPromise(value) {
    console.log(Selected category: ${value});
  }

  render() {
    let navHTML = "";

    this.categories.forEach((list, i) => {
      const icons = this.icons[i];
      const navButton = this.navButton[i];

      navHTML += 
        <li class="${style.container}" data-value="${navButton}">
          <div class="${style.list}">
            <img class="${style.icon}" src="${icons}">
            <h3 class="${style.link}">${list}</h3>
          </div>
        </li>
      ;
    });

    const html = 
      <ul class="${style.wrapper}">
        ${navHTML}
      </ul>
    ;

    return html;
  }
}

export default Nav;

В конструкторе класса Nav я добавил код для получения ссылок 
на элементы навигации (this.navContainer и this.navItems) и 
добавления обработчика событий на каждый элемент с помощью метода 
forEach и метода bind для передачи контекста this в обработчик.
Метод handleClick получает текущий кликнутый элемент (clickedItem) и 
добавляет класс active для него, а также удаляет этот класс у всех 
остальных элементов навигации. Затем метод получает значение атрибута 
data-value и передает его в метод setPromise класса Nav.
Метод setPromise выводит значение выбранной категории в консоль. Можно 
добавить здесь логику, связанную с обновлением списка товаров на странице.
Метод render можно оставить без изменений.


