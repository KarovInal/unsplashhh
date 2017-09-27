import React from 'react';
import Notification  from 'rc-notification';
import { SuccessComponent, ErrorComponent } from '../components/Notification';
import unsplash, { toJson } from '../config/unsplash.js';

import {
  fetchRequest,
  fetchResponseSuccess,
  fetchResponseError
} from './fetch.js';

var notification = Notification.newInstance({
  getContainer: () => document.getElementById('notification-photos')
});

/* CONSTANTS */

import {
  searchTab,
  downloadedTab,
  favoritTab } from '../constants/tabs.js';

const defaultTabs = {
  searchTab: { photos: [], searchValue: '' },
  downloadedTab: { photos: [], searchValue: '' },
  favoritTab: { photos: [], searchValue: '' }
}

/* REDUCER */

export default function reducer(state = defaultTabs, action) {
  switch(action.type) {
    case REQUEST: {
      return {
        ...state,
        searchTab: {
          ...state[searchTab],
          photos: []
        }
      }
    }
    case RESPONSE_SUCСESS:
      return { 
        ...state,
        searchTab: {
          photos: action.data.photos,
          searchValue: state[searchTab].searchValue
        }
      }
    case RESPONSE_ERROR:
      return {
        ...state,
        searchTab: {
          ...state[searchTab],
          photos: []
        }
      }
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchTab: {
          ...state[searchTab],
          searchValue: action.data.searchValue
        }
      }
    default:
      return state
  }
}

/* ACTION TYPES */

const REQUEST = 'unsplashhh/tabs/REQUEST';
const RESPONSE_SUCСESS = 'unsplashhh/tabs/RESPONSE_SUCСESS';
const RESPONSE_ERROR = 'unsplashhh/tabs/RESPONSE_ERROR';
const SET_SEARCH_VALUE = 'unsplashhh/tabs/SET_SEARCH_VALUE';

/* ACTION CREATORS */

export function requestPhotos(dispatch, getState) {
  let state         = getState(),
      currentTab    = state.currentTab,
      {fetch}       = state,
      {searchValue} = state.tabs[currentTab];
     
  if(fetch.isFetch) {
    return;
  }

  dispatch(request());
  dispatch(fetchRequest());

  // dispatch(responsePhotoSuccess(photos));

  unsplash.photos.searchPhotos(searchValue, [], 1, 15)
    .then(toJson)
    .then(json => {
      console.log('SUCCESS', json);

      if(!json.length) {
        throw new Error('Ничего не найдено...');
        return;
      }

      dispatch(fetchResponseSuccess());
      dispatch(responsePhotoSuccess(json));
    })
    .catch(error => {
      console.log('ERROR', error);

      dispatch(fetchResponseError());
      dispatch(responsePhotoError(error));
    })
}

export function request() {
  return { type: REQUEST }
}

export function responsePhotoSuccess(photos) {
  notification.notice({
    content: <SuccessComponent>Данные успешно загружены.</SuccessComponent>
  });

  return {
    type: RESPONSE_SUCСESS,
    data: {
      photos: photos
    }
  }
}

export function responsePhotoError(error) {
  notification.notice({
    content: <ErrorComponent>{error.message}</ErrorComponent>
  });

  return {
    type: RESPONSE_ERROR
  }
}

export function setSearchValue(searchValue) {
  return {
    type: SET_SEARCH_VALUE,
    data: {
      searchValue
    }
  }
}

