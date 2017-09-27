const defaultFetch = {
  status: 'success',
  isFetch: false,
  message: ''
}

/* REDUCER */

export default function reducer(state = defaultFetch, action) {
  switch(action.type) {
    case REQUEST:
      return action.data
    case RESPONSE_SUCСESS:
      return action.data
    case RESPONSE_ERROR:
      return action.data
    default:
      return state;
  }
}

/* ACTION TYPES */

const REQUEST = 'unsplashhh/fetch/REQUEST';
const RESPONSE_SUCСESS = 'unsplashhh/fetch/RESPONSE_SUCСESS';
const RESPONSE_ERROR = 'unsplashhh/fetch/RESPONSE_ERROR';

/* ACTION CREATORS */

export function fetchRequest() {
  return {
    type: REQUEST,
    data: {
      status: 'success',
      isFetch: true,
      message: ''
    }
  }
}

export function fetchResponseSuccess() {
  return {
    type: RESPONSE_SUCСESS,
    data: {
      status: 'success',
      isFetch: false,
      message: 'Данные успешно загружены.'
    }
  }
}

export function fetchResponseError() {
  return {
    type: RESPONSE_ERROR,
    data: {
      status: 'error',
      isFetch: false,
      message: 'Произошла ошибка на сервере...'
    }
  }
}