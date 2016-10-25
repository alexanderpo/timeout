import React from 'react';
import ReactDOM from 'react-dom';
/* Material UI */
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* REDUX */
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducers';

import App from './containers/App';
import './styles/styles.scss';

injectTapEventPlugin();

const store = createStore(reducers, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const Entry = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <MuiThemeProvider>
    <Entry />
  </MuiThemeProvider>,
  document.getElementById('app')
);
