import React, { Component } from 'react';
import style from './css/style.css';

import git from './img/git.png';
import insta from './img/insta.png';
import twitter from './img/twitter.png';

export default function Title() {
  return (
    <div className='title-wrap'>
      <h1 className='title-head'>UNSPLASHHH...</h1>
      <ul className='title-links'>
        <li className='title-item'>
          <a target="_blank" href='https://github.com/KarovInal/unsplashhh'>
            <img src={git} />
          </a>
        </li>
        <li className='title-item'>
          <a target="_blank" href='https://twitter.com/allgameofsurviv'>
            <img src={twitter} />
          </a>
        </li>
        <li className='title-item'>
          <a target="_blank" href='https://www.instagram.com/inal_karov/'>
            <img src={insta} />
          </a>
        </li>
      </ul>
    </div>
  )
}