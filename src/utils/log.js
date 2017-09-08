let log = ({getState, dispatch}) => next => action => {
  console.log('Action - ', action);
  console.log('Current state ', getState());
  next(action);
  console.log('New state ', getState());
}

export default log;