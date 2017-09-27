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

  // index - индекс изображения в  
  let { onClickSmallPhoto, index } = props;

  // Получить рзамер превью изображения из url строки
  let width = parseQuery(urls.small).w;

  // Вычислить новый размер, для превью изображения 
  let { height } = resizeByWidth(
    fullWidth,
    fullHeight,
    width
  );
  
  return (
    <div className='photo-small-item'>
      <div className='photo-small-img-wrap' onClick={ e => onClickSmallPhoto(index) }>
        <PreloadImage full={urls.small} small=''>
          {(src, isLoad) => {
            return isLoad 
                    ? <img src={src} /> 
                    : <div style={{backgroundColor: color, height, width: '100%'}}></div>
          }}
        </PreloadImage>
      </div>

      <div className='photo-info-wrap'>
        <User user={ user } />
        <a className='photo-download-link' rel="nofollow" target="_blank" href={ `${links.download}/?force=true` }><img src={download} /></a>
      </div>
    </div>
  )
}