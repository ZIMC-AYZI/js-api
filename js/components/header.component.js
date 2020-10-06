import { AbstractComponent } from './abstract.component.js';


export class HeaderComponent extends AbstractComponent{
  _afterCreate() {

  }
  addEventListeners() {

  }
  getInput() {
    return document.querySelector('.search-product')
  }

  _getTemplate() {
    return (`<header class="header">
                <div class="container">
                    <div class="header-wrapper">
                            <div class="center-wrapper">
                                <div class="logo">ZIMC</div>
                                  <div class="search">
                                      <input class="search-product" type="text">
                                  </div>
                                  <div class="recent-searches">123</div>
                            </div>
                        <div class="right-side">
                            <button class="favorite-btn">
                        Favorites
                            </button>
                        </div>
                    </div>
                </div>
            </header>`)
  }
}