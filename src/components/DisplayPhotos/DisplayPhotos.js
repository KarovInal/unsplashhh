import React, { Component } from 'react';

import PhotoGallery from '../PhotoGallery';
import PhotoItem from '../PhotoItem';

import loader from './loader.gif';

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

  componentWillReceiveProps(nextProps) {
    let isFetch = nextProps.fetch;

    if(isFetch) {
      this.setState(() => {
        return {
          isDispalayPhoto: false
        }
      })
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
    let { status, isFetch, message } = this.props.fetch;

    return (
      <div>
        {
          isFetch ? <img className='loader-gif' src={loader} /> : null
        }

        {
          status === 'success'
            ? <div className='list-photos'>
                {
                  photos.map((photo, index) => 
                    <PhotoItem 
                      key   = { photo.id } 
                      photo = { photo }
                      index = { index }
                      onClickSmallPhoto={ photo => this.onClickSmallPhoto(photo) } />)
                }
              </div>
            : null
        }

        {
          isDispalayPhoto ? 
            <PhotoGallery 
              photos={ photos }
              currentIndex={ currentIndex }
              onClick={ e => this.onCloseGallery() }/>
            : null
        }
      </div>
    )
  }
}

export default DisplayPhotos;
