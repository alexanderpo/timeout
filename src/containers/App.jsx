import React, { Component, PropTypes } from 'react';
import HeaderBar from '../components/HeaderBar';
import LoggedMenu from '../components/LoggedMenu';

const propTypes = {
  children: PropTypes.object,
};

class Main extends Component {
  render() {
    return (
      <div>
        <HeaderBar rightElement={<LoggedMenu />} />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
