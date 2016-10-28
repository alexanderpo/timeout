import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {
  AppBar,
  Drawer,
  MenuItem,
} from 'material-ui';

const propTypes = {
  rightElement: PropTypes.object,
};

class HeaderBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      leftSlideMenuOpen: false,
    };

    this.handleOpenLeftSlideMenu = this.handleOpenLeftSlideMenu.bind(this);
    this.handleCloseLeftSlideMenu = this.handleCloseLeftSlideMenu.bind(this);
  }

  handleOpenLeftSlideMenu() {
    this.setState({
      leftSlideMenuOpen: !this.state.LeftSlideMenuOpen,
    });
  }

  handleCloseLeftSlideMenu() {
    this.setState({
      leftSlideMenuOpen: false,
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="timeout"
          onLeftIconButtonTouchTap={this.handleOpenLeftSlideMenu}
          iconElementRight={this.props.rightElement}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.leftSlideMenuOpen}
          onRequestChange={this.handleCloseLeftSlideMenu}
        >
          <AppBar
            title="timeout"
            onLeftIconButtonTouchTap={this.handleCloseLeftSlideMenu}
          />
          <Link to="/">
            <MenuItem onClick={this.handleCloseLeftSlideMenu}>Main page</MenuItem>
          </Link>
          <Link to="search">
            <MenuItem onClick={this.handleCloseLeftSlideMenu}>Search</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

HeaderBar.propTypes = propTypes;

export default HeaderBar;
