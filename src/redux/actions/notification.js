export const ACTION_ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const ACTION_REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const addNotification = (type, message) => {
  return {
    type: ACTION_ADD_NOTIFICATION,
    payload: {
      type: type,
      message: message,
    }
  }
};

export const removeNotification = () => {
  return {
    type: ACTION_REMOVE_NOTIFICATION,
    payload: {}
  }
};


export const showNotificationWithTimeout = (type, message) => {
  return (dispatch) => {
    dispatch(addNotification(type, message));
    setTimeout(() => {
      dispatch(removeNotification())
    }, 7000)
  }
};