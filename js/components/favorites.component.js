import { AbstractComponent } from './abstract.component.js';
import { ModalComponent } from './modal.component.js';
import { BODY_ELEMENT, insertPosition, renderElement } from '../utils.js';
import { CounterComponent } from './counter.component.js';

export class FavoritesComponent extends AbstractComponent{
  constructor(beer) {
    super();
    this.beer = beer
  }
  _afterCreate() {
    this.createCountOfFavorites()
  }
  createCountOfFavorites() {
    this.getElement().innerHTML = '';
    const counterComponent = new CounterComponent(window.favoriteBeer),
      counterElement = counterComponent.getElement();
    renderElement(this.getElement(),counterElement,insertPosition.BEFORE_END)
  }

  addEventListeners(){
    this.getElement().addEventListener('click', this.showModal.bind(this));

  }
  showModal() {
    const modalComponent = new ModalComponent(window.favoriteBeer),
      modalElement = modalComponent.getElement();
    renderElement(BODY_ELEMENT, modalElement, insertPosition.BEFORE_BEGIN);
    modalComponent.addEventListeners();
    this.getModal().style.display = 'flex';
  }
  getModal() {
    return document.querySelector('.overlay')
  }


  _getTemplate() {
    return (`<button class="favorite-btn">
                        Favorites
                            </button>`)
  }
}