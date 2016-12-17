export const CREATE_POST_FIRST_STEP = 'CREATE_POST_FIRST_STEP';
export const GET_TIME_SEARCH_RESULT = 'GET_TIME_SEARCH_RESULT';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_POSTS_BY_AUTHOR = 'GET_POSTS_BY_AUTHOR';

export function getAllPosts() {
  return {
    type: GET_ALL_POSTS,
    payload: {
      url: 'posts',
      method: 'get',
    },
  };
}

export function getPostsByAuthor(id) {
  return {
    type: GET_POSTS_BY_AUTHOR,
    payload: {
      url: `posts-by-author/${id}`,
      method: 'get',
    },
  };
}

export function getTimeSearchResult(time) {
  return {
    type: GET_TIME_SEARCH_RESULT,
    payload: {
      url: 'posts/search',
      method: 'post',
      body: { time },
    },
  };
}

export function createPost(title, description, time, userId) {
  return {
    type: CREATE_POST_FIRST_STEP,
    payload: {
      url: 'post/create',
      method: 'post',
      body: {
        title,
        description,
        time,
        userId,
      },
    },
  };
}
