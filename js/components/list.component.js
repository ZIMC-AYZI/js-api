import { AbstractComponent } from './abstract.component.js';
import { ItemComponent } from './item.component.js';
import { insertPosition, renderElement } from '../utils.js';


export class ListComponent extends AbstractComponent{
  constructor(BeerData) {
    super();
    this.data = BeerData;
  }
  _afterCreate() {
    this.render(this.data)
  }
  addEventListeners() {

  }

  render(array) {

    array.forEach((beer) => {
      const itemComponent = new ItemComponent(beer),
        itemElement = itemComponent.getElement();
      renderElement(this.getElement(),itemElement,insertPosition.BEFORE_END);
    })
  }

  _getTemplate() {
    return (`<ul class="list"></ul>`)
  }

}