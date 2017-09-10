import React, { Component } from 'react';

function DisplayPhotos(props) {
  let { photos } = props;

  return (
    <di>
      {
        photos.map((photo, index) => {
          return <img key={index} src={photo.urls.small} />
        })
      }
    </di>
  )
}

export default DisplayPhotos;