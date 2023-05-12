import { getListTopBooks } from './bestseller.js';
import {
  getbookListByCategory,
  renderMarkupBestseller,
  renderMarkupCategory,
  performListName,
  fetchcategoryByName,
  fetchTopBooks,
} from './bestseller.js';

const categoryList = document.querySelector('.siteBar-category-list');

const bestsellerContainer = document.querySelector('.bestseller-container');
const listOfCategories = [];
categoryList.addEventListener('click', onClickCategory);

function onClickCategory(event) {
  event.preventDefault();
  const eventTarget = event.target;
  const onCategoryClick = eventTarget.classList.contains('siteBar-item-link');
  const allCategoryList = eventTarget.classList.contains('siteBar-item-links');

  let listName = event.target.textContent;

  if (!(onCategoryClick || allCategoryList)) {
    return;
  }
  if (allCategoryList) {
    getListTopBooks();
    if ((categoryList.querySelector(`.active`))!==null) {categoryList.querySelector(`.active`).classList.remove('active')}
  }
  if (onCategoryClick) {
    getbookListByCategory(listName);
    highlightCategory(listName)
  }
}

async function fetchCategories() {
  try {
    const response = await fetch(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const books = await response.json();

    const makeupListCategory = books
      .map((book,index) => {
       
        listOfCategories[index] = book.list_name
         return renderBookList(book);
      })
      .join('');

   
    categoryList.insertAdjacentHTML('beforeend', makeupListCategory);
  } catch (error) {
    console.error(error);
  }
}

function renderBookList({ list_name }) {
  return `<li class="siteBar-category-item"><a class="siteBar-item-link" href="#" data-buttonid="${list_name}">${list_name}</a></li>`;
}

fetchCategories();

/*підсвітка*/

window.onload = function () {
  document.querySelector('.siteBar-item-links').focus();
};

bestsellerContainer.addEventListener('click', event => {
  if (event.target.classList.contains('bestseller-see-more')) {
    let category = event.target.dataset.buttonid;
    
    const sortedListCategories = sortCategories(listOfCategories,category)
   
     let markup = sortedListCategories.map((categoryName)=> {
      let renderObj={list_name:categoryName}
      return renderBookList(renderObj)}
    
    )
    let markupTorender=`<li class="siteBar-category-item"><a class="siteBar-item-links" href="#">All categories</a></li>`+markup.join("");
    categoryList.innerHTML=markupTorender;
    highlightCategory(category);
  }
});

function highlightCategory(category) {
  const selectedCategory = categoryList.querySelector(`[data-buttonid="${category}"]`)
  const activeCategory = categoryList.querySelector(`.active`)
  if (activeCategory===null) {selectedCategory.classList.add('active')}
 else { if (selectedCategory.dataset.buttonid!==activeCategory.dataset.buttonid) {
 selectedCategory.classList.add('active')
 activeCategory.classList.remove('active')
 }

 }

  // const allCategoryLink = document.querySelectorAll('.siteBar-category-link');
  // allCategoryLink.forEach(link => {
  //   if (link.dataset.category === category) {
  //     link.classList.add('active');
  //   } else {
  //     link.classList.remove('active');
  //   }
  //   console.log(link.dataset.buttonid);
  // });
}
function sortCategories(categories, selectedCategory) {
let valueOffirstElenment = categories[0];
categories[(categories.indexOf(selectedCategory))]= valueOffirstElenment
categories[0]=selectedCategory

return categories

}