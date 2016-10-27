import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Badge, Divider, IconButton } from 'material-ui';
import Comment from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Favorite from 'material-ui/svg-icons/action/favorite-border';

import ProfileImage from '../styles/images/user.png';

const styles = {
  box: {
    width: 400,
    margin: 20,
  },
  badgeBox: {
    padding: 0,
    display: 'inline-flex',
    margin: 20,
  },
  badge: {
    width: 52,
    height: 52,
    fontSize: 14,
    zIndex: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: 300,
  },
};

class SearchSingleTask extends Component {
  render() {
    return (
      <Badge
        badgeContent="120min"
        style={styles.badgeBox}
        badgeStyle={styles.badge}
        primary={true}
      >
        <Card style={styles.box}>
          <CardHeader
            title="Title text"
            avatar={ProfileImage}
            subtitle="Jun 1, 2015"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <Divider />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <Divider />
          <CardActions>
            <span style={styles.text}>Username</span>
            <IconButton tooltip="Comment" tooltipPosition="top-center">
              <Comment />
            </IconButton>
            <span style={styles.text}>Comments: 2</span>
            <IconButton tooltip="Like" tooltipPosition="top-center">
              <Favorite />
            </IconButton>
            <span style={styles.text}>Likes: 25</span>
          </CardActions>
        </Card>
      </Badge>
    );
  }
}

export default SearchSingleTask;
