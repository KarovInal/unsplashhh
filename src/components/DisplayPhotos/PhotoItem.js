import React from 'react';

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
        <a href={ user.links.html } target='_blank' className='photo-small-user'>
          <img src={user.profile_image.small} className='photo-user-img' />
          <p className='photo-user-name'>{ user.first_name }</p>
        </a>
        <a className='photo-download-link' rel="nofollow" target="_blank" href={ `${links.download}/?force=true` }><img src="./img/icons/download.png" /></a>
      </div>
    </div>
  )
}