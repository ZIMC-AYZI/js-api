import { AbstractComponent } from './abstract.component.js';
import { showOrHideFavoriteButton } from '../utils.js'
import { FavoriteAmount, updateModal } from '../beer.services.js'






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
    this.getBuyBtn().addEventListener('click',this.addItemToFavorite.bind(this))
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
    const beerBtn = this.getBuyBtn();

    if (this.beer.stateBtn) {
      this.beer.stateBtn = !this.beer.stateBtn;
      window.favoriteBeer.push(this.beer);
      FavoriteAmount();
      updateModal();
      beerBtn.innerText = 'Remove';
      beerBtn.classList.remove('add-to-favorite')
      beerBtn.classList.add('remove-from-favorites');

    } else {
      this.beer.stateBtn = !this.beer.stateBtn;
      window.favoriteBeer = window.favoriteBeer.filter(el => el.id !== this.beer.id);
      FavoriteAmount();
      updateModal();
      beerBtn.innerText = 'Buy';
      beerBtn.classList.remove('remove-from-favorites')
      beerBtn.classList.add('add-to-favorite')

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
      <button class="add" value="buy">buy</button>
      <p class="description">${this.beer.description}</p>
    </div>
    </li>`)
  }
}