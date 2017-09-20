import React from 'react';

export default function GalleryControl(props) {
  let { 
    photos,
    renderBack,
    currentIndex,
    renderForward } = props;
    
  return (
    <div className='gallery-controls'>
      {
        currentIndex > 0
          ? renderBack(photos[currentIndex - 1].urls.regular)
          : null
      }

      {
        currentIndex < photos.length - 1
          ? renderForward(photos[currentIndex + 1].urls.regular)
          : null
      }
    </div>
  )
}