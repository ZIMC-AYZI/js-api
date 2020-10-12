import { AbstractComponent } from './abstract.component.js';
import { showOrHideFavoriteButton } from '../utils.js'
import { CurrentModalComponent } from './currentmodal.component.js';
import { BODY_ELEMENT, insertPosition, renderElement, addOrRemoveFromFavorite } from '../utils.js';






export class ItemComponent extends AbstractComponent{
  constructor(beer) {
    super();
    this.beer = beer;
    this.beer.stateBtn = beer.stateBtn


  }
  _afterCreate() {
    this.someFunc();

  }
  addEventListeners() {
    this.getBuyBtn().addEventListener('click',this.addItemToFavorite.bind(this));
    this.getTitle().addEventListener('click', this.showModalOnClickedItem.bind(this));
  }

  someFunc() {
    const beerBtn = this.getBuyBtn();

    if (!this.beer.stateBtn){
      beerBtn.innerText = 'Remove';
      beerBtn.classList.remove('add-to-favorite')
      beerBtn.classList.add('remove-from-favorites');
    }
  }
  addItemToFavorite() {
    addOrRemoveFromFavorite(this.beer,this.getBuyBtn())
    showOrHideFavoriteButton(this.getFavoriteBtn())
  }

  showModalOnClickedItem() {
    this.createCurrentItemModal(this.beer)
    this.getModal().style.display = 'block';
  }

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