import { AbstractComponent } from './abstract.component.js';

export class FavoritesComponent extends AbstractComponent{



  _getTemplate() {
    return (`<button class="favorite-btn">
                        Favorites <p class="count"></p>
                            </button>`)
  }

}