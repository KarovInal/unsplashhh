import { combineReducers } from 'redux';
import tabs from './tabs.js';
import currentTab from './currentTab.js';

let reducer = combineReducers({
  tabs,
  currentTab
})

export default reducer;