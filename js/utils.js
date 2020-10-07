export const BODY_ELEMENT = document.querySelector('body');
export const MAIN_ELEMENT = document.querySelector('main');
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

  if (pattern.test(str)){

    return false
  } return true

}
export function noResults() {
  MAIN_ELEMENT.innerHTML = `<p class="no-result">'There were no properties found for the given location.'</p>`
}

export function scrollToFirst() {
  window.scrollBy({
    top: 250,
    behavior: 'smooth'
  });
}