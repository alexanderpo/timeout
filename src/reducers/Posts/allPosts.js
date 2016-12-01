import { GET_ALL_POSTS } from '../../actions/post';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_POSTS}_SUCCESS`:
      return {
        success: action.payload.success,
        posts: action.payload.posts,
      };
    case `${GET_ALL_POSTS}_FAILURE`:
      return {
        success: action.payload.success,
      };
    default:
      return state;
  }
}
