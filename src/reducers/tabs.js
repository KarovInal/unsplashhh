import { 
    searchTab, 
    downloadedTab, 
    favoritTab, 
    RESPONSE_PHOTOS_SUCСESS,
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
    default:
      return state
  }
}
