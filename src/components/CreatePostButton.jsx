import React, { Component } from 'react';
import { Link } from 'react-router';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  addButton: {
    margin: 20,
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
};

class CreatePostButton extends Component {
  render() {
    return (
      <FloatingActionButton
        style={styles.addButton}
        containerElement={<Link to="/create"/>} // eslint-disable-line
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

export default CreatePostButton;
