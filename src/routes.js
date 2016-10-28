import React from 'react';
import { Route, IndexRoute } from 'react-router';
/* Containers */
import App from './containers/App';

export default function () {
  return (
    <Route>
      <Route path="/" component={App} />
    </Route>
  );
}
