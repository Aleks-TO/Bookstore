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
    let markup = `<h1 class="bestseller-header">
        Best Sellers <span class="bestseller-header-part">Books</span>
      </h1>
      <div class="bestseller-category">`;
    topBooks.map(({ books, list_name }, i) => {
      if (i < 3) {
        
        markup =
          markup + `<h3 class="bestseller-category-header">${list_name}</h3>`;
        // console.log(`_____________________${i}____________________`,markup)

        books.map(({ _id, author, book_image, title }, index) => {
          if (index === 0) {
            markup = markup + `<ul class="bestseller-category-card-set">`;
          }
          markup =
            markup +
            `               
            <li class="card-set-item" id="${_id}">
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
                     <div class="bestseller-button-container" >
                        <a href="" class="bestseller-see-more" id="${_id}">see more</a>
          
                      </div>
          
                    </div>`;
          }
          // console.log("__________________________________",markup)
        });

        // if (i===3) {
        //   markup =  markup +`</div>`
        //   return
        // }
      }
    });
    // console.log(markup)

    console.log(markup);
  } catch (error) {
    console.log(error.message);
  }
};

getListTopBooks();
