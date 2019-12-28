export const ACTION_LOGIN_USER = 'LOGIN_USER';

export const loginUser = (user) => {
  return {
    type: ACTION_LOGIN_USER,
    payload: user,
  };
};

