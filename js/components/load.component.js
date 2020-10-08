import { AbstractComponent } from './abstract.component.js';
import { request, requestSettings, update } from '../beer.services.js'


export class LoadComponent extends AbstractComponent{
  _afterCreate() {
    this.showOrHideBtn()
  }

  addEventListeners() {
    this.getElement().addEventListener('click', this.loadMoreBeer.bind(this))
  }
  loadMoreBeer() {
    requestSettings.per_page += 5;
    this.showMoreBeer(request(requestSettings.beer_name));


  }
  showOrHideBtn() {
    if (!window.incomingArray.length){
      this.getElement().style.display = 'none'
    } this.getElement().style.display = 'block'
  }

  showMoreBeer(typeOfSearch) {
    typeOfSearch
      .then(res=> res.json())
      .then((data) => {
        window.loadMoreArray = data;
        if (incomingArray.length === window.loadMoreArray.length){


          this.getElement().innerHTML = 'no-more';
          this.getElement().style.background = 'red';
        }
        window.incomingArray = [];
        window.incomingArray.push(...window.loadMoreArray);
        update()


      })
  }

  _getTemplate() {
    return (`<button class="load-more">load more</button>`)
  }
}