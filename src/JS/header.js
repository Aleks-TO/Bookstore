const burgerMenu = document.querySelector('.burger-menu');
const modalOverlay = document.querySelector('.modal-overlay');

burgerMenu.addEventListener('click', function () {
  modalOverlay.classList.toggle('show');
});

const shoplistBtn = document.querySelector('.shoplist-btn');
shoplistBtn.addEventListener('click', e => {
  // e.preventDefault();
  window.location.href = './shopping-list.html';
  shoplistBtn.classList.add('current');
});

const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', e => {
  // e.preventDefault();
  window.location.href = './index.html';
});
