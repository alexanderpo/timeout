import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import searchResult from './Posts/searchResult';

export default combineReducers({

  search: searchResult,

  user,
  routing: routerReducer,
});
