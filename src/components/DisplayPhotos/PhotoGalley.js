import React, { Component } from 'react';

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

  forvard(index, length) {
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

  onForvard() {
    let {
      photos
    } = this.props;

    let {
      currentIndex
    } = this.state;

    this.setState(() => {
      return {
        currentIndex: this.forvard(currentIndex, photos.length)
      }
    })
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
      <div>
        <img src={photos[currentIndex].urls.small} />
        {
          currentIndex > 0
            ? <button onClick={ e => { this.onBack() } }>{'Назад'}</button>
            : null
        }
        {
          currentIndex < photos.length - 1
            ? <button onClick={ e => { this.onForvard() } }>{'Далее'}</button>
            : null
        }
        <button onClick={onClick}>{'Закрыть'}</button>
        <p>Photos: {photos.length}, {currentIndex + 1}</p>
      </div>
    )
  }
}

export default PhotoGalley;
