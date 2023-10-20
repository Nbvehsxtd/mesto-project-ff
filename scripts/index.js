const placesList = document.querySelector('.places__list');
const template = document.querySelector('#card-template').content; 

initialCards.forEach(function (item) {
const name = item.name;
const link = item.link;
addCard(name, link);
});

function addCard(name, link) {
  const card = template.cloneNode(true);
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = name + ', фото';
  placesList.append(card);
};
  
document.querySelector('body').onclick = function(e) {
  if(e.target.className != 'card__delete-button') return;
  const item = e.target.closest('.places__item');
  item.remove();
};