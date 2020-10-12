
export function request() {
  return fetch(`https://api.punkapi.com/v2/beers?page=${requestSettings.page}&per_page=${requestSettings.per_page}&beer_name=${requestSettings.beer_name}`)
}
export const requestSettings = {
  beer_name: '',
  per_page: 5,
  page: 1
};

export const DEFAULT_PAGE_SIZE = 5;

export const perPage = requestSettings.per_page;

window.recentSearches = [];

export function update() {
  if (window.favoriteBeer.length){
    window.incomingArray.forEach((el) => {
      window.favoriteBeer.forEach((it) => {
        if (el.id === it.id) {
          el.stateBtn = it.stateBtn
        }
      })
    })
  }
    emitEvent('update',window.incomingArray )
}

export function deleteFromModal(item) {
  window.favoriteBeer = window.favoriteBeer.filter(el => el.id !== item.id);

  emitEvent('delete-item', window.favoriteBeer)
}

export function FavoriteAmount() {

  emitEvent('update-count', window.favoriteBeer)
}

export function updateModal() {
  emitEvent('update-items-modal', window.favoriteBeer)
}

export function updateMainAfterModal(currentBeer) {
  window.incomingArray.forEach((el) => {
    if (el.id === currentBeer.id){
      el.stateBtn = currentBeer.stateBtn;

    }
  });
  emitEvent('update-after-modal', window.incomingArray)
}

export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, {
    detail: {data}
  }))
}




