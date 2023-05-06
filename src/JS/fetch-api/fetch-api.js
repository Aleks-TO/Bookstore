import axios from 'axios';

class ApiBook {
  API_URL = 'https://books-backend.p.goit.global/books';
  constructor() {}
  async getCategoryList() {
    const { data } = await axios.get(`${this.API_URL}/category-list `);
    return data;
  }
}
const api = new ApiBook();
console.log(api.getCategoryList());
