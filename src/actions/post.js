import { createAction } from 'redux-actions';

const CREATE_POST = 'CREATE_POST';
const LIKE_POST = 'LIKE_POST';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_LATEST_POSTS = 'GET_LATEST_POSTS';
export const CLEAR_ALL_POSTS = 'CLEAR_ALL_POSTS';
export const CLEAR_LATEST_POSTS = 'CLEAR_LATEST_POSTS';
export const CLEAR_AUTHOR_POSTS = 'CLEAR_AUTHOR_POSTS';
export const GET_AUTHOR_POSTS = 'GET_AUTHOR_POSTS';

export const clearAllPosts = createAction(CLEAR_ALL_POSTS);
export const clearLatestPosts = createAction(CLEAR_LATEST_POSTS);
export const clearAuthorPosts = createAction(CLEAR_AUTHOR_POSTS);

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

export const getAuthorPosts = (id) => { // eslint-disable-line
  return {
    type: GET_AUTHOR_POSTS,
    payload: {
      url: `users/${id}/posts`,
      method: 'get',
    },
  };
};

export const getLatestsPosts = () => { // eslint-disable-line
  return {
    type: GET_LATEST_POSTS,
    payload: {
      url: 'posts/latest',
      method: 'get',
    },
  };
};

export const likePost = (postId, userId) => {
  const data = { postId, userId };
  return {
    type: LIKE_POST,
    payload: {
      url: `posts/${postId}/like`,
      method: 'post',
      body: data,
    },
  };
};
