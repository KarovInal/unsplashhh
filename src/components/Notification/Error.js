import React from 'react';

function ErrorComponent(props) {
  return (
    <div className='notice-error'>
      {props.children}
    </div>
  )
}

export default ErrorComponent;