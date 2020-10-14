import { AbstractComponent } from './abstract.component.js';

import { showOrHideFavoriteButton } from '../utils.js'
import { CurrentModalComponent } from './currentmodal.component.js';

import { showOrHideFavoriteButton, buttonToRemove, buttonToAdd } from '../utils.js'
import { FavoriteAmount, updateModal } from '../beer.services.js'







export class ItemComponent extends AbstractComponent{
  constructor(beer) {
    super();
    this.beer = beer;



  }
  _afterCreate() {

    this.someFunc();

  }
  addEventListeners() {
    this.getBuyBtn().addEventListener('click',this.addItemToFavorite.bind(this));
    this.getTitle().addEventListener('click', this.showModalOnClickedItem.bind(this));
  }

    if (!this.beer.stateBtn){
      buttonToRemove(this.getBuyBtn())
    }
  }
  addEventListeners() {
    this.getBuyBtn().addEventListener('click',this.addItemToFavorite.bind(this))


  }

  addItemToFavorite() {

    addOrRemoveFromFavorite(this.beer,this.getBuyBtn())
    showOrHideFavoriteButton(this.getFavoriteBtn())
  }

  showModalOnClickedItem() {
    this.createCurrentItemModal(this.beer)
    this.getModal().style.display = 'block';
  }


    if (this.beer.stateBtn) {
      this.beer.stateBtn = !this.beer.stateBtn;
      window.favoriteBeer.push(this.beer);
      FavoriteAmount();
      updateModal();
      buttonToRemove(this.getBuyBtn())

    } else {
      this.beer.stateBtn = !this.beer.stateBtn;
      window.favoriteBeer = window.favoriteBeer.filter(el => el.id !== this.beer.id);
      FavoriteAmount();
      updateModal();
      buttonToAdd(this.getBuyBtn())


  getModal() {
    return document.querySelector('.current-modal-overlay')
  }

  getTitle() {
    return this.getElement().querySelector('.beer-name')
  }

  createCurrentItemModal(obj) {
    const currentModalComponent = new CurrentModalComponent(obj),
      currentModalElement = currentModalComponent.getElement();
    renderElement(BODY_ELEMENT,currentModalElement,insertPosition.BEFORE_BEGIN);
    currentModalComponent.addEventListeners();
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
      <button class="add" value="buy">buy</button>
      <p class="description">${this.beer.description}</p>
    </div>
    </li>`)
  }
}