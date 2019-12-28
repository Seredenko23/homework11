import { ACTION_LOGIN_USER } from "../actions/actions";

const initialState = {
  isLoggedIn: false,
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ACTION_LOGIN_USER:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};