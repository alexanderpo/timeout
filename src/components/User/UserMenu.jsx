import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func,
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    color: '#fff',
  },
};

class UserMenu extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <span >{this.props.username}</span>
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
      </div>
    );
  }
}

UserMenu.propTypes = propTypes;

export default UserMenu;
