import React from 'react';
import ReactDOM from 'react-dom';
/* Material UI */
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
/* REDUX & REACT-ROUTER */
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import api from './middlewares/api'; // middleware for fetch api requests

// import { setNextPathname } from './actions/user';

import reducers from './reducers'; // redux reducers
import routes from './routes'; // client side routes
import './styles/styles.scss'; // project styles

injectTapEventPlugin();
/* Main color theme of material ui */
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#507299',
    accent1Color: '#DBE4EE',
  },
});

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

const store = createStore(reducers, { user }, compose( // create redux store
  applyMiddleware(
    thunk,
    api(),
    routerMiddleware(browserHistory),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f // apply redux dev tools extension
));
const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
  localStorage.setItem('user', JSON.stringify(store.getState().user));
});

// function ensureAuthenticated(nextState, replace) {
//   const user = store.getState().user; // eslint-disable-line
//   if (!user.data.success) {
//     store.dispatch(setNextPathname(nextState.location.pathname));
//     replace('/signin');
//   }
// }

const Entry = () => (
  <Provider store={store}>
    <Router history={history} routes={routes()} />
  </Provider>
);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Entry />
  </MuiThemeProvider>,
  document.getElementById('app')
);
