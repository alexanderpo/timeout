import { SIGN_IN, UPDATE_USER_DATA } from '../actions/user';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        hash: action.payload.hash,
        image: action.payload.image,
        token: action.payload.token,
        liked_posts: action.payload.liked_posts,
        created_at: action.payload.created_at,
        loggedIn: !action.payload.error,
      };
    case `${UPDATE_USER_DATA}_SUCCESS`:
      return {
        ...state,
        name: !action.payload.name ? state.name : action.payload.name,
        email: !action.payload.email ? state.email : action.payload.email,
        hash: !action.payload.hash ? state.hash : action.payload.hash,
        image: !action.payload.image ? state.image : action.payload.image,
      };
    default:
      return state;
  }
}
