import React from 'react';

function SuccessComponent(props) {
  return (
    <div className='notice-success'>
      {props.children}
    </div>
  )
}

export default SuccessComponent;