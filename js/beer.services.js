export function request() {
  return fetch(`https://api.punkapi.com/v2/beers?page=${ requestSettings.page }&per_page=${ requestSettings.per_page }&beer_name=${ requestSettings.beer_name }`)
}

export const requestSettings = {
  beer_name: '',
  per_page: 5,
  page: 1
};

export const DEFAULT_PAGE_SIZE = 5;

window.recentSearches = [];

export function changeStateBtn(a,b) {
  let valueBtn = 0;
  b.forEach((el) => {
    if (el){
      valueBtn = el.id;
      changeState()
    }
  });
  function changeState() {
    a.forEach((el) => {
      if (el.id === valueBtn) {
        el.stateBtn = false;
      }
    })
  }
}
export function update() {
  changeStateBtn(window.incomingArray,window.favoriteBeer)
  emitEvent('update', window.incomingArray)
}

export function deleteFromModal(item) {
  window.favoriteBeer = window.favoriteBeer.filter(el => el.id !== item.id);
  window.localItem = window.localItem.filter(el => el.id !== item.id)
  localStorage.setItem('localFavorite', JSON.stringify(window.favoriteBeer));
  emitEvent('delete-item', window.favoriteBeer)
}

export function FavoriteAmount() {
  emitEvent('update-count', window.favoriteBeer)
}

export function updateModal() {
  emitEvent('update-items-modal', window.favoriteBeer)
}

export function updateMainAfterModal(currentBeer) {
  try {
    window.incomingArray.forEach((el) => {

      if (el.id === currentBeer.id) {
        el.stateBtn = currentBeer.stateBtn;
      }
    });
  } catch (e) {

  }


  emitEvent('update-after-modal', window.incomingArray)
}

export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, {
    detail: {data}
  }))
}




