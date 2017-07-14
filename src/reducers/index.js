import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userData from './user';
import postsData from './posts';

const appReducer = combineReducers({
  user: userData,
  posts: postsData,
  routing: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
