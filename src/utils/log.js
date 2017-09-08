let log = ({getState, dispatch}) => next => action => {
  console.log('%cAction: %s', 'color: yellow; font: 14px sans-serif;', action.type);
  console.log('%cCurrent state: %O', 'color: red; font: 14px sans-serif;', getState());
  next(action);
  console.log('%cNew state %O', 'color: green; font: 14px sans-serif;', getState());
}

export default log;