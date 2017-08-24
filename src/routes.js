import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
/* Containers */
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Main from './containers/Main';
import UserProfile from './containers/Profile/Index';
import AllPosts from './containers/Posts/AllPosts';
import LatestPosts from './containers/Posts/Latest';
import CreatePost from './containers/Posts/Create';
import UserPosts from './containers/Posts/UserPosts';

export default function (ensureAuthenticated) {
  return (
    <Route>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="/" component={Main} onEnter={ensureAuthenticated}>
        <IndexRedirect to="posts/latest" />
        <Route path="profile" component={UserProfile} />

        <Route path="posts">
          <IndexRoute component={AllPosts} />
          <Route path="latest" component={LatestPosts} />
          <Route path="create" component={CreatePost} />
          <Route path="user" component={UserPosts} />
        </Route>

      </Route>
    </Route>
  );
}
