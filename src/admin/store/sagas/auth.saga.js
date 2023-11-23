import { call, put, takeEvery } from 'redux-saga/effects';

import { AppAction, AuthAction } from '../actions';
import { AuthConstant } from '../constants';
import history from '../../../shared/history';

function* AuthSaga() {
  yield takeEvery(AuthConstant.CHANGE_PASSWORD_SUCCESS, changePasswordSuccess);
  yield takeEvery(AuthConstant.LOGIN_SUCCESS, loginSuccess);
  yield takeEvery([AuthConstant.LOGOUT_ERROR, AuthConstant.LOGOUT_SUCCESS], logoutErrorOrSuccess);
  yield takeEvery(AuthConstant.REGISTER_SUCCESS, registerSuccess);
}

function* changePasswordSuccess(action) {
  yield put(AuthAction.setAuthUser(action?.payload?.user));
}

function* loginSuccess(action) {
  yield put(AuthAction.setAuth(action?.payload));
}

function* logoutErrorOrSuccess() {
  yield call(AuthAction.removeAuth);
  yield put(AppAction.resetStore());
}

function* registerSuccess() {
  yield call(history.push, '/admin');
}

export default AuthSaga;
