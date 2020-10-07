import { AbstractComponent } from './abstract.component.js';


export class ItemComponent extends AbstractComponent{
  constructor(beer) {
    super();
    this.beer = beer;
    this.image_url = beer.image_url;
    this.name = beer.name;
    this.id = beer.id;
    this.ibu = beer.ibu;
    this.description = beer.description
  }
  _afterCreate() {

  }

  _getTemplate() {
    return (`<li class="list-item">
    <div class="info">
      <p class="beer-name">Beer-name : ${this.name}</p>
        <div class="beer-image">
        <img src="${this.image_url}" alt="">
        </div>
      <p class="beer-id">Price : ${this.ibu}</p>
      <p class="description">${this.description}</p>
    </div>
    </li>`)
  }
}