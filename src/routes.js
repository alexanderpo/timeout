import React from 'react';
import { Route, IndexRoute } from 'react-router';
/* Containers */
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Main from './containers/Main';
import UserProfile from './containers/Profile/Index';
import AllPosts from './containers/Posts/AllPosts';
import CreatePost from './containers/Posts/Create';

export default function (ensureAuthenticated) {
  return (
    <Route>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="/" component={Main} onEnter={ensureAuthenticated}>
        <Route path="profile" component={UserProfile} />

        <Route path="posts">
          <IndexRoute component={AllPosts} />

          <Route path="create" component={CreatePost} />
        </Route>

      </Route>
    </Route>
  );
}
