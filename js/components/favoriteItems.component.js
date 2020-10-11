import { AbstractComponent } from './abstract.component.js';
import { deleteFromModal } from '../beer.services.js';

export class FavoriteItemsComponent extends AbstractComponent{
  constructor(beer) {
    super();
    this.beer = beer
  }
  addEventListeners() {
    this.getDeleteButton().addEventListener('click', this.deleteCurrentFromFavorites.bind(this))
  }
  deleteCurrentFromFavorites() {
    deleteFromModal(this.beer);
    window.currentCount--
    this.getCountElement().innerHTML = 'favorites ' + window.currentCount
    console.log(favoriteBeer)
  }
  getCountElement() {
    return document.querySelector('.count')
  }
  getDeleteButton() {
    return this.getElement().querySelector('.delete-item')
  }
  _getTemplate() {
    return  (`<li class="list-item-modal">
                      <div class="info-modal">
                          <p class="beer-name-modal">Beer-name : ${this.beer.name}</p>
                          <div class="beer-image">
                          <img src="${this.beer.image_url}" alt="">
                      </div>
                          <p class="beer-id-modal">Price : ${this.beer.ibu}</p>
                          <p class="description-modal">${this.beer.description}</p>
                          <button class="delete-item">delete</button>
                      </div>
                    </li>`)
  }

}