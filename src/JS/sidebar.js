const categoryList = document.querySelector('.siteBar-category-list');
const allCategoryBTN = document.getElementById('data-category-id');
 
// allCategoryBTN.addEventListener('click', onClickBestseller);

async function fetchBooks() {
    try {
      const response = await fetch("https://books-backend.p.goit.global/books/category-list");
      const books = await response.json();
      
      const makeupListCategory = books.map((book) => {
        return renderBookList(book);
      }).join('');
      
      console.log(books);
      categoryList.insertAdjacentHTML("beforeend", makeupListCategory);
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderBookList({ list_name }) {
    return `<li class="siteBar-category-item"><a class="siteBar-item-link" href="#">${list_name}</a></li>`;
  }
  
  fetchBooks();
  