import React, { Component, PropTypes } from 'react';
import { AppBar } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MainNavMenu from '../components/Menu/MainNavMenu';
import UserMenu from '../components/Menu/UserMenu';
import { logout } from '../actions/user';

const propTypes = {
  data: PropTypes.object,
  children: PropTypes.object,
  actions: PropTypes.shape({
    logout: PropTypes.func,
    push: PropTypes.func,
  }),
};

class Main extends Component {

  render() {
    const { data, actions } = this.props;

    return (
      <div>
        <AppBar
          style={{ zIndex: 900 }}
          iconElementLeft={<MainNavMenu />}
          iconElementRight={<UserMenu data={data} logout={actions.logout} />}
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
  const data = state.user ? state.user : '';

  return { data };
}, dispatch => ({
  actions: bindActionCreators({
    logout,
    push,
  }, dispatch),
}))(Main);
