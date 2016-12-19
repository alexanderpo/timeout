import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Badge, Divider, IconButton } from 'material-ui';
import Comment from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Favorite from 'material-ui/svg-icons/action/favorite-border';

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

const propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.number,
  likes: PropTypes.number,
  comments: PropTypes.number,
  avatar: PropTypes.string,
  createdDate: PropTypes.string,
};

class SearchPostPreview extends Component { // eslint-disable-line
  render() {
    const {
      title,
      user,
      description,
      time,
      likes,
      comments,
      createdDate,
      avatar,
    } = this.props;
    return (
      <Badge
        badgeContent={`${time}min`}
        style={styles.badgeBox}
        badgeStyle={styles.badge}
        primary={true}
      >
        <Card style={styles.box}>
          <CardHeader
            title={title}
            avatar={avatar}
            subtitle={createdDate}
            actAsExpander={true}
          />
          <Divider />
          <CardText>{description}</CardText>
          <Divider />
          <CardActions>
            <span style={styles.text}>{user}</span>
            <IconButton tooltip="Comment" tooltipPosition="top-center">
              <Comment />
            </IconButton>
            <span style={styles.text}>Comments: {comments}</span>
            <IconButton tooltip="Like" tooltipPosition="top-center">
              <Favorite />
            </IconButton>
            <span style={styles.text}>Likes: {likes}</span>
          </CardActions>
        </Card>
      </Badge>
    );
  }
}

SearchPostPreview.propTypes = propTypes;
export default SearchPostPreview;
