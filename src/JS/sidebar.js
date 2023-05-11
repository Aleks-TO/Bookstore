import { getListTopBooks } from './bestseller.js';
import { getbookListByCategory,renderMarkupBestseller,renderMarkupCategory,performListName,fetchcategoryByName,fetchTopBooks } from './bestseller.js';

const categoryList = document.querySelector('.siteBar-category-list');



categoryList.addEventListener('click', onClickCategory);



function onClickCategory(event) {
    event.preventDefault();
    const eventTarget = event.target;
    const onCategoryClick = eventTarget.classList.contains('siteBar-item-link');
    const allCategoryList = eventTarget.classList.contains('siteBar-item-links');
    
    let listName = event.target.textContent;
    
    if (!(onCategoryClick || allCategoryList)) {
        return
    }
    if (allCategoryList) {
        getListTopBooks()
    }
    if (onCategoryClick) {
        getbookListByCategory(listName)
         
       }
   
};




async function fetchCategories() {
    try {
      const response = await fetch("https://books-backend.p.goit.global/books/category-list");
      const books = await response.json();
      
      const makeupListCategory = books.map((book) => {
        return renderBookList(book);
      }).join('');
      
      // console.log(books);
      categoryList.insertAdjacentHTML("beforeend", makeupListCategory);
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderBookList({ list_name }) {
    return `<li class="siteBar-category-item"><a class="siteBar-item-link" href="#" data-buttonid="${list_name}">${list_name}</a></li>`;
  }
  
  fetchCategories();
  
/*підсвітка*/

window.onload = function() {
    document.querySelector('.siteBar-item-links').focus();
};

  bestsellerContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains("bestseller-see-more")) {
        let category = event.target.dataset.buttonid;
        getbookListByCategory(category);
    highlightCategory(category);
    
    }
    });

    function highlightCategory(category) {
        const allCategoryLink = document.querySelectorAll(".siteBar-category-link");
        allCategoryLink.forEach(link => {
            if(link.dataset.category === category) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
            console.log(link.dataset.buttonid);
        })
    }