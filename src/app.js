import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/app.js';
import store from './store';
import unsplash from './config/unsplash.js';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);