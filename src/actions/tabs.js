import { RESPONSE_PHOTOS_SUCСESS, SET_SEARCH_VALUE } from '../constants/tabs.js';
import unsplash, { toJson } from '../config/unsplash.js';

export function requestPhotos(dispatch, getState) {
  let state = getState();
  let { currentTab } = state;
  let { searchValue } = state.tabs[currentTab];

  unsplash.photos.searchPhotos(searchValue)
  .then(toJson)
  .then(json => {
    dispatch({
      type: RESPONSE_PHOTOS_SUCСESS,
      data: {
        photos: json
      }
    })
  })
}

export function setSearchValue(searchValue) {
  return {
    type: SET_SEARCH_VALUE,
    data: {
      searchValue
    }
  }
}