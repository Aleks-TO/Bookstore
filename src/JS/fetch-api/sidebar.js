const categoryList = document.querySelector('.siteBar-category-list');




     fetch(`https://books-backend.p.goit.global/books/category-list`)
    .then(response => response.json()).then((books) => {
        const makeupListCategory = books.map((book) => {
            return renderBookList(book);
        }).join('');
        console.log(books);
        categoryList.insertAdjacentHTML("beforeend", makeupListCategory);
    });
          



function renderBookList({list_name}) {
    
        return `<li class="siteBar-category-item">${list_name}</li>`;

    
}