import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Divider, IconButton } from 'material-ui';
import UserProfilePhoto from '../../styles/images/user.png';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';

class Post extends Component {
  render() {
    return (
      <div>
        <Card className="post-container">
          <CardHeader
            title="Имя пользователя"
            avatar={UserProfilePhoto}
            subtitle="1 января 2017"
            className="post-header"
          >
            <div className="post-header-title-wrapper">
              <h2 className="post-header-title">Тут будет заголовок записи</h2>
            </div>
          </CardHeader>
          <Divider />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions className="post-action-wrapper">
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <span className="post-likes-counter">2</span>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Post;
