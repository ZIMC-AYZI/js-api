import { AbstractComponent } from './abstract.component.js';
import { showOrHideFavoriteButton, addItem, deleteItem } from '../utils.js'





export class ItemComponent extends AbstractComponent{
  constructor(beer) {
    super();
    this.beer = beer;

  }
  _afterCreate() {

  }
  addEventListeners() {
    this.getBuyBtn().addEventListener('click',this.addItemToFavorite.bind(this))
  }
  getCountElement() {
    return document.querySelector('.count')
  }
  addItemToFavorite() {

    if (this.getBuyBtn().innerHTML === 'buy'){
      window.favoriteBeer.push(this.beer);
      addItem(this.getBuyBtn());
      this.getCountElement().innerHTML = window.currentCount

    } else  if (this.getBuyBtn().innerHTML === 'delete-item'){
      window.favoriteBeer = window.favoriteBeer.filter(el => el.id !== this.beer.id);
      deleteItem(this.getBuyBtn());
      this.getCountElement().innerHTML = window.currentCount
    }
    showOrHideFavoriteButton(this.getFavoriteBtn())
  }


  getFavoriteBtn() {
    return document.querySelector('.favorite-btn')
  }

  getBuyBtn() {
    return this.getElement().querySelector('.add')
  }

  _getTemplate() {
    return (`<li class="list-item">
    <div class="info">
      <p class="beer-name">Beer-name : ${this.beer.name}</p>
        <div class="beer-image">
        <img src="${this.beer.image_url}" alt="">
        </div>
      <p class="beer-id">Price : ${this.beer.ibu}</p>
      <button class="add">buy</button>
      <p class="description">${this.beer.description}</p>
    </div>
    </li>`)
  }
}