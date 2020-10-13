import { AbstractComponent } from './abstract.component.js';
import { insertPosition, renderElement } from '../utils.js';
import { FavoriteItemsComponent } from './favoriteItems.component.js';

export class ModalComponent extends AbstractComponent {
  constructor() {
    super();


  }

  addEventListeners() {
    window.addEventListener('delete-item', this.dataChange.bind(this));
    window.addEventListener('update-items-modal', this.dataChange.bind(this));
    this.getCloseModalBtn().addEventListener('click', this.closeModalWindow.bind(this));
  }

  _afterCreate() {

    this.render(window.favoriteBeer)
  }

  dataChange(e) {
    this.render(e.detail.data);
  }

  getCloseModalBtn() {
    return this.getElement().querySelector('.close-modal')
  }

  closeModalWindow() {
    this.getModal().style.display = 'none';
  }

  getModal() {
    return document.querySelector('.overlay')
  }

  getContainerForFavorite() {
    return this.getElement().querySelector('.modal-list')
  }

  render(array) {
    this.getContainerForFavorite().innerHTML = '';
    array.forEach((el) => {
      const favoriteItemsComponent = new FavoriteItemsComponent(el),
        favoriteItemsElement = favoriteItemsComponent.getElement();

      renderElement(this.getContainerForFavorite(), favoriteItemsElement, insertPosition.BEFORE_END);
      favoriteItemsComponent.addEventListeners()
    });
  }

  _getTemplate() {
    return (`<div class="overlay">
                <div class="container">
                    <div class="modal-wrapper">
                        <button class="close-modal">close favorites</button>
                        <ul class="modal-list"></ul>
                    </div>
                </div>
              </div>`)
  }
}