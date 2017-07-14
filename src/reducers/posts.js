import { GET_ALL_POSTS } from '../actions/post';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_POSTS}_SUCCESS`:
      return action.payload.posts;
    case `${GET_ALL_POSTS}_FAILURE`:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
}
