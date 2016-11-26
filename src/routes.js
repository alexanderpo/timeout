import React from 'react';
import { Route, IndexRedirect } from 'react-router';
/* Containers */
import App from './containers/App';
import Search from './containers/Search/Index';
import CreatePost from './containers/CreatePost/Index';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Profile from './containers/User/Index';

export default function (ensureAuthenticated) {
  return (
    <Route>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="/" component={App} onEnter={ensureAuthenticated}>
        <IndexRedirect to="search" />

        <Route path="profile" component={Profile} />
        <Route path="search" component={Search} />
        <Route path="create" component={CreatePost} />
      </Route>
    </Route>
  );
}
