import { AbstractComponent } from './abstract.component.js';
import { getByNameBeer } from '../beer.services.js'
import { insertPosition, MAIN_ELEMENT, renderElement, noResults, isValid, scrollToFirst } from '../utils.js';
import { ListComponent } from './list.component.js';


export class HeaderComponent extends AbstractComponent{
  _afterCreate() {

  }
  addEventListeners() {
    this.getInput().addEventListener('keypress', this.checkOnValidValue.bind(this));
    this.getSearchBtn().addEventListener('click', this.checkOnValidValue.bind(this));
  }
  getInput() {
    return document.querySelector('.search-product')
  }
  getSearchBtn() {
    return document.querySelector('.search-ico')
  }
  getRecentSearch() {
    return this.getElement().querySelector('.recent-searches-value')
  }
  checkOnValidValue(e) {
    if (e.keyCode === 13 || e.target === this.getSearchBtn()){
      this.findBeer()

    }
  }


  findBeer() {
    const value = this.getInput().value;

    if (isValid(value)){

      this.getInput().style.outline = 'none';
      this.getRecentSearch().innerHTML = value;

       if (value) {
        this.showAllBeer(getByNameBeer(value));
      }
    } else {
      this.getInput().style.outline = '2px solid red'

    }
  }

  createListComponent(data) {
    MAIN_ELEMENT.innerHTML = '';
    const listComponent = new ListComponent(data),
      listElement = listComponent.getElement();
    renderElement(MAIN_ELEMENT,listElement,insertPosition.BEFORE_BEGIN);
    listComponent.addEventListeners();
  }

  showAllBeer(typeOfSearch) {
    typeOfSearch
      .then(res=> res.json())
      .then((data) => {
        if (data.length === 0){
          noResults()
        } else {
          this.createListComponent(data);
          scrollToFirst();
          console.log('myData',data);
        }
      })
  }

  _getTemplate() {
    return (`<header class="header">
                <div class="container">
                    <div class="header-wrapper">
                            <div class="center-wrapper">
                                <div class="logo">XMELEVAR</div>
                                  <div class="search">
                                      <input class="search-product" type="text">
                                      <button class="search-ico">
                                      </button>
                                  </div>
                                  <div class="recent-searches">
                                    <p class="recent-searches-value"></p>
                                  </div>
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