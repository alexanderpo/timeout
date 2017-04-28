// import { createAction } from 'redux-actions';

const CREATE_POST = 'CREATE_POST';

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
