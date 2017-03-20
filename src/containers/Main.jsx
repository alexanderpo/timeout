import React, { Component } from 'react';
import { Tabs, Tab, Avatar } from 'material-ui';
import UserProfile from '../components/Profile/UserProfile';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import SearchIcon from 'material-ui/svg-icons/action/search';
import CreateIcon from 'material-ui/svg-icons/content/create';
import UserProfilePhoto from '../styles/images/user.png';

class Main extends Component {
  render() {
    return (
      <div>
        <Tabs >
          <Tab icon={<HomeIcon />} label="Главная">
            <div></div>
          </Tab>
          <Tab icon={<FavoriteIcon />} label="Понравившееся">
            <div></div>
          </Tab>
          <Tab icon={<SearchIcon />} label="Поиск" />
          <Tab icon={<Avatar src={UserProfilePhoto} size={30} /> } label="Профиль">
            <UserProfile />
          </Tab>
          <Tab icon={<CreateIcon />} label="Создать запись" />
        </Tabs>
      </div>
    );
  }
}

export default Main;
