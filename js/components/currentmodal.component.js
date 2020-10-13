import { AbstractComponent } from './abstract.component.js';
import { showOrHideFavoriteButton, keyEscape, addOrRemoveFromFavorite } from '../utils.js';
import { update } from '../beer.services.js';

export class CurrentModalComponent extends AbstractComponent {
  constructor(beer) {
    super();
    this.beer = beer
  }

  _afterCreate() {

    if (!this.beer.stateBtn) {
      this.getBuyBtn().innerText = 'Remove';
      this.getBuyBtn().classList.remove('add-to-favorite')
      this.getBuyBtn().classList.add('remove-from-favorites');
    }
  }

  addEventListeners() {
    window.addEventListener('keydown', this.closeCurrentModalWindow.bind(this));
    this.getCloseModalBtn().addEventListener('click', this.closeCurrentModalWindow.bind(this));
    this.getBuyBtn().addEventListener('click', this.addToFavorite.bind(this));
  }

  getCloseModalBtn() {
    return this.getElement().querySelector('.current-modal-close')
  }

  closeCurrentModalWindow(e) {

    if (e.keyCode === keyEscape || e.target === this.getCloseModalBtn()) {
      this.getModal().style.display = 'none';
      this.getElement().remove()
    }
  }

  addToFavorite() {

    addOrRemoveFromFavorite(this.beer, this.getBuyBtn());
    showOrHideFavoriteButton(this.getFavoriteBtn());
    update()
  }

  getFavoriteBtn() {
    return document.querySelector('.favorite-btn')
  }

  getBuyBtn() {
    return this.getElement().querySelector('.add')
  }


  getModal() {
    return document.querySelector('.current-modal-overlay')
  }


  _getTemplate() {
    return (`<div class="current-modal-overlay">
                <div class="container">
                    <div class="current-modal-wrapper">
                        <div class="modal-left-side">
                          <div class="current-modal-beer-image">
                              <img src="${ this.beer.image_url }" alt="">
                          </div>
                        </div>
                        <div class="modal-right-side">
                            <button class="current-modal-close">X</button>
                        <div class="info">
                            <p class="current-modal-beer-name">Beer-name : ${ this.beer.name }</p>
                          <p class="current-modal-beer-id">Price : ${ this.beer.ibu }</p>
                          <button class="add">buy</button>
                          <p class="current-modal-description">${ this.beer.description }</p>
                         </div>
                        </div>
                </div>
              </div>`)
  }
}