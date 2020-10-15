import { FavoriteAmount, updateModal } from './beer.services.js';


export const BODY_ELEMENT = document.querySelector('body');

export const MAIN_ELEMENT = document.querySelector('main');

export const keyEnter = 13;

export const keyEscape = 27;

export const insertPosition = {
  BEFORE_BEGIN: 'beforebegin',
  BEFORE_END: 'beforeend'
};

export function renderElement(container, element, position) {
  switch (position) {

    case  insertPosition.BEFORE_BEGIN:
      container.prepend(element);
      break;
    case insertPosition.BEFORE_END:
      container.append(element);
      break;
    default:
      container.prepend(element);
  }
}

export function createElement(template) {
  const element = document.createElement('div');

  element.innerHTML = template;

  return element.firstChild
}

export function isValid(str) {
  let pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

  if (pattern.test(str)) {
    return false
  }
  return true
}

export function noResults() {
  MAIN_ELEMENT.innerHTML = '';
  MAIN_ELEMENT.insertAdjacentHTML('afterbegin', `<p class="no-result">'There were no properties found for the given location.'</p>`)
}

export function scrollToFirst() {
  window.scrollBy({
    top: 260,
    behavior: 'smooth'
  });
}


window.onscroll = function scrollFunction() {
  const btn = document.querySelector('.go-top'),
    loadMore = document.querySelector('.load-more');

  if (document.documentElement.scrollTop > 1000) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }

  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    loadMore.style.display = "block";
  } else {
    loadMore.style.display = "none";
  }
};


export function goTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

window.favoriteBeer = [];


export function autoCloseModal(modal) {

  if (!window.favoriteBeer.length) {
    modal.style.display = 'none';
  }
}

export function showOrHideFavoriteButton(btn) {

  if (!window.favoriteBeer.length) {
    btn.style.opacity = '0.2';
  } else {
    btn.style.opacity = '1';
  }
}

export function addOrRemoveFromFavorite(product, btn) {

  if (product.stateBtn) {
    buttonTrue(product, btn)

  } else {
    buttonFalse(product, btn)
  }
}

export function buttonTrue(product, btn) {
  product.stateBtn = !product.stateBtn;
  window.favoriteBeer.push(product);
  localStorage.setItem('localFavorite', JSON.stringify(window.favoriteBeer));
  FavoriteAmount();
  updateModal();
  btn.innerText = 'Remove';
  btn.classList.remove('add-to-favorite');
  btn.classList.add('remove-from-favorites');
}

export function buttonFalse(product, btn) {
  product.stateBtn = !product.stateBtn;
  window.favoriteBeer = window.favoriteBeer.filter(el => el.id !== product.id);
  window.localItem = window.localItem.filter(el => el.id !== product.id);
  localStorage.setItem('localFavorite', JSON.stringify(window.favoriteBeer));

  FavoriteAmount();
  updateModal();
  btn.innerText = 'Buy';
  btn.classList.remove('remove-from-favorites')
  btn.classList.add('add-to-favorite')
}
