import { 
  REQUEST_PHOTO, 
  RESPONSE_PHOTOS_SUCСESS, 
  RESPONSE_PHOTOS_ERROR } from '../constants/tabs.js'

export default function isFetch(isFetch = false, action) {
  switch(action.type) {
    case REQUEST_PHOTO:
      return true;
    case RESPONSE_PHOTOS_SUCСESS || RESPONSE_PHOTOS_ERROR:
      return false;
    default:
      return false;
  }
}