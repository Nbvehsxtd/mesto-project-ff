// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки
     
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

////////////////////////////////////////////////////////////////////

//const ulHtml = document.querySelector('.places__list');
//const template = document.querySelector('#card-template').content;

//initialCards.forEach(function (element) {
//const t = template.cloneNode(true);
//t.querySelector('.card__title').textContent = element.name;
//t.querySelector('.card__image').src = element.link;
//ulHtml.append(t)
//});

//const deleteButton = document.querySelector('.card__delete-button');

//deleteButton.addEventListener('click', function () {
//const listItem = deleteButton.closest('.places__item');
//listItem.remove();
//});
//

const ulHtml = document.querySelector('.places__list');
const template = document.querySelector('#card-template').content;

initialCards.forEach(function (item) {
    const t = template.cloneNode(true);
    t.querySelector('.card__title').textContent = item.name;
    t.querySelector('.card__image').src = item.link;
    ulHtml.append(t)
});

  const deleteButton = document.querySelectorAll('.card__delete-button')

  deleteButton.forEach(function(btn) {
    deleteButton.addEventListener('click', function () {
    const listItem = deleteButton.closest('.places__item');
    listItem.remove();
    })
  });


