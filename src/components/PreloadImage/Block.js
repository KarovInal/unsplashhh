import React from 'react';

function Block(props) {
  let {
    width,
    height,
    backgroundColor
  } = props;

  let style = {
    width: width,
    height: height,
    backgroundColor: backgroundColor
  }

  return (
    <div style={style}>
    </div>
  )
}

export default Block;