import { 
  REQUEST_PHOTO, 
  RESPONSE_PHOTOS_SUCСESS, 
  RESPONSE_PHOTOS_ERROR } from '../constants/tabs.js'

const defaultFetch = {
  status: 'success',
  isFetch: false,
  message: ''
}

export default function Fetch(state = defaultFetch, action) {
  switch(action.type) {
    case REQUEST_PHOTO:
      return {
        status: 'success',
        isFetch: true,
        message: ''
      }
    case RESPONSE_PHOTOS_SUCСESS:
      return {
        status: 'success',
        isFetch: false,
        message: ''
      }
    case RESPONSE_PHOTOS_ERROR:
      return {
        status: 'error',
        isFetch: false,
        message: 'Произошла ошибка с сервера.'
      }
    default:
      return state;
  }
}