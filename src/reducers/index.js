import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import searchResult from './Posts/searchResult';
import allPosts from './Posts/allPosts';

const appReducer = combineReducers({

  search: searchResult,
  posts: allPosts,

  user,
  routing: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return {};
  }
  return appReducer(state, action);
};

export default rootReducer;
