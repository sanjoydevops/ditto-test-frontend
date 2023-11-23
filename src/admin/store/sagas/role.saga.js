import { put, select, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { RoleConstant, WebSocketConstant } from '../constants';

function* RoleSaga() {
  yield takeEvery(RoleConstant.CREATE_ROLE_SUCCESS, createRoleSuccess);
  yield takeEvery(RoleConstant.LIST_ALL_PERMISSIONS_SUCCESS, listAllPermissionsSuccess);
  yield takeEvery(RoleConstant.LIST_ALL_ROLES_SUCCESS, listAllRolesSuccess);
  yield takeEvery(RoleConstant.REMOVE_ROLE_SUCCESS, removeRoleSuccess);
  yield takeEvery(RoleConstant.UPDATE_ROLE_SUCCESS, updateRoleSuccess);
  yield takeEvery(RoleConstant.VIEW_ROLE_SUCCESS, viewRoleSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* createRoleSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('role', 'all', [], 'add', action, state));
}

function* listAllPermissionsSuccess(action) {
  yield put(ListAction.setList('permission', 'all', [...action?.payload?.permissions]));
}

function* listAllRolesSuccess(action) {
  yield put(ListAction.setList('role', 'all', action?.payload?.roles));
}

function* removeRoleSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('role', 'all', [], 'remove', action, state));
}

function* updateRoleSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('role', 'all', [], 'update', action, state));
}

function* viewRoleSuccess(action) {
  yield put(DetailAction.setDetail('role', action?.payload?.role));
}

function* webSocketMessage(action) {
  const state = yield select();
  console.log('WebSocketMessage', action, state);
  switch (action?.payload?.event) {
    case 'created-role':
      break;
    case 'removed-role':
      break;
    case 'updated-role':
      break;
    default:
      break;
  }
}

export default RoleSaga;
