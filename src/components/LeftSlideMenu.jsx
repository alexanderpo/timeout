import React, { Component, PropTypes } from 'react';
import {
  Drawer,
  MenuItem,
} from 'material-ui';

const propTypes = {
  handleOpenLeftSlideMenu: PropTypes.func,
  handleCloseLeftSlideMenu: PropTypes.func,
};

class LeftSlideMenu extends Component {
  render() {
    return (
      <Drawer
        docked={false}
        width={300}
        open={this.props.handleOpenLeftSlideMenu}
        onRequestChange={this.props.handleCloseLeftSlideMenu}
      >
        <MenuItem onTouchTap={this.props.handleCloseLeftSlideMenu}>Menu item 1 </MenuItem>
        <MenuItem onTouchTap={this.props.handleCloseLeftSlideMenu}>Menu item 2 </MenuItem>
      </Drawer>
    );
  }
}

LeftSlideMenu.propTypes = propTypes;

export default LeftSlideMenu;
