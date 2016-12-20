import { GET_TIME_SEARCH_RESULT } from '../../actions/post';

export default function (state = {}, action) {
  switch (action.type) {
    case `${GET_TIME_SEARCH_RESULT}_LOADING`:
      return {
        ...state,
        isLoading: true,
        posts: [],
      };
    case `${GET_TIME_SEARCH_RESULT}_SUCCESS`:
      return {
        isLoading: false,
        success: action.payload.success,
        posts: action.payload.posts,
      };
    case `${GET_TIME_SEARCH_RESULT}_FAILURE`:
      return {
        isLoading: false,
        success: action.payload.success,
        posts: [],
      };
    default:
      return state;
  }
}
