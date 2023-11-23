import { put, select, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { TeamConstant, WebSocketConstant } from '../constants';

function* TeamSaga() {
  yield takeEvery(TeamConstant.LIST_ALL_TEAMS_SUCCESS, listAllTeamsSuccess);
  yield takeEvery(TeamConstant.VIEW_TEAM_SUCCESS, viewTeamSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* listAllTeamsSuccess(action) {
  yield put(ListAction.setList('team', 'all', action?.payload?.teams));
}

function* viewTeamSuccess(action) {
  yield put(DetailAction.setDetail('team', action?.payload?.team));
}

function* webSocketMessage(action) {
  const state = yield select();
  console.log('WebSocketMessage', action, state);
  switch (action?.payload?.event) {
    case 'viewed-team':
      break;
    default:
      break;
  }
}

export default TeamSaga;
