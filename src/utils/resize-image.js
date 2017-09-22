function resizeByWidth(initialWidth, initialHeight, width) {
  let height = initialHeight / (initialWidth / width);
  
  return {
    width,
    height
  }
};

function resizeByHeight(initialWidth, initialHeight, height) {
  let width = initialWidth / (initialHeight / height);

  return {
    width,
    height
  }
}

export {
  resizeByWidth,
  resizeByHeight
}