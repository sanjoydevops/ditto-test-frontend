import { put, takeEvery } from 'redux-saga/effects';

import { ListAction, UserAction } from '../actions';
import { UserConstant, WebSocketConstant } from '../constants';

function* UserSaga() {
  yield takeEvery(UserConstant.LIST_ALL_USERS_SUCCESS, listAllUsersSuccess);
  yield takeEvery(UserConstant.LIST_CONNECTED_USERS_SUCCESS, listConnectedUsersSuccess);
  yield takeEvery(UserConstant.LIST_LEADER_BOARD_USERS_SUCCESS, listLeaderBoardUsersSuccess);
  yield takeEvery(UserConstant.LIST_MATCH_USERS_SUCCESS, listMatchUsersSuccess);
  yield takeEvery(UserConstant.LIST_PEER_USERS_SUCCESS, listPeerUsersSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* listAllUsersSuccess(action) {
  yield put(ListAction.setList('user', 'all', [...action?.payload?.users]));
}

function* listConnectedUsersSuccess(action) {
  yield put(ListAction.setList('user', 'connected', [...action?.payload?.users]));
}

function* listLeaderBoardUsersSuccess(action) {
  yield put(ListAction.setList('user', 'leaderBoard', [...action?.payload?.users]));
}

function* listMatchUsersSuccess(action) {
  yield put(ListAction.setList('user', 'match', [...action?.payload?.users]));
}

function* listPeerUsersSuccess(action) {
  yield put(ListAction.setList('user', 'peer', [...action?.payload?.users]));
}

function* webSocketMessage(action) {
  switch (action?.payload?.event) {
    case 'updated-leader-board':
      yield put(UserAction.listLeaderBoardUsers());
      break;
    default:
      break;
  }
}

export default UserSaga;
