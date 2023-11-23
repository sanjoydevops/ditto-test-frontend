import { call, put, select, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { AdminConstant, WebSocketConstant } from '../constants';

function* AdminSaga() {
  yield takeEvery(AdminConstant.CREATE_ADMIN_SUCCESS, createAdminSuccess);
  yield takeEvery(AdminConstant.LIST_ALL_ADMINS_SUCCESS, listAllAdminsSuccess);
  yield takeEvery(AdminConstant.REMOVE_ADMIN_SUCCESS, removeAdminSuccess);
  yield takeEvery(AdminConstant.TOGGLE_ACCESS_ADMIN_SUCCESS, toggleAccessAdminSuccess);
  yield takeEvery(AdminConstant.UPDATE_ADMIN_SUCCESS, updateAdminSuccess);
  yield takeEvery(AdminConstant.VIEW_ADMIN_SUCCESS, viewAdminSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* createAdminSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('admin', 'all', [], 'add', action, state));
}

function* listAllAdminsSuccess(action) {
  yield put(ListAction.setList('admin', 'all', action?.payload?.admins));
}

function* removeAdminSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('admin', 'all', [], 'remove', action, state));
}

function* toggleAccessAdminSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('admin', 'all', [], 'update', action, state));
}

function* updateAdminSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('admin', 'all', [], 'update', action, state));
}

function* viewAdminSuccess(action) {
  yield put(DetailAction.setDetail('admin', action?.payload?.admin));
}

function* webSocketMessage(action) {
  // const state = yield select();
  switch (action?.payload?.event) {
    case 'created-admin':
      yield call(console.log, 'action', action);
      break;
    case 'removed-admin':
      break;
    case 'toggled-access-admin':
      break;
    case 'updated-admin':
      break;
    default:
      break;
  }
}

export default AdminSaga;
