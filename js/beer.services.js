export function request() {
  return fetch(`https://api.punkapi.com/v2/beers?page=${requestSettings.page}&per_page=${requestSettings.per_page}&beer_name=${requestSettings.beer_name}`)
}
export const requestSettings = {
  beer_name: '',
  per_page: 5,
  page: 1
};

export function update() {

    emitEvent('update',window.incomingArray )

}

export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, {
    detail: {data}
  }))
}
