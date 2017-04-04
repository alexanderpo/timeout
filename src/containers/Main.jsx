import React, { Component, PropTypes } from 'react';
import { AppBar } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MainNavMenu from '../components/Menu/MainNavMenu';
import UserMenu from '../components/Menu/UserMenu';
import LatestPosts from '../components/Posts/LatestPosts';
import { logout } from '../actions/user';

const propTypes = {
  children: PropTypes.object,
  actions: PropTypes.shape({
    logout: PropTypes.func,
    push: PropTypes.func,
  }),
};

class Main extends Component {
  render() {
    const { actions } = this.props;

    return (
      <div className="user-left-menu-wrapper">
        <AppBar
          iconElementLeft={<MainNavMenu />}
          iconElementRight={<UserMenu logout={actions.logout} />}
        />
        <div>
          { this.props.children ? this.props.children : <LatestPosts /> }
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;
export default connect(null, dispatch => ({
  actions: bindActionCreators({
    logout,
    push,
  }, dispatch),
}))(Main);
