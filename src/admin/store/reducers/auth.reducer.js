import { AuthAction } from '../actions';
import authReducer from '../../../shared/store/reducers/auth.reducer';

const AuthReducer = (state = AuthAction.getAuth(), action) => {
  return authReducer(state, action);
};

export default AuthReducer;
