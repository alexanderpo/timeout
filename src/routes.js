import React from 'react';
import { Route } from 'react-router';
/* Containers */
import App from './containers/App';
import Search from './containers/Search';
import CreatePost from './containers/Post/Index';

export default function () {
  return (
    <Route>
      <Route path="/" component={App}>
        <Route path="search" component={Search} />
        <Route path="create" component={CreatePost} />
      </Route>
    </Route>
  );
}
