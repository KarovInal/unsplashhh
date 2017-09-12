import React, { Component } from 'react';
import PhotoItem from './PhotoItem.js';
import PhotoGalley from './PhotoGalley.js';

class DisplayPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDispalayPhoto: false,
      currentIndex: null
    }
  }

  onClickSmallPhoto(index) {
    if(!this.state.isDispalayPhoto) {
      this.setState(() => {
        return {
          isDispalayPhoto: true,
          currentIndex: index
        }
      });  
    }
  }

  onCloseGallery() {
    this.setState(() => {
      return {
        isDispalayPhoto: false,
        currentIndex: null
      }
    });
  }

  render() {
    let { photos } = this.props;
    let { isDispalayPhoto, currentIndex } = this.state;

    return (
      <div>
        {
          isDispalayPhoto ? 
            <PhotoGalley 
              photos={ photos }
              currentIndex={ currentIndex }
              onClick={ e => this.onCloseGallery() }/>
            : null
        }
        <div className='list-photos'>
          {
            photos.map((photo, index) => 
              <PhotoItem 
                key={ photo.id } 
                photo={ photo }
                index={ index }
                onClickSmallPhoto={ photo => this.onClickSmallPhoto(photo) } />)
          }
        </div>
      </div>
    )
  }
}

export default DisplayPhotos;