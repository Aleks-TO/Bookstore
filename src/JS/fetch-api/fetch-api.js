import axios from 'axios';

export default class ApiBook {
  API_URL = 'https://books-backend.p.goit.global/books';
  constructor() {}
  async getCategoryList() {
    return (await axios.get(`${this.API_URL}/category-list`)).data;
  }
  async getTopBooks() {
    return (await axios.get(`${this.API_URL}/top-books`)).data;
  }
  async getBooksOfCategory(selectedCategory) {
    return (
      await axios.get(`${this.API_URL}/category?category=${selectedCategory}`)
    ).data;
  }
  async getBookById(bookId) {
    return (await axios.get(`${this.API_URL}/${bookId}`)).data;
  }
}
