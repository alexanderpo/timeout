import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userData from './user';

const appReducer = combineReducers({
  user: userData,
  routing: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
