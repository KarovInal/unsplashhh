import React from 'react';
import download from './download.png';
import User from '../User';

export default function(props) {
  let {
    id,
    user,
    urls,
    links,
    description
  } = props.photo;

  let { onClickSmallPhoto, index } = props;

  return (
    <div className='photo-small-item'>
      <div className='photo-small-img-wrap'>
        <img className='photo-small-img' src={ urls.small } onClick={ e => onClickSmallPhoto(index) }/>
      </div>
      <div className='photo-info-wrap'>
        <User user={ user } />
        <a className='photo-download-link' rel="nofollow" target="_blank" href={ `${links.download}/?force=true` }><img src={download} /></a>
      </div>
    </div>
  )
}