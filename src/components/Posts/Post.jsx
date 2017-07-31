import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Divider, IconButton } from 'material-ui';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const propTypes = {
  params: PropTypes.object,
  likePost: PropTypes.func,
};

const styles = {
  liked: {
    color: '#ed4956',
  },
};

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: this.props.params.isLiked,
      likes: this.props.params.likes,
    };

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const { likes, isLiked } = this.state;
    const userId = JSON.parse(localStorage.getItem('user')).id;
    this.props.likePost(this.props.params.id, userId)
    .then(() => {
      this.setState({
        isLiked: !isLiked,
        likes: isLiked ? (likes - 1) : (likes + 1),
      });
    });
  }
  render() {
    const { params } = this.props;

    return (
      <div>
        <Card className="post-container">
          <CardHeader
            title={params.author.name}
            avatar={params.author.image}
            subtitle={params.createdAt}
            className="post-header"
          >
            <div className="post-header-title-wrapper">
              <h2 className="post-header-title">{params.title}</h2>
              <h5 className="post-header-category">
                {
                  params.categories.map(category => (category + ' | ')) // eslint-disable-line
                }
              </h5>
            </div>
          </CardHeader>
          <Divider />
          <CardText>
            {params.description}
          </CardText>
          <CardActions className="post-action-wrapper">
            <IconButton
              tooltip={`${this.state.likes}`}
              tooltipPosition="top-center"
              onClick={this.handleLike}
              iconStyle={(this.state.isLiked) ? styles.liked : {}}
            >
              { this.state.isLiked ? <Favorite /> : <FavoriteBorder /> }
            </IconButton>
            <span className="post-likes-counter">{this.state.likes}</span>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Post.propTypes = propTypes;
export default Post;
