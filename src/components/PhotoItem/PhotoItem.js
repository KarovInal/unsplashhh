import React from 'react';
import PreloadImage from '../PreloadImage';
import User from '../User';
import download from './download.png';

import parseQuery from '../../utils/parse-query.js';
import { resizeByWidth } from '../../utils/resize-image.js';

export default function(props) {
  let {
    id,
    user,
    urls,
    links,
    width: fullWidth,
    height: fullHeight,
    description,
    color
  } = props.photo;
  let width = parseQuery(urls.small).w;
  let { height } = resizeByWidth(
    fullWidth,
    fullHeight,
    width
  );

  let { onClickSmallPhoto, index } = props;
  
  return (
    <div className='photo-small-item'>
      <div className='photo-small-img-wrap' onClick={ e => onClickSmallPhoto(index) }>
        <PreloadImage full  = {urls.small}
                      block = {{
                        height: `${height}px`,
                        width: '100%',
                        backgroundColor: color
                      }} />
      </div>
      <div className='photo-info-wrap'>
        <User user={ user } />
        <a className='photo-download-link' rel="nofollow" target="_blank" href={ `${links.download}/?force=true` }><img src={download} /></a>
      </div>
    </div>
  )
}