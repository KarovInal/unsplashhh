import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Slide from './Slide';
import Slice from '../../utils/slice.js';

import './css/slider.css';
import back from './img/back.png';
import forward from './img/forward.png';

import { listForSearch } from '../../config';

var slice = Slice(listForSearch).next(4);

export default class SliderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliders: []
    }
  }
  backSlide() {
    this.setState(() => {
      return {
        sliders: slice.back(4)
      }
    }) 
  }
  nextSlide() {
    this.setState(() => {
      return {
        sliders: slice.next(4)
      }
    })
  }
  render() {
    let {
      requestPhotos,
    } = this.props;

    let slids = slice.getSlice().map((slide) => {
      return <Slide key={slide.id} slide={slide} requestPhotos={(tag) => requestPhotos(tag)}/>
    })

    return (
        <div className='slider-wrap' ref={link => this._sliderWrap = link}>
          <img className='slider-back' src={back} onClick={e => this.backSlide()} />
            <ReactCSSTransitionGroup 
              transitionName="slids"
              component='div'
              className='slider-items'
              transitionAppear={true}
              transitionLeave={false}
              transitionEnterTimeout={100}
              transitionAppearTimeout={1000}>
                { slids }
            </ReactCSSTransitionGroup>
          <img className='slider-forward' src={forward} onClick={e => this.nextSlide()} />
        </div>
    );
  }
};