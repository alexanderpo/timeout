import React, { Component } from 'react';
import {
  AppBar,
  Drawer,
  MenuItem,
} from 'material-ui';
import LoggedMenu from '../components/LoggedMenu';
import TimeSlider from '../components/TimeSlider';
import TaskCard from '../components/TaskCard';
// import LeftSlideMenu from '../components/LeftSlideMenu';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      leftSlideMenuOpen: false,
      timeSliderValue: 5,
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
        <div>
          <AppBar
            title="timeout"
            onLeftIconButtonTouchTap={this.handleOpenLeftSlideMenu}
            iconElementRight={<LoggedMenu />}
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
            <MenuItem>Menu item 1</MenuItem>
            <MenuItem>Menu item 2</MenuItem>
          </Drawer>
        </div>
        <div>
          <TimeSlider />
          <TaskCard />
        </div>
      </div>
    );
  }
}

export default Main;
