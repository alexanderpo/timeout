import { GET_LATEST_POSTS } from '../../actions/post';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_LATEST_POSTS}_SUCCESS`:
      return action.payload.latestPosts;
    case `${GET_LATEST_POSTS}_FAILURE`:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
}
