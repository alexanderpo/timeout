import React, { Component } from 'react';
import { FlatButton, ToolbarGroup } from 'material-ui';
import { Link } from 'react-router';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import SearchIcon from 'material-ui/svg-icons/action/search';

class MainNavMenu extends Component {
  render() {
    return (
      <div>
        <ToolbarGroup>
          <FlatButton
            icon={<HomeIcon />}
            label="Main"
            style={{ color: 'white' }}
            containerElement={<Link to="/" />}
          />
          <FlatButton
            icon={<FavoriteIcon />}
            label="Liked"
            style={{ color: 'white' }}
            containerElement={<Link to="" />}
          />
          <FlatButton
            icon={<SearchIcon />}
            label="Search"
            style={{ color: 'white' }}
            containerElement={<Link to="" />}
          />
        </ToolbarGroup>
      </div>
    );
  }
}

export default MainNavMenu;
