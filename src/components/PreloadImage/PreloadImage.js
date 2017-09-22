import React, { Component } from 'react';
import Block from './Block.js';
import ImagePreview from './ImagePreview.js';

class PreloadImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoad: false,
      preloadBlock: this.props.block ? true : false,
      preloadImage: this.props.small ? true : false
    }

    this.loadedFull = this.loadedFull.bind(this);
  }

  componentDidMount() {
    this.full = new Image();
    this.full.src = this.props.full;

    this.full.onload = this.loadedFull;
  }

  componentWillUnmount() {
    this.full.onload = null;
  }
  
  loadedFull() {
    this.setState({
      isLoad: true,
      preloadBlock: false,
      preloadImage: false
    })
  }

  render() {
    return (
      <div>
        {
          this.state.isLoad 
            ? <img className={this.props.className} src={this.props.full} />
            : null
        }
        {
          this.state.preloadBlock
            ? <Block {...this.props.block}/>
            : null
        }
        {
          this.state.preloadImage
            ? <ImagePreview className={ this.props.className } small={this.props.small}/>
            : null
        }
      </div>
    )
  }
}

export default PreloadImage;