import { AbstractComponent } from './abstract.component.js';
import { FavoriteAmount, updateMainAfterModal, deleteFromModal } from '../beer.services.js';
import { autoCloseModal } from '../utils.js';


export class FavoriteItemsComponent extends AbstractComponent {
  constructor(beer) {
    super();
    this.beer = beer
  }

  addEventListeners() {
    this.getDeleteButton().addEventListener('click', this.deleteCurrentFromFavorites.bind(this))
  }

  deleteCurrentFromFavorites() {
    this.beer.stateBtn = !this.beer.stateBtn;
    deleteFromModal(this.beer);
    updateMainAfterModal(this.beer);

    FavoriteAmount();
    autoCloseModal(this.getModal());


  }

  getModal() {
    return document.querySelector('.overlay')
  }

  getDeleteButton() {
    return this.getElement().querySelector('.delete-item')
  }

  _getTemplate() {
    return (`<li class="list-item-modal">
                      <div class="info-modal">
                          <p class="beer-name-modal">Beer-name : ${ this.beer.name }</p>
                          <div class="beer-image">
                          <img src="${ this.beer.image_url }" alt="">
                      </div>
                          <p class="beer-id-modal">Price : ${ this.beer.ibu }</p>
                          <p class="description-modal">${ this.beer.description }</p>
                          <button class="delete-item">Remove</button>
                      </div>
                    </li>`)
  }

}