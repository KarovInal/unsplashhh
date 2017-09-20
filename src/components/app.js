import React, { Component } from 'react';
import Search from '../containers/Search/Search.js';
import DisplayPhotos from '../containers/DisplayPhotos/DisplayPhotos.js';
import Slider from '../containers/Slider/Slider.js';

export default function App() {
  return (
    <div>
      <Search />
      <Slider />
      <DisplayPhotos />
    </div>
  )
}