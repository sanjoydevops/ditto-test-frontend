import { combineReducers } from 'redux';

import AppReducer from './app.reducer';
import AuthReducer from './auth.reducer';
import ChatReducer from './chat.reducer';
import DetailReducer from './detail.reducer';
import FormReducer from './form.reducer';
import ListReducer from './list.reducer';
import { AppConstant } from '../constants';

const combinedReducers = combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  chat: ChatReducer,
  detail: DetailReducer,
  form: FormReducer,
  list: ListReducer,
});

const rootReducer = (state, action) => {
  if (action.type === AppConstant.RESET_STORE) {
    state = undefined;
  }
  return combinedReducers(state, action);
};

export default rootReducer;
