import React from 'react';

function ImagePreview(props) {
  return (
    <img className={props.className} src={props.small} />
  )
}

export default ImagePreview;