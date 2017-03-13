import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Badge, Divider, IconButton } from 'material-ui';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 500,
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
    margin: 2,
  },
  textBlock: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  descriptionBlock: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  liked: {
    color: '#ed4956',
  },
};

const propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.number,
  likes: PropTypes.number,
  likePost: PropTypes.func,
  avatar: PropTypes.string,
  createdDate: PropTypes.string,
  userId: PropTypes.string,
  postId: PropTypes.string,
  isLiked: PropTypes.bool,
};

class SearchPostPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: this.props.isLiked,
      likes: this.props.likes,
    };

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const { likes, isLiked } = this.state;
    this.props.likePost(this.props.postId, this.props.userId)
    .then(() => {
      this.setState({
        isLiked: !isLiked,
        likes: isLiked ? (likes - 1) : (likes + 1),
      });
    });
  }

  render() {
    const {
      title,
      user,
      description,
      time,
      likes,
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
          <CardActions style={styles.descriptionBlock}>
            <div style={styles.textBlock}>
              <span style={styles.text}>Users liked: <strong>{this.state.likes}</strong></span>
              <span style={styles.text}>Author: <strong>{user}</strong></span>
            </div>
            <IconButton
              tooltip={`${this.state.likes}`}
              tooltipPosition="top-center"
              onClick={this.handleLike}
              iconStyle={(this.state.isLiked) ? styles.liked : {}}
            >
              { this.state.isLiked ? <Favorite /> : <FavoriteBorder /> }
            </IconButton>
          </CardActions>
        </Card>
      </Badge>
    );
  }
}

SearchPostPreview.propTypes = propTypes;
export default SearchPostPreview;
