import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Avatar, Popover, Menu, MenuItem, FlatButton, Divider } from 'material-ui';
import CreateIcon from 'material-ui/svg-icons/content/create';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import UserProfilePhoto from '../../styles/images/user.png';

const propTypes = {
  data: PropTypes.object,
  logout: PropTypes.func,
};

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
    const { data, logout } = this.props;

    return (
      <div className="user-right-menu-wrapper">
        <Avatar
          onTouchTap={this.handleUserMenuOpen}
          className="user-right-menu-avatar"
          src={!data.image ? UserProfilePhoto : data.image}
          size={35}
        />
        <Popover
          open={menuOpen}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleUserMenuClose}
        >
          <Menu listStyle={{ width: '220px' }}>
            <MenuItem
              primaryText={data.email}
              disabled={true}
              leftIcon={<EmailIcon />}
            />
            <MenuItem
              primaryText="Настройки"
              leftIcon={<SettingsIcon />}
              containerElement={<Link to="/profile" />}
              onTouchTap={this.handleUserMenuClose}
            />
            <Divider />
            <MenuItem
              primaryText="Выйти"
              leftIcon={<ExitIcon />}
              containerElement={<Link to="/signin" />}
              onTouchTap={logout}
            />
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

UserMenu.propTypes = propTypes;
export default UserMenu;
