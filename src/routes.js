import React from 'react';
import { Route, IndexRoute } from 'react-router';
/* Containers */
import App from './containers/App';
import Search from './containers/Search';

export default function () {
  return (
    <Route>
      <Route path="/" component={App}>
        <Route path="search" component={Search} />
      </Route>
    </Route>
  );
}
