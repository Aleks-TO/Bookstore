
//тут має бути масив з ЛОкал стореджа!!! не забудьте розпарсити
// const arr = [
//   {
//     id: '643282b1e85766588626a0ba',
//     title: 'THE LOVE STORIES OF THE BIBLE SPEAK',
//     author: 'Shannon Bream',
//     description:
//       'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short  drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when  David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg',
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9780063226050?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT',
//       },
//     ],
//   },
//   {
//     id: '643282b1e85766588626a0ba',
//     title: 'THE LOVE STORIES OF THE BIBLE SPEAK',
//     author: 'Shannon Bream',
//     description:
//       'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short  drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when  David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg',
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9780063226050?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT',
//       },
//     ],
//   },
//   {
//     id: '643282b1e85766588626a0ba',
//     title: 'THE LOVE STORIES OF THE BIBLE SPEAK',
//     author: 'Shannon Bream',
//     description:
//       'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short  drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when  David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg',
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9780063226050?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT',
//       },
//     ],
//   },
//   {
//     id: '643282b1e85766588626a0ba',
//     title: 'THE LOVE STORIES OF THE BIBLE SPEAK',
//     author: 'Shannon Bream',
//     description:
//       'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short  drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when  David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg',
//     buy_links: [
//       {
//         name: 'Amazon',
//         url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
//       },
//       {
//         name: 'Apple Books',
//         url: 'https://goto.applebooks.apple/9780063226050?at=10lIEQ',
//       },
//       {
//         name: 'Barnes and Noble',
//         url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050',
//       },
//       {
//         name: 'Books-A-Million',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream',
//       },
//       {
//         name: 'Bookshop',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK',
//       },
//       {
//         name: 'IndieBound',
//         url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT',
//       },
//     ],
//   },
// ];
import saveTheChildren from '../images/icons-img/books.png';
import linkBook from '../images/icons-img/book.png';
import linkAmazon from '../images/icons-img/amazon.png';
import closeSvg from '../images/img-symbols/symbol-defs.svg#icon-basket';

const arr = Object.values(JSON.parse(localStorage.getItem("BOOKSTORE_SHOP_LIST")))
const ulEl = document.querySelector('.shoping-list-ul2');


function renderList(arr) {
  const mappedArray = arr
    .map(({ id, title, author, description, book_image, buy_links }) => {
      return `<li class="shoping-list-book" id="${id}">
              <div class="shopping-list-conteiner">
                <img src="${book_image}" alt="${title}" class="test-img-css"/>
                <div class="shopping-list-information">
                  <h2 class="shoping-list-title-book">${title}</h2>
                  <p class="shoping-list-book-wrap">Hardcover fiction</p>
                  <p class="shoping-list-book-description">${description}</p>
                  <h3 class="shoping-list-book-autor">${author}</h3>
                  <div class="shopping-list-link-shop">
                    <ul class="shoping-list-ul">
                      <li class="shopping-list-link">
                        <a href="${buy_links[0].url}"target="_blank"
                          ><img
                            src="${linkAmazon}"
                            alt="amazon"
                            class="shopping-list-buy-link"
                        /></a>
                      </li>
                      <li class="shopping-list-link">
                        <a href="${buy_links[3].url}"target="_blank"
                          ><img
                            src="${linkBook}"
                            alt="book"
                            class="shopping-list-buy-link"
                        /></a>
                      </li>
                      <li class="shopping-list-link">
                        <a href="${buy_links[4].url}"target="_blank"
                          ><img
                            src="${saveTheChildren}"
                            alt=""
                            class="shopping-list-buy-link"
                        /></a>
                      </li>
                    </ul>
                  </div>
                  <button class="shopping-list-delete-book-bnt" type="button">
                    <svg class="shopping-list-icon">
                      <use
                        href="${closeSvg}"
                      ></use>
                    </svg>
                  </button>
                </div>
              </div>
            </li>`;
    })
    .join(' ');
  ulEl.innerHTML = mappedArray;
}

renderList(arr);
const bntEl = document.querySelector('.shopping-list-delete-book-bnt');
bntEl.addEventListener('click', deleteBook);

function deleteBook() {
  //видалити з локал сторедж
}
