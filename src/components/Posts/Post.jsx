import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Divider, IconButton } from 'material-ui';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
// import UserProfilePhoto from '../../styles/images/user.png';


const propTypes = {
  params: PropTypes.object,
};

class Post extends Component {
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
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <span className="post-likes-counter">{params.likes}</span>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Post.propTypes = propTypes;
export default Post;
