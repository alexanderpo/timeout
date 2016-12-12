import { SIGN_IN, UPDATE_USER } from '../actions/user';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
      return {
        ...action.payload.user,
        success: action.payload.success,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        image: {
          data: action.payload.image,
          type: action.payload.img_type,
        },
        message: action.payload.message,
        token: action.payload.token,
      };
    case UPDATE_USER:
      return {
        ...state,
        name: action.payload.data.name,
        email: action.payload.data.email,
        image: {
          data: action.payload.data.image.data,
          type: action.payload.data.image.type,
        },
      };
    default:
      return state;
  }
}
