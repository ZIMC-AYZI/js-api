import { AbstractComponent } from './abstract.component.js';
import { request, requestSettings, DEFAULT_PAGE_SIZE } from '../beer.services.js'
import { insertPosition, MAIN_ELEMENT, keyEnter, renderElement, noResults, isValid, scrollToFirst, goTop } from '../utils.js';
import { ListComponent } from './list.component.js';
import { RecentItemComponent } from './recentItem.component.js';
import { FavoritesComponent } from './favorites.component.js';


export class HeaderComponent extends AbstractComponent{
  _afterCreate() {
    this.createFavoriteButton()
  }
  addEventListeners() {
    this.getInput().addEventListener('keypress', this.checkOnValidValue.bind(this));
    this.getSearchBtn().addEventListener('click', this.checkOnValidValue.bind(this));
    this.getGoTopBtn().addEventListener('click', goTop.bind(this));
  }



  getGoTopBtn() {
    return document.querySelector('.go-top')
  }

  getInput() {
    return document.querySelector('.search-product')
  }
  getSearchBtn() {
    return document.querySelector('.search-ico')
  }
  checkOnValidValue(e) {
    if (e.keyCode === keyEnter || e.target === this.getSearchBtn()){
      this.findBeer()
    }
  }

  findBeer() {
    requestSettings.per_page = DEFAULT_PAGE_SIZE;
    requestSettings.beer_name = this.getInput().value;
    if (isValid(requestSettings.beer_name)){


      this.showAllBeer(request(requestSettings.beer_name));
      this.getInput().classList.remove('not-valid')



    } else {
      this.getInput().classList.add('not-valid');

    }
    this.render(window.recentSearches)
  }


  createListComponent(data) {
    MAIN_ELEMENT.innerHTML = '';
    const listComponent = new ListComponent(data),
      listElement = listComponent.getElement();
    renderElement(MAIN_ELEMENT,listElement,insertPosition.BEFORE_END);
    listComponent.addEventListeners();
  }

  showAllBeer(typeOfSearch) {
    typeOfSearch
      .then(res=> res.json())
      .then((data) => {
        window.incomingArray = data;
        if (!data.length){
          noResults();

        }
        else {
          window.recentSearches.push(requestSettings.beer_name);
          this.createListComponent(data);
          scrollToFirst();

        }
      })
  }

  getRecentBlock() {
    return this.getElement().querySelector('.recent-searches')
  }

  render(array) {
    this.getRecentBlock().innerHTML = ''
    array.forEach((el) => {
        const recentItemComponent = new RecentItemComponent(el),
          recentItemElement = recentItemComponent.getElement();
        renderElement(this.getRecentBlock(), recentItemElement, insertPosition.BEFORE_END);
        recentItemComponent.addEventListeners()
    })
  }
  createFavoriteButton(){
    const favoriteComponent = new FavoritesComponent(),
      favoriteElement = favoriteComponent.getElement();
    renderElement(this.getContainerForFavorite(), favoriteElement, insertPosition.BEFORE_END)
  }

  getContainerForFavorite() {
    return  this.getElement().querySelector('.right-side')
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
                                  <ul class="recent-searches"></ul>
                            </div>
                        <div class="right-side">
                            
                        </div>
                    </div>
                </div>
            </header>`)
  }
}