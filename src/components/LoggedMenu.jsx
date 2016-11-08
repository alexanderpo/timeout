import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const propTypes = {
  logout: PropTypes.func,
};

class LoggedMenu extends Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton iconStyle={{ color: 'white' }}>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText="Sign out"
          containerElement={<Link to="/signin" />}  // eslint-disable-line
          onTouchTap={() => { this.props.logout(); }}
        />
      </IconMenu>
    );
  }
}

LoggedMenu.propTypes = propTypes;

export default LoggedMenu;
