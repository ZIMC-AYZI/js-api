import { AbstractComponent } from './abstract.component.js';

export class CounterComponent extends AbstractComponent{
  constructor() {
    super();

  }
  _afterCreate() {

  }

  _getTemplate() {
    return (`<p class="count">Favorites ${window.favoriteBeer.length}</p>`)
  }
}