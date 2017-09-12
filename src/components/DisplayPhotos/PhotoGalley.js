import React, { Component } from 'react';

class PhotoGalley extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      photos,
      onClick,
      currentIndex,
    } = this.props;

    return (
      <div onClick={onClick}>
        <img src={photos[currentIndex].urls.small} />
      </div>
    )
  }
}

export default PhotoGalley;
