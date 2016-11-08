import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import HeaderBar from '../components/HeaderBar';
import LoggedMenu from '../components/LoggedMenu';
import { logout } from '../actions/user';

const propTypes = {
  children: PropTypes.object,
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

export default connect(null, dispatch => ({
  actions: bindActionCreators({
    logout,
    push,
  }, dispatch),
}))(Main);
