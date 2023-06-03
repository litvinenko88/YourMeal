export {default} from "./FoodMenu"







// Определяем класс-родитель
class FoodMenu {
  constructor() {
    this.menuList = []; // список блюд в меню
    this.basketItems = {}; // список товаров в корзине
  }
  
  // методы для работы с меню
  addMenuItem(item) {
    this.menuList.push(item);
  }
  
  removeMenuItem(item) {
    const index = this.menuList.indexOf(item);
    if (index > -1) {
      this.menuList.splice(index, 1);
    }
  }
  
  // методы для работы с корзиной
  addItemToBasket(item) {
    if (this.basketItems[item.id]) {
      this.basketItems[item.id].quantity += 1;
    } else {
      this.basketItems[item.id] = {
        ...item,
        quantity: 1
      };
    }
  }
  
  removeItemFromBasket(item) {
    if (this.basketItems[item.id]) {
      if (this.basketItems[item.id].quantity === 1) {
        delete this.basketItems[item.id];
      } else {
        this.basketItems[item.id].quantity -= 1;
      }
    }
  }
  
  // метод для вывода меню на экран
  renderMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    
    this.menuList.forEach((item) => {
      const menuItem = item.render();
      menuContainer.append(menuItem);
    });
    
    return menuContainer;
  }
  
  // метод для вывода корзины на экран
  renderBasket() {
    const basketContainer = document.createElement('div');
    basketContainer.classList.add('basket-container');
    
    Object.values(this.basketItems).forEach((item) => {
      const basketItem = document.createElement('div');
      basketItem.classList.add('basket-item');
      
      const itemName = document.createElement('div');
      itemName.classList.add('item-name');
      itemName.textContent = item.name;
      basketItem.append(itemName);
      
      const itemQuantity = document.createElement('div');
      itemQuantity.classList.add('item-quantity');
      itemQuantity.textContent = `Quantity: ${item.quantity}`;
      basketItem.append(itemQuantity);
      
      const itemPrice = document.createElement('div');
      itemPrice.classList.add('item-price');
      itemPrice.textContent = `Price: ${item.price} rubles`;
      basketItem.append(itemPrice);
      
      basketContainer.append(basketItem);
    });
    
    return basketContainer;
  }
}

// Определяем класс-потомок для элементов меню
class Menu extends FoodMenu {
  constructor(id, name, description, price) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
  
  render() {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = this.name;
    menuItem.append(itemName);
    
    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = this.description;
    menuItem.append(itemDescription);
    
    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = `Price: ${this.price} rubles`;
    menuItem.append(itemPrice);
    
    const addButton = document.createElement('button');
    addButton.classList.add('add-to-basket');
    addButton.textContent = 'Add to Basket';
    addButton.addEventListener('click', () => {
      this.addItemToBasket(this);
    });
    menuItem.append(addButton);
    
    return menuItem;
  }
}

// Определяем класс-потомок для корзины
class Basket extends FoodMenu {
  constructor() {
    super();
  }
  
  render() {
    const basket = this.renderBasket();
    return basket;
  }
}

// Создаем экземпляр класса-потомка для элементов меню
const menuItem1 = new Menu(1, 'Cheeseburger', 'Juicy beef patty topped with melted cheese', 200);
const menuItem2 = new Menu(2, 'Fries', 'Crispy golden french fries', 100);
const menuItem3 = new Menu(3, 'Coke', 'Refreshing Coca-Cola in an icy cold cup', 80);


// Добавляем элементы меню в список блюд родительского класса
const foodMenu = new FoodMenu();
foodMenu.addMenuItem(menuItem1);
foodMenu.addMenuItem(menuItem2);
foodMenu.addMenuItem(menuItem3);

// Создаем экземпляр класса-потомка для корзины
const basket = new Basket();

// Добавляем обработчик нажатия на кнопку "Show Basket"
const showBasketButton = document.querySelector('#show-basket');
showBasketButton.addEventListener('click', () => {
  const basketContainer = document.querySelector('#basket-container');
  basketContainer.innerHTML = '';
  const basketItems = basket.render();
  basketContainer.append(basketItems);
});

// Добавляем обработчик нажатия на кнопку "Add to Basket"
const addToBasketButtons = document.querySelectorAll('.add-to-basket');
addToBasketButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const basketCount = document.querySelector('#basket-count');
    const basketTotal = document.querySelector('#basket-total');
    
    basketCount.textContent = Object.keys(basket.basketItems).length;
    let total = 0;
    Object.values(basket.basketItems).forEach((item) => {
      total += item.price * item.quantity;
    });
    basketTotal.textContent = Total: ${total} rubles;
  });
});

// Выводим меню на экран
const menuContainer = document.querySelector('#menu-container');
menuContainer.append(foodMenu.renderMenu());

