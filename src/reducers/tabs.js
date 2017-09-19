import { 
    searchTab, 
    downloadedTab, 
    favoritTab, 
    RESPONSE_PHOTOS_SUCСESS,
    RESPONSE_PHOTOS_ERROR,
    REQUEST_PHOTO,
    SET_SEARCH_VALUE } from '../constants/tabs.js'

const defaultTabs = {
  searchTab: { photos: [], searchValue: '' },
  downloadedTab: { photos: [], searchValue: '' },
  favoritTab: { photos: [], searchValue: '' }
}

export default function tabs(state = defaultTabs, action) {
  switch(action.type) {
    case REQUEST_PHOTO: {
      return {
        ...state,
        searchTab: {
          ...state[searchTab],
          photos: []
        }
      }
    }
    case RESPONSE_PHOTOS_SUCСESS:
      return { 
        ...state,
        searchTab: {
          photos: action.data.photos,
          searchValue: state[searchTab].searchValue
        }
      }
    case RESPONSE_PHOTOS_ERROR:
      return {
        ...state,
        searchTab: {
          ...state[searchTab],
          photos: []
        }
      }
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchTab: {
          ...state[searchTab],
          searchValue: action.data.searchValue
        }
      }
    default:
      return state
  }
}
