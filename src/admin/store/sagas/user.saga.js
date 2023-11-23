import { put, select, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { UserConstant, WebSocketConstant } from '../constants';

function* UserSaga() {
  yield takeEvery(UserConstant.LIST_ALL_USERS_SUCCESS, listAllUsersSuccess);
  yield takeEvery(UserConstant.TOGGLE_ACCESS_USER_SUCCESS, toggleAccessUserSuccess);
  yield takeEvery(UserConstant.VIEW_USER_SUCCESS, viewUserSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* listAllUsersSuccess(action) {
  yield put(ListAction.setList('user', 'all', action?.payload?.users));
}

function* toggleAccessUserSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('user', 'all', [], 'update', action, state));
}

function* viewUserSuccess(action) {
  yield put(DetailAction.setDetail('user', action?.payload?.user));
}

function* webSocketMessage(action) {
  const state = yield select();
  console.log('WebSocketMessage', action, state);
  switch (action?.payload?.event) {
    case 'toggled-access-user':
      break;
    default:
      break;
  }
}

export default UserSaga;
