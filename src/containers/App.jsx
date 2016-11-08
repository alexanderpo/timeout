import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import HeaderBar from '../components/HeaderBar';
import LoggedMenu from '../components/LoggedMenu';
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
        <HeaderBar
          rightElement={
            <LoggedMenu
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
  const username = state.user.name ?
    state.user.name : '';

  return {
    username,
  };
}, dispatch => ({
  actions: bindActionCreators({
    logout,
    push,
  }, dispatch),
}))(Main);
