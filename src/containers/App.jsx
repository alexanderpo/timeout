import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TopBar from '../components/AppBar/TopBar';
import UserMenu from '../components/User/UserMenu';
import { logout } from '../actions/user';

const propTypes = {
  children: PropTypes.object,
  username: PropTypes.string,
  actions: PropTypes.shape({
    logout: PropTypes.func, // eslint-disable-line
    push: PropTypes.func, // eslint-disable-line
  }),
};

class Main extends Component {
  render() {
    const { actions } = this.props;

    return (
      <div>
        <TopBar
          rightElement={
            <UserMenu
              push={actions.push}
              logout={actions.logout}
              username={this.props.username}
            />
          }
        />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default connect((state) => {
  const username = state.user.data.name ?
    state.user.data.name : '';

  return {
    username,
  };
}, dispatch => ({
  actions: bindActionCreators({
    logout,
    push,
  }, dispatch),
}))(Main);
