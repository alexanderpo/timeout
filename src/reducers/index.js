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
    // BUG: window.webkitStorageInfo' is deprecated.
    // Please use 'navigator.webkitTemporaryStorage'
    // or 'navigator.webkitPersistentStorage' instead.
  }
  return appReducer(state, action);
};

export default rootReducer;
