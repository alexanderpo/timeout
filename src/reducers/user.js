import { SIGN_IN, LOGOUT } from '../actions/user';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
      return {
        ...action.payload.user,
        message: action.payload.message,
        success: action.payload.success,
        name: action.payload.name,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
