import { SIGN_IN } from '../actions/user';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        hash: action.payload.hash,
        token: action.payload.token,
        liked_posts: action.payload.liked_posts,
        loggedIn: !action.payload.error,
      };
    default:
      return state;
  }
}
