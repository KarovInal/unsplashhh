import { searchTab, downloadedTab, favoritTab } from '../constants/searchTab.js'

const defaultTabs = {
  [searchTab]: { data: [] },
  [downloadedTab]: { data: [] },
  [favoritTab]: { data: [] }
}

export default function tabs(state = defaultTabs, action) {
  switch(action.type) {
    case 'RESPONSE_PHOTOS_BY_SEARCH':
      return Object.assign(...state, { [searchTab]: action.data });
    default:
      return state
  }
}