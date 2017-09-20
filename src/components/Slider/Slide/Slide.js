import React from 'react';

export default function Slide(props) {
  let {
    text,
    tag
  } = props.slide;

  return (
    <div className='slide-element'>
      <p onClick={ e => props.requestPhotos(tag) }>{ text }</p>
    </div>
  )
}