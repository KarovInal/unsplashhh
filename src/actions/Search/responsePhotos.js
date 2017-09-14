import {
  REQUEST_PHOTO, 
  RESPONSE_PHOTOS_SUCСESS, 
  RESPONSE_PHOTOS_ERROR } from '../../constants/tabs.js';

export function responsePhotoSuccess(photos) {
  return {
    type: RESPONSE_PHOTOS_SUCСESS,
    data: {
      photos: photos
    }
  }
}

export function responsePhotoError(error) {
  return {
    type: RESPONSE_PHOTOS_ERROR
  }
}