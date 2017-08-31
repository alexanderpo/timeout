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
import api from './middlewares/api';

import reducers from './reducers';
import routes from './routes';
import './styles/styles.scss';

injectTapEventPlugin();
/* Main color theme of material ui */
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#507299',
    accent1Color: '#DBE4FE',
  },
});

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

const store = createStore(reducers, { user }, compose(
  applyMiddleware(
    thunk,
    api(),
    routerMiddleware(browserHistory),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
  localStorage.setItem('user', JSON.stringify(store.getState().user));
});

const ensureAuthenticated = (nextState, replace) => {
  const catchedUser = store.getState().user;
  if (!catchedUser.loggedIn) { replace('/signin'); }
};

const Entry = () => (
  <Provider store={store}>
    <Router history={history} routes={routes(ensureAuthenticated)} />
  </Provider>
);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Entry />
  </MuiThemeProvider>,
  document.getElementById('app'),
);
