import { searchTab, downloadedTab, favoritTab } from '../constants/searchTab.js'

const defaultTabs = {
  [searchTab]: { data: [] },
  [downloadedTab]: { data: [] },
  [favoritTab]: { data: [] }
}

export default function tabs(state = defaultTabs, action) {
  return state
}