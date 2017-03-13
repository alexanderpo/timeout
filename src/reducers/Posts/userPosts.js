import { GET_POSTS_BY_AUTHOR } from '../../actions/post';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_POSTS_BY_AUTHOR}_LOADING`:
      return {
        ...state,
        isLoading: true,
        posts: [],
      };
    case `${GET_POSTS_BY_AUTHOR}_SUCCESS`:
      return {
        isLoading: false,
        success: action.payload.success,
        posts: action.payload.posts,
      };
    case `${GET_POSTS_BY_AUTHOR}_FAILURE`:
      return {
        isLoading: false,
        success: action.payload.success,
        posts: [],
      };
    default:
      return state;
  }
}
