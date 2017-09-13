import React, { Component } from 'react';

import back from './back.png';
import forward from './forward.png';
import close from './close.png';

class PhotoGalley extends Component {
  constructor(props) {
    super(props);
    
    let {
      currentIndex
    } = this.props;

    this.state = {
      currentIndex
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

    let {
      currentIndex
    } = this.state;

    return (
      <div ref={ link => this._galleryWrap = link } onClick={ e => this.closeGallery(e) } className='gallery-wrap'>
        <div className='gallery-content'>
          <div className='gallery-close'>
            <img src={close} onClick={onClick} />
          </div>
          
          <div className='gallery-photo-wrap'>
            <img onClick={ e => {this.onForward()} } className='gallery-photo' src={photos[currentIndex].urls.small} />
          </div>
          
          <div className='gallery-controls'>
            {
              currentIndex > 0
                ? <img src={back} className='gallery-back' onClick={ e => {this.onBack()} } />
                : null
            }

            <p>Photos: {photos.length}, {currentIndex + 1}</p>

            {
              currentIndex < photos.length - 1
                ? <img src={forward} className='gallery-forward' onClick={ e => {this.onForward()} } />
                : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoGalley;
