const burgerMenu = document.querySelector('.burger-menu'); // Бургер-меню

const modalOverlay = document.querySelector('.modal-overlay'); // Модальне-вікно

burgerMenu.addEventListener('click', function () {
  // Прослуховувач події на закриття і відкриття модального вікна
  modalOverlay.classList.toggle('show');
});
