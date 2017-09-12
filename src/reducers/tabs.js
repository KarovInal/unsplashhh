import { 
    searchTab, 
    downloadedTab, 
    favoritTab, 
    RESPONSE_PHOTOS_SUCСESS,
    REQUEST_PHOTO,
    SET_SEARCH_VALUE } from '../constants/tabs.js'

const defaultTabs = {
  [searchTab]: { photos: [], searchValue: '' },
  [downloadedTab]: { photos: [], searchValue: '' },
  [favoritTab]: { photos: [], searchValue: '' }
}

export default function tabs(state = defaultTabs, action) {
  switch(action.type) {
    case RESPONSE_PHOTOS_SUCСESS:
      return Object.assign({}, state, 
        {
          [searchTab]: {
            photos:  action.data.photos,
            searchValue: state[searchTab].searchValue
          }
        });
    case SET_SEARCH_VALUE:
        return Object.assign({}, state, {
          [searchTab]: {
            photos: state[searchTab].photos,
            searchValue: action.data.searchValue
          }
        })
    case REQUEST_PHOTO:
      return Object.assign({}, state, {
        [searchTab]: Object.assign({}, state[searchTab], { photos: [] })
      })
    default:
      return state
  }
}
