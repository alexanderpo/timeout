import React, { Component } from 'react';
import { Link } from 'react-router';
import { Avatar, Popover, Menu, MenuItem, FlatButton } from 'material-ui';
import CreateIcon from 'material-ui/svg-icons/content/create';
import UserProfilePhoto from '../../styles/images/user.png';

class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };

    this.handleUserMenuOpen = this.handleUserMenuOpen.bind(this);
    this.handleUserMenuClose = this.handleUserMenuClose.bind(this);
  }

  handleUserMenuOpen(event) {
    event.preventDefault();
    this.setState({
      menuOpen: true,
      anchorEl: event.currentTarget,
    });
  }

  handleUserMenuClose() {
    this.setState({
      menuOpen: false,
    });
  }

  render() {
    const { menuOpen, anchorEl } = this.state;

    return (
      <div className="user-right-menu-wrapper">
        <Avatar
          onTouchTap={this.handleUserMenuOpen}
          className="user-right-menu-avatar"
          src={UserProfilePhoto}
          size={35}
        />
        <Popover
          open={menuOpen}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleUserMenuClose}
        >
          <Menu>
            <MenuItem
              primaryText="Настройки"
              containerElement={<Link to="/profile" />}
              onTouchTap={this.handleUserMenuClose}
            />
            <MenuItem primaryText="Выйти" />
          </Menu>
        </Popover>
        <FlatButton
          style={{ color: 'white', marginBottom: 3 }}
          icon={<CreateIcon />}
          label="Создать"
          containerElement={<Link to="/posts/create" />}
        />
      </div>
    );
  }
}

export default UserMenu;
