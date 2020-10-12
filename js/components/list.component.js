import { AbstractComponent } from './abstract.component.js';
import { ItemComponent } from './item.component.js';
import { insertPosition, renderElement, MAIN_ELEMENT } from '../utils.js';
import { LoadComponent } from './load.component.js';


export class ListComponent extends AbstractComponent{
  constructor(BeerData) {
    super();
    this.data = BeerData;
  }

  _afterCreate() {
    const loadComponent = new LoadComponent(),
      loadElement = loadComponent.getElement();
    renderElement(MAIN_ELEMENT,loadElement,insertPosition.BEFORE_BEGIN);
    loadComponent.addEventListeners()
    this.render(this.data)
  }
  addEventListeners() {
    window.addEventListener('update',this.dataChange.bind(this));
  }

  dataChange(e) {
    this.getElement().innerHTML = ''
    this.render(e.detail.data)
  }

  render(array) {

    array.forEach((beer) => {
      const itemComponent = new ItemComponent(beer),
        itemElement = itemComponent.getElement();
      renderElement(this.getElement(),itemElement,insertPosition.BEFORE_END);
    });

  }

  _getTemplate() {
    return (`<ul class="list"></ul>`)
  }
}