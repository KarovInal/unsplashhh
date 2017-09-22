import React, { Component } from 'react';
import PreloadImage from '../PreloadImage';
import User from '../User';
import GalleryControl from './GalleryControl';
import PhotoStatistic from './PhotoStatistic';

import './css/style.css';
import back from './img/back.png';
import forward from './img/forward.png';
import close from './img/close.png';

import parseQuery from '../../utils/parse-query.js';
import { resizeByWidth } from '../../utils/resize-image.js';

class PhotoGalley extends Component {
  constructor(props) {
    super(props);
    
    let { currentIndex } = this.props;

    this.state = { 
      currentIndex 
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    let { key } = event;

    switch(key) {
      case 'ArrowLeft':
        return this.onBack();
      case 'ArrowRight':
        return this.onForward();
      case 'Escape':
        return this.props.onClick();
      default:
        return false;
    }
  }

  back(index, length) {
    let newIndex = index - 1;
    return newIndex > 0 ? newIndex : 0;
  }

  forward(index, length) {
    let newIndex = index + 1;
    return newIndex < length - 1 ? newIndex : length - 1;
  }

  onBack() {
    let {
      photos
    } = this.props;

    let {
      currentIndex
    } = this.state;

    this.setState(() => {
      return {
        currentIndex: this.back(currentIndex, photos.length)
      }
    })
  }

  onForward() {
    let {
      photos
    } = this.props;

    let {
      currentIndex
    } = this.state;

    this.setState(() => {
      return {
        currentIndex: this.forward(currentIndex, photos.length)
      }
    })
  }

  renderBack(url) {
    // let photo = new Image();
    // photo.src = url;

    return <img src={back} className='gallery-back' onClick={ e => {this.onBack()} }/>
  }

  renderForward(url) {
    // let photo = new Image();
    // photo.src = url;

    return <img src={forward} className='gallery-forward' onClick={ e => {this.onForward()} }/>
  }

  closeGallery({ target }) {
    if(this._galleryWrap === target) {
      this.props.onClick();
    }
  }

  render() {
    let {
      photos,
      onClick
    } = this.props;

    let currentIndex = this.state.currentIndex,
        photo        = photos[currentIndex];

    let {
      width: fullWidth,
      height: fullHeight
    } = photo;

    let width = parseQuery(photo.urls.regular).w;
    let { height } = resizeByWidth(fullWidth, fullHeight, width);

    return (
      <div ref       = {link => this._galleryWrap = link} 
           onClick   = {e => this.closeGallery(e)}
           className = 'gallery-wrap'>
           
        <div className='gallery-content'>
          {/* Иконка закрытия */}
          <div className='gallery-close'>
            <img src={close} onClick={onClick} />
          </div>
          
          {/* Иконка и имя автора */}
          <div className='gallery-user'>
            <User key  = {photo.id}
                  user = {photo.user}/>
          </div>
          
          {/* Главное изображение */}
          <div className='gallery-photo-wrap' onClick={() => this.onForward()}>
              <PreloadImage key       = {photo.id}
                            full      = {photo.urls.full}
                            small     = {photo.urls.small}>
                {src => <img src={src} className='gallery-photo'/>}
              </PreloadImage>
            {/* <img key       = {photo.id}
                 src       = {photo.urls.regular}
                 width     = '100%'
                 height    = {height}
                 onClick   = {() => this.onForward()}
                 className = 'gallery-photo'/> */}
          </div>
          
          {/* Панель управления <-- --> */}
          <GalleryControl photos        = {photos}
                          renderBack    = {url => this.renderBack(url)}
                          renderForward = {url => this.renderForward(url)}
                          currentIndex  = {currentIndex}/>

          {/* Кнопка скачать */}
          <div className='gallery-photo-download'>
            <a href={photo.links.download + '/?force=true'} rel="nofollow" target="_blank">
              Скачать
            </a>
          </div>

          {/* Статистика фотографии */}
          <PhotoStatistic id={photo.id} />
        </div>
      </div>
    )
  }
}

export default PhotoGalley;
