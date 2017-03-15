import React from 'react';
import { Route } from 'react-router';
/* Containers */
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

export default function () {
  return (
    <Route>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
    </Route>
  );
}
