import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import searchResult from './Posts/searchResult';

const appReducer = combineReducers({

  search: searchResult,

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
