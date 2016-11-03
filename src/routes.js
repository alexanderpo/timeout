import React from 'react';
import { Route } from 'react-router';
/* Containers */
import App from './containers/App';
import Search from './containers/Search';
import CreatePost from './containers/Post/Index';
import SignIn from './containers/SignIn';
import Register from './containers/Register';

export default function () {
  return (
    <Route>
      <Route path="signin" component={SignIn} />
      <Route path="register" component={Register} />
      <Route path="/" component={App}>
        <Route path="search" component={Search} />
        <Route path="create" component={CreatePost} />
      </Route>
    </Route>
  );
}
