import { AbstractComponent } from './abstract.component.js';

export class CounterComponent extends AbstractComponent{
  constructor() {
    super();
  }

  _getTemplate() {
    return (`<p class="count">Favorites</p>`)
  }
}