import React from 'react';

function Error(props) {
  return (
    <div className='notice-error'>
      {props.children}
    </div>
  )
}

export default Error;