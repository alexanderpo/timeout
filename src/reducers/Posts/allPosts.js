import { GET_ALL_POSTS } from '../../actions/post';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_POSTS}_LOADING`:
      return {
        ...state,
        isLoading: true,
        posts: [],
      };
    case `${GET_ALL_POSTS}_SUCCESS`:
      return {
        isLoading: false,
        success: action.payload.success,
        posts: action.payload.posts,
      };
    case `${GET_ALL_POSTS}_FAILURE`:
      return {
        isLoading: false,
        success: action.payload.success,
        posts: [],
      };
    default:
      return state;
  }
}
