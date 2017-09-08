export function FetchImages(dispatch, getState) {
  setTimeout(() => {
    dispatch({
      type: 'RESPONSE_PHOTOS_BY_SEARCH',
      data: {
        photos: [
          {
            photo: 1
          }, {
            photo: 2
          }, {
            photo: 3
          }
        ]
      }
    })
  }, 1000)
}