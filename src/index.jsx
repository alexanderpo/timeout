import React from 'react';
import ReactDOM from 'react-dom';
/* Material UI */
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* REDUX & REACT-ROUTER */
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import routes from './routes';
import './styles/styles.scss';

injectTapEventPlugin();

const store = createStore(reducers, compose(
  applyMiddleware(
    routerMiddleware(browserHistory),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const history = syncHistoryWithStore(browserHistory, store);

const Entry = () => (
  <Provider store={store}>
    <Router history={history} routes={routes()} />
  </Provider>
);

ReactDOM.render(
  <MuiThemeProvider>
    <Entry />
  </MuiThemeProvider>,
  document.getElementById('app')
);
