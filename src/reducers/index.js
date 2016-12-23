import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userData from './user';
import searchResult from './Posts/searchResult';
import allPosts from './Posts/allPosts';
import userPosts from './Posts/userPosts';

const appReducer = combineReducers({

  search: searchResult,
  posts: allPosts,

  user: combineReducers({
    data: userData,
    posts: userPosts,
  }),
  routing: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return {};
  }
  return appReducer(state, action);
};

export default rootReducer;
