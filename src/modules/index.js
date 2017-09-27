import { combineReducers } from 'redux';
import tabs from './tabs.js';
import currentTab from './currentTab.js';
import fetch from './fetch.js';

let reducer = combineReducers({
  tabs,
  fetch,
  currentTab
})

export default reducer;