import { combineReducers } from 'redux';
import tabs from './tabs.js';
import currentTab from './currentTab.js';
import isFetch from './isFetch.js';

let reducer = combineReducers({
  tabs,
  isFetch,
  currentTab
})

export default reducer;