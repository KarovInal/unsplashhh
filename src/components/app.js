import React, { Component } from 'react';
import Search from '../containers/Search/Search.js';
import DisplayPhotos from '../containers/DisplayPhotos/DisplayPhotos.js';

export default function App() {
  return (
    <div>
      <Search />
      <DisplayPhotos />
    </div>
  )
}