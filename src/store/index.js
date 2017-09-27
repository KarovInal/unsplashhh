import { createStore, applyMiddleware } from 'redux';
import reducer from '../modules';
import reduxThunk from 'redux-thunk';
import log from '../utils/log.js';

let store = createStore(
  reducer,
  applyMiddleware(
    reduxThunk,
    log
  )
);

export default store;