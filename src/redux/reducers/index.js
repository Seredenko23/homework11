import { combineReducers } from "redux";
import { notification } from './notification'
import { signIn } from './sign-in'

const rootReducer = combineReducers({
  notification,
  signIn
});

export default rootReducer