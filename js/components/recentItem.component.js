import { AbstractComponent } from './abstract.component.js';
import { request, update, requestSettings } from '../beer.services.js';


export class RecentItemComponent extends AbstractComponent {
  constructor(value) {
    super();
    this.value = value;
  }

  addEventListeners() {
    this.getElement().addEventListener('click', this.showCurrentData.bind(this))
  }

  showCurrentData() {
    requestSettings.beer_name = this.value;
    this.recentSearch(request(requestSettings.beer_name));
    this.getInput().value = this.value

  }

  getInput() {
    return document.querySelector('.search-product')
  }

  recentSearch(typeOfSearch) {
    typeOfSearch
      .then(res => res.json())
      .then((data) => {
        data.map((obj) => {
          obj.stateBtn = true;
        });
        window.incomingArray = data;
        update()

      });
  }


  _getTemplate() {
    return (`<li class="recent-searches-value">${ this.value }</li>`)
  }
}