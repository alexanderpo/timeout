import React, { Component, PropTypes } from 'react';
import { AppBar } from 'material-ui';
import MainNavMenu from '../components/Menu/MainNavMenu';
import UserMenu from '../components/Menu/UserMenu';
import LatestPosts from '../components/Posts/LatestPosts';

const propTypes = {
  children: PropTypes.object,
};

class Main extends Component {
  render() {
    return (
      <div className="user-left-menu-wrapper">
        <AppBar
          iconElementLeft={<MainNavMenu />}
          iconElementRight={<UserMenu />}
        />
        <div>
          { this.props.children ? this.props.children : <LatestPosts /> }
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;
export default Main;
