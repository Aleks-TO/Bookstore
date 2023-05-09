const bookModal = document.getElementById('bookModal');

const ModalBookCover = document.getElementById('ModalBookCover');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const description = document.getElementById('description');

const closeBtn = document.querySelector('.closeBtn');
const icon = document.querySelector('#bookModal .shops-icons');
// console.log(icon.children[0].children[0].href);

// icon.children[1].style.display = 'none';
// icon.children[2].style.display = 'none';

bookModal.hangLinks = function (book) {
  icon.children[0].children[0].href = book.buy_links[0].url;
  icon.children[1].children[0].href = book.buy_links[1].url;
  icon.children[2].children[0].href = book.buy_links[2].url;
};
