const refs = { bestsellerContainer: document.querySelector(".bestseller-container"), }

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
    renderMarkupBestseller(topBooks)
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
        markup + `
          <div class="bestseller-category">
          <h3 class="bestseller-category-header">${list_name}</h3>`;


      books.map(({ _id, author, book_image, title }, index) => {
        if (index === 0) {
          markup = markup + `
             <ul class="bestseller-category-card-set">`;
        }
        markup =
          markup +
          `               
            <li class="card-set-item" data-bookid="${_id}">
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
                    <p class="bestseller-author">${author}</p>
                  </div>
                </article>
              </a>
            </li>`;
        if (index === 4) {
          markup =
            markup +
            `</ul>
                     <div class="bestseller-button-container">
      <a href="" class="bestseller-see-more">see more</a>
      </div>
      </div>`;
        }

      });


    }
  });
  
  refs.bestsellerContainer.innerHTML = markup
}
function onClickBestseller(event) {
  event.preventDefault();
  // if (event.target.nodeName !== "BUTTON" || event.target.nodeName !=="") {
  //   return;
  // }
  console.dir(event.target.parentElement.parentElement.parentElement)
  // console.dir(event.target.parentElement.parentElement.parentElement.parentElement.dataset.bookid)
}
getListTopBooks();
refs.bestsellerContainer.addEventListener("click",onClickBestseller)
