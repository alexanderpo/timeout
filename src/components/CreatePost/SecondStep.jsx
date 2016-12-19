import React, { Component, PropTypes } from 'react';
import PostPreview from '../Post/SearchPostPreview';

const propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.number,
  createdDate: PropTypes.string,
};

class SecondStep extends Component { // eslint-disable-line

  render() {
    const { title, user, description, time, avatar, createdDate } = this.props;
    return (
      <PostPreview
        user={user}
        title={title}
        avatar={avatar}
        description={description}
        time={time}
        createdDate={createdDate}
      />
    );
  }
}

SecondStep.propTypes = propTypes;

export default SecondStep;
