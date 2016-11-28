import { SIGN_IN } from '../actions/user';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
      return {
        ...action.payload.user,
        success: action.payload.success,
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
