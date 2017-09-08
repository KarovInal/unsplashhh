import { combineReducers } from 'redux';
import tabs from './tabs.js';
import search from './search.js';
import currentTab from './currentTab.js';

let reducer = combineReducers({
  tabs,
  search,
  currentTab
})

export default reducer;