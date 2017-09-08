import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import reduxThunk from 'redux-thunk';

let store = createStore(
  reducer,
  applyMiddleware(
    reduxThunk
  )
);

export default store;