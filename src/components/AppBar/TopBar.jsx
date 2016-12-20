import React, { Component, PropTypes } from 'react';
import {
  AppBar,
} from 'material-ui';

const propTypes = {
  title: PropTypes.string,
  rightElement: PropTypes.object,
  leftElement: PropTypes.object,
};

class TopBar extends Component {

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          iconElementLeft={this.props.leftElement}
          iconElementRight={this.props.rightElement}
        />
      </div>
    );
  }
}

TopBar.propTypes = propTypes;

export default TopBar;
