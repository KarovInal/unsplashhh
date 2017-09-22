//Thanks https://github.com/FormidableLabs/react-progressive-image

import React, { Component } from 'react';

class PreloadImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoad: false,
      src: this.props.small
    }

    this.loadedFull = this.loadedFull.bind(this);
  }

  componentDidMount() {
    this.image = new Image();
    this.image.src = this.props.full;

    this.image.onload = this.loadedFull;
  }

  componentWillUnmount() {
    this.image.onload = null;
  }
  
  loadedFull() {
    this.setState({
      isLoad: true,
      src: this.props.full
    })
  }

  render() {
    let { src, isLoad } = this.state;
    let { children } = this.props;

    return children(src, isLoad);
  }
}

export default PreloadImage;