import axios from "axios";

class CatalogFood {
  async getFood(url) {
    try {
      const response = axios.get(url);

      return (await response).data;
    } catch (error) {
      console.log(`У нас ошибка ${error}`);
    }
  }
}

export const catalogFood = new CatalogFood();
