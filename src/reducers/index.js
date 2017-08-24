import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userData from './user';
import allPosts from './Posts/all';
import latestPosts from './Posts/latest';
import userPosts from './Posts/userPosts';

const appReducer = combineReducers({
  user: userData,
  posts: combineReducers({
    all: allPosts,
    latest: latestPosts,
    author: userPosts,
  }),
  routing: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return undefined;
  }
  if (action.type === 'CLEAR_ALL_POSTS') {
    state.posts.all = []; // eslint-disable-line
  }
  if (action.type === 'CLEAR_LATEST_POSTS') {
    state.posts.latest = []; // eslint-disable-line
  }
  return appReducer(state, action);
};

export default rootReducer;
