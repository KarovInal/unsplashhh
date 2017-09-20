import React from 'react';
import './css/style.css';

export default function User(props) {
  let { user } = props;

  return (
    <a className='user-link' href={ user.links.html } >
      <img className='user-avatar' src={ user.profile_image.small } />
      <p className='user-name'>@{ user.first_name.toLowerCase() }</p>
    </a>
  )
}