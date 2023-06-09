const refs = {
  bestsellerContainer: document.querySelector('.bestseller-container'),
};
export {
  getListTopBooks,
  renderMarkupBestseller,
  renderMarkupCategory,
  performListName,
  fetchcategoryByName,
  fetchTopBooks,
};
import { Loading } from 'notiflix/build/notiflix-loading-aio';

Loading.hourglass();

import bookAPI from './fetch-api/fetch-api.js';
const bookParams = new bookAPI();

async function fetchcategoryByName(name) {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/category?category=${name}`
  );
  const bookListByCategory = await response.json();

  return bookListByCategory;
}

export async function getbookListByCategory(name) {
  try {
    const bookListByCategory = await fetchcategoryByName(name);
    Loading.hourglass();

    renderMarkupCategory(name, bookListByCategory);
    Loading.remove(400);
  } catch (error) {
    console.log(error.message);
  }
}

const fetchTopBooks = async () => {
  const response = await fetch(
    'https://books-backend.p.goit.global/books/top-books'
  );
  const topBooks = await response.json();
  return topBooks;
};

const getListTopBooks = async () => {
  try {
    const topBooks = await fetchTopBooks();
    renderMarkupBestseller(topBooks);
  } catch (error) {
    console.log(error.message);
  }
};

function renderMarkupBestseller(topBooks) {
  let markup = `<h1 class="bestseller-header">
        Best Sellers <span class="bestseller-header-part">Books</span>
      </h1>`;
  topBooks.map(({ books, list_name }, i) => {
    if (i < 4) {
      markup =
        markup +
        `
          <div class="bestseller-category">
          <h3 class="bestseller-category-header">${list_name}</h3>`;

      books.map(({ _id, author, book_image, title }, index) => {
        if (index === 0) {
          markup =
            markup +
            `
             <ul class="bestseller-category-card-set">`;
        }
        markup =
          markup +
          `
            <li class="card-set-item">
              <a href="" class="bestseller-card-link">
                <article class="bestseller-card">
                  <div class="bestseller-card-thumb">
                    <img src="${book_image}" alt="book cover" />
                    <div class="bestseller-hover-button">
                      <p>quick view</p>
                    </div>
                  </div>

                  <div class="bestseller-card-content">
                    <p class="bestseller-book-name">${title}</p>
                    <p class="bestseller-author id-pointer" data-bookid="${_id}">${author}</p>
                  </div>
                </article>
              </a>
            </li>`;
        if (index === 4) {
          markup =
            markup +
            `</ul>
                     <div class="bestseller-button-container">
      <a href="" class="bestseller-see-more list-name-pointer" data-buttonid="${list_name}">see more</a>
      </div>
      </div>`;
        }
      });
    }
  });

  refs.bestsellerContainer.innerHTML = markup;
  Loading.remove();
}
function onClickBestseller(event) {
  event.preventDefault();
  const eventTarget = event.target.parentElement.parentElement.parentElement;
  const isBookClicked =
    eventTarget.classList.contains('bestseller-card-link') ||
    eventTarget.classList.contains('bestseller-category-card-set') ||
    eventTarget.classList.contains('card-set-item') ||
    eventTarget.classList.contains('bestseller-card') ||
    eventTarget.classList.contains('category-card-link') ||
    eventTarget.classList.contains('category-card-set') ||
    eventTarget.classList.contains('category-card-set-item') ||
    eventTarget.classList.contains('category-card');
  const isButtonClicked = event.target.classList.contains(
    'bestseller-see-more'
  );
  let bookId = eventTarget.querySelector('.id-pointer').dataset.bookid;
  let listName = event.target.dataset.buttonid;

  if (!(isBookClicked || isButtonClicked)) {
    return;
  }

  if (isBookClicked) {
    // console.log(bookId);
    // ********* логика модального вікна, вибраної кніжки *****************
    bookParams.getBookById(bookId).then(book => {
      // console.log(book);
      // bookModal.renderShops(book);
      bookModal.hangLinks(book);
      bookTitle.textContent = book.title;
      bookAuthor.textContent = book.author;
      description.textContent =
        book.description === '' ? 'No description' : book.description;
      ModalBookCover.style.backgroundImage = `url('${book.book_image}')`;
      bookModal.classList.toggle('is-hidden');

      document.addEventListener('keydown', funHelp);

      bookModal.shopList = JSON.parse(
        localStorage.getItem(bookModal.KEY_SHOP_LIST)
      );

      if (bookModal.shopList === null || !bookModal.has(book._id)) {
        shoppingBtn.textContent = 'add to shopping list';
        shoppingBtn.nextElementSibling.style.display = 'none';
      } else {
        shoppingBtn.textContent = 'remove from the shopping list';
        shoppingBtn.nextElementSibling.style.display = 'block';
      }

      shoppingBtn.settingsBook = {
        id: book._id,
        title: book.title,
        author: book.author,
        description: book.description,
        book_image: book.book_image,
        buy_links: book.buy_links,
      };

      if (bookModal.shopList === null) {
        bookModal.shopList = {};
        bookModal.shopList[book._id] = shoppingBtn.settingsBook;
      } else if (bookModal.has(book._id)) {
      }
      // shoppingBtn.settingsBook = settingsBook;

      shoppingBtn.addEventListener('click', onClickShoppingBtn);
    });

    const modalCloseBtn = bookModal.children[0].children[0];

    bookModal.addEventListener('click', onCloseModal);
    modalCloseBtn.addEventListener('click', onCloseModal);

    function onCloseModal() {
      bookModal.classList.toggle('is-hidden');
      modalCloseBtn.removeEventListener('click', onCloseModal);
      bookModal.removeEventListener('click', onCloseModal);
      document.removeEventListener('keydown', funHelp);
      shoppingBtn.removeEventListener('click', onClickShoppingBtn);
    }

    function onClickShoppingBtn(event) {
      // console.log(event.target.settingsBook);
      const selectBook = event.target.settingsBook;
      bookModal.shopList = JSON.parse(
        localStorage.getItem(bookModal.KEY_SHOP_LIST)
      );

      if (bookModal.shopList === null) {
        bookModal.shopList = {};
      }
      console.log('bookModal.shopList: ', bookModal.shopList);
      console.log(Object.keys(bookModal.shopList).length);
      if (
        bookModal.shopList === null ||
        Object.keys(bookModal.shopList).length === 0
      ) {
        bookModal.shopList = {};
        bookModal.shopList[selectBook.id] = selectBook;
        localStorage.setItem(
          bookModal.KEY_SHOP_LIST,
          JSON.stringify(bookModal.shopList)
        );
        onCloseModal();
        return;
      } else if (bookModal.has(selectBook.id)) {
        if (localStorage.getItem(bookModal.KEY_SHOP_LIST) === null) {
          localStorage.setItem(
            bookModal.KEY_SHOP_LIST,
            JSON.stringify(bookModal.shopList)
          );
          onCloseModal();
          return;
        }
        bookModal.shopList = JSON.parse(
          localStorage.getItem(bookModal.KEY_SHOP_LIST)
        );
        delete bookModal.shopList[selectBook.id];
        localStorage.setItem(
          bookModal.KEY_SHOP_LIST,
          JSON.stringify(bookModal.shopList)
        );
      } else if (!bookModal.has(selectBook.id)) {
        bookModal.shopList = JSON.parse(
          localStorage.getItem(bookModal.KEY_SHOP_LIST)
        );
        bookModal.shopList[selectBook.id] = selectBook;
        localStorage.setItem(
          bookModal.KEY_SHOP_LIST,
          JSON.stringify(bookModal.shopList)
        );
      } else {
        localStorage.setItem(
          bookModal.KEY_SHOP_LIST,
          JSON.stringify(bookModal.shopList)
        );
      }
      onCloseModal();
    }

    function funHelp(event) {
      if (event.code === 'Escape') onCloseModal();
    }
    // *********************************************************************
  }
  if (isButtonClicked) {
    getbookListByCategory(listName);
  }
}

function renderMarkupCategory(name, listBooks) {
  let markup = `<div class="category-container">
  <h2 class="category-header">${performListName(name)}</h2>
  <ul class="category-card-set">`;
  listBooks.map(({ _id, author, book_image, title }) => {
    markup =
      markup +
      `<li class="category-card-set-item">
       <a href="" class="category-card-link">
         <article class="category-card">
             <div class="category-card-thumb">
                 <img src="${book_image}" />
                 <div class="category-hover-button">
                     <p>quick view</p>
                 </div>
             </div>

             <div class="category-card-content">
                 <p class="category-book-name">${title}</p>
                 <p class="category-author id-pointer" data-bookid="${_id}">${author}</p>
             </div>
         </article>
       </a>
      </li>`;
  });
  markup =
    markup +
    ` </ul>
  </div>`;

  refs.bestsellerContainer.innerHTML = markup;
}

function performListName(listName) {
  const array = [...listName];
  let indexOfSpace = [];
  let lastWord = [];
  let firstWords = [];

  array.map((item, i) => {
    if (item === ' ') {
      indexOfSpace.push(i);
    }
  });
  lastWord = array.slice(
    indexOfSpace[indexOfSpace.length - 1] + 1,
    array.length
  );
  firstWords = array.slice(0, indexOfSpace[indexOfSpace.length - 1] + 1);
  return `${firstWords.join(
    ''
  )}<span class="bestseller-header-part">${lastWord.join('')}</span>`;
}

getListTopBooks();
refs.bestsellerContainer.addEventListener('click', onClickBestseller);
