import { GET_AUTHOR_POSTS } from '../../actions/post';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_AUTHOR_POSTS}_SUCCESS`:
      return action.payload.posts;
    case `${GET_AUTHOR_POSTS}_FAILURE`:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
}
