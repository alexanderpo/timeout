import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../../components/Profile/UserProfile';

const propTypes = {
  userData: PropTypes.object,
};

class UserProfileWrapper extends Component {
  render() {
    return (
      <UserProfile data={this.props.userData} />
    );
  }
}

UserProfileWrapper.propTypes = propTypes;

export default connect(state => {
  const userData = state.user ? state.user : '';

  return { userData };
})(UserProfileWrapper);
