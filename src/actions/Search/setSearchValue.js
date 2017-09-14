import { SET_SEARCH_VALUE } from '../../constants/tabs.js';

export function setSearchValue(searchValue) {
  return {
    type: SET_SEARCH_VALUE,
    data: {
      searchValue
    }
  }
}