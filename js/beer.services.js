export function getByNameBeer(name) {
  return fetch(`https://api.punkapi.com/v2/beers?page=${requestSettings.page}&per_page=${requestSettings.per_page}&beer_name=${name}`)
}
export const requestSettings = {
  per_page: 5,
  page: 1
};




