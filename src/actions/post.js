export const CREATE_POST_FIRST_STEP = 'CREATE_POST_FIRST_STEP';
export const GET_TIME_SEARCH_RESULT = 'GET_TIME_SEARCH_RESULT';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export function getAllPosts() {
  return {
    type: GET_ALL_POSTS,
    payload: {
      url: 'posts',
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

export function createPost(title, description, time, user) {
  return {
    type: CREATE_POST_FIRST_STEP,
    payload: {
      url: 'post/create',
      method: 'post',
      body: {
        title,
        description,
        time,
        user,
      },
    },
  };
}
