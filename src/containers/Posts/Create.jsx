import React, { Component } from 'react';
import CreatePostForm from '../../components/Posts/CreatePostForm';

const categories = [
  'Спорт',
  'Кино',
  'Музыка',
  'Кулинария',
  'Программирование',
  'Фотография',
];

class CreatePost extends Component {
  render() {
    return (
      <CreatePostForm categories={categories} />
    );
  }
}

export default CreatePost;
