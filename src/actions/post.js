// import { createAction } from 'redux-actions';

const CREATE_POST = 'CREATE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const createPost = (title, categories, description, author) => {
  const data = { title, categories, description, author };
  return {
    type: CREATE_POST,
    payload: {
      url: 'posts/create',
      method: 'post',
      body: data,
    },
  };
};

export const getAllPosts = () => { // eslint-disable-line
  return {
    type: GET_ALL_POSTS,
    payload: {
      url: 'posts',
      method: 'get',
    },
  };
};
