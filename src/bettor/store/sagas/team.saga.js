import { call, put, select, takeEvery } from 'redux-saga/effects';

import { AppAction, DetailAction, ListAction } from '../actions';
import { TeamConstant, WebSocketConstant } from '../constants';
import history from '../../../shared/history';

function* TeamSaga() {
  yield takeEvery(TeamConstant.CREATE_TEAM_SUCCESS, createTeamSuccess);
  yield takeEvery([TeamConstant.INVITE_TO_TEAM_ERROR, TeamConstant.LEAVE_TEAM_ERROR], inviteToOrleaveTeamError);
  yield takeEvery(TeamConstant.JOIN_TEAM_ERROR, joinTeamError);
  yield takeEvery(TeamConstant.JOIN_TEAM_SUCCESS, joinTeamSuccess);
  yield takeEvery(TeamConstant.LEAVE_TEAM_SUCCESS, leaveTeamSuccess);
  yield takeEvery(TeamConstant.LIST_ALL_TEAMS_SUCCESS, listAllTeamsSuccess);
  yield takeEvery(TeamConstant.LIST_JOINED_TEAMS_SUCCESS, listJoinedTeamsSuccess);
  yield takeEvery(TeamConstant.LIST_MY_TEAMS_SUCCESS, listMyTeamsSuccess);
  yield takeEvery(TeamConstant.REMOVE_TEAM_MEMBER_SUCCESS, removeTeamMemberSuccess);
  yield takeEvery(TeamConstant.TOGGLE_TEAM_ACCESS_ERROR, toggleTeamAccessError);
  yield takeEvery(TeamConstant.TOGGLE_TEAM_ACCESS_SUCCESS, toggleTeamAccessSuccess);
  yield takeEvery(TeamConstant.UPDATE_TEAM_SUCCESS, updateTeamSuccess);
  yield takeEvery(TeamConstant.VIEW_TEAM_SUCCESS, viewTeamSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* createTeamSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('team', 'my', [], 'add', action, state));
}

function* inviteToOrleaveTeamError(action) {
  if ('bet_active' === action?.payload?.error?.type) {
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* joinTeamError(action) {
  if ('team_member_removed' === action?.payload?.error?.type) {
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* joinTeamSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('team', 'joined', [], 'add', action, state));
  yield call(history.push, '/profile');
}

function* leaveTeamSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('team', 'joined', [], 'remove', action, state));
}

function* listAllTeamsSuccess(action) {
  yield put(ListAction.setList('team', 'all', [...action?.payload?.teams]));
}

function* listJoinedTeamsSuccess(action) {
  yield put(ListAction.setList('team', 'joined', [...action?.payload?.teams]));
}

function* listMyTeamsSuccess(action) {
  yield put(ListAction.setList('team', 'my', [...action?.payload?.teams]));
}

function* removeTeamMemberSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('team', 'my', [], 'update', action, state));
  yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.message } }));
  yield put(AppAction.toggle({ key: 'editTeamModal', value: { ...action?.payload?.team } }));
}

function* toggleTeamAccessError(action) {
  if ('bet_active' === action?.payload?.error?.type) {
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* toggleTeamAccessSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('team', 'my', [], 'update', action, state));
}

function* updateTeamSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('team', 'my', [], 'update', action, state));
}

function* viewTeamSuccess(action) {
  yield put(DetailAction.setDetail('team', action?.payload?.team));
}

function* webSocketMessage(action) {
  const state = yield select();
  switch (action?.payload?.event) {
    case 'invited-to-team':
      break;
    case 'joined-team':
      yield put(ListAction.setList('team', 'my', [], 'update', action, state));
      break;
    case 'left-team':
      yield put(ListAction.setList('team', 'my', [], 'update', action, state));
      break;
    case 'removed-team-member':
      yield put(ListAction.setList('team', 'joined', [], 'remove', action, state));
      break;
    case 'toggled-team-access':
      const task = action?.payload?.team?.deactivated_at ? 'remove' : 'add';
      yield put(ListAction.setList('team', 'joined', [], task, action, state));
      break;
    case 'updated-team':
      yield put(ListAction.setList('team', 'joined', [], 'update', action, state));
      break;
    default:
      break;
  }
}

export default TeamSaga;
