import React from 'react';
import Notification  from 'rc-notification';
import { Success, Error } from '../../components/Notification';

var notification = Notification.newInstance({
  getContainer: () => document.getElementById('notification-photos')
});

import {
  REQUEST_PHOTO, 
  RESPONSE_PHOTOS_SUCСESS, 
  RESPONSE_PHOTOS_ERROR } from '../../constants/tabs.js';

export function responsePhotoSuccess(photos) {
  notification.notice({
    content: <Success>Данные успешно загружены.</Success>
  });

  return {
    type: RESPONSE_PHOTOS_SUCСESS,
    data: {
      photos: photos
    }
  }
}

export function responsePhotoError(error) {
  notification.notice({
    content: <Error>{ error.message }</Error>
  });

  return {
    type: RESPONSE_PHOTOS_ERROR
  }
}