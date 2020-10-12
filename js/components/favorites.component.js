import { AbstractComponent } from './abstract.component.js';
import { insertPosition, renderElement } from '../utils.js';
import { CounterComponent } from './counter.component.js';


export class FavoritesComponent extends AbstractComponent{
  constructor() {
    super();

  }
  _afterCreate() {

  }
  addEventListeners() {
    window.addEventListener('update-count', this.dataChange.bind(this));
    this.getElement().addEventListener('click', this.showModal.bind(this));
  }
  dataChange(e){
    this.render(e.detail.data);

  }

  render() {
    this.getElement().innerHTML = '';
    const counterComponent = new CounterComponent(),
      counterElement = counterComponent.getElement();

    renderElement(this.getElement(),counterElement,insertPosition.BEFORE_END)
  }


  showModal() {

    this.getModal().style.display = 'flex';
  }
  getModal() {
    return document.querySelector('.overlay')
  }


  _getTemplate() {
    return (`<button class="favorite-btn">
                        Favorites
                            </button>`)
  }
}