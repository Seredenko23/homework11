import {ACTION_ADD_NOTIFICATION,
        ACTION_REMOVE_NOTIFICATION} from "../actions/notification";

const initialState = {
  type: '',
  message: '',
  visible: false,
};

export const notification = (state=initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_NOTIFICATION:
      return {
        ...state,
        type: action.payload.type,
        message: action.payload.message,
        visible: true,
      };
    case ACTION_REMOVE_NOTIFICATION: {
      return {
        type: '',
        message: '',
        visible: false,
      };
    }
    default:
      return state;
  }
};