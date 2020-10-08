import { AbstractComponent } from './abstract.component.js';



export class ItemComponent extends AbstractComponent{
  constructor(beer) {
    super();
    this.beer = beer;

  }
  _afterCreate() {

  }

  _getTemplate() {
    return (`<li class="list-item">
    <div class="info">
      <p class="beer-name">Beer-name : ${this.beer.name}</p>
        <div class="beer-image">
        <img src="${this.beer.image_url}" alt="">
        </div>
      <p class="beer-id">Price : ${this.beer.ibu}</p>
      <p class="description">${this.beer.description}</p>
    </div>
    </li>`)
  }
}