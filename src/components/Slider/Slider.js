import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'

import { listForSearch } from '../../config';

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  swipe: true
};

export default function SliderComponent({ requestPhotos }) {
  return (
    <div className='slider-wrap'>
      <Slider {...settings}>
        {
          listForSearch.map((slide, index) => {
            return (
              <div key={index}>
                <Slide slide={slide} requestPhotos={requestPhotos} />
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}