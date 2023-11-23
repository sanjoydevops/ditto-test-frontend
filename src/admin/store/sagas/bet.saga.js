import { call, put, select, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { BetConstant, WebSocketConstant } from '../constants';

function* BetSaga() {
  yield takeEvery(BetConstant.APPROVE_BET_SUCCESS, approveBetSuccess);
  yield takeEvery(BetConstant.LIST_ALL_BETS_SUCCESS, listAllBetsSuccess);
  yield takeEvery(BetConstant.SETTLE_DISPUTE_BET_SUCCESS, settleDisputeBetSuccess);
  yield takeEvery(BetConstant.VIEW_BET_SUCCESS, viewBetSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* approveBetSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('bet', 'approved', [], 'add', action, state));
}

function* listAllBetsSuccess(action) {
  yield put(ListAction.setList('bet', 'all', action?.payload?.bets));
}

function* settleDisputeBetSuccess(action) {
  yield put(DetailAction.setDetail('bet', action?.payload?.bet));
  yield call(alert, action?.message);
}

function* viewBetSuccess(action) {
  yield put(DetailAction.setDetail('bet', action?.payload?.bet));
}

function* webSocketMessage(action) {
  const state = yield select();
  console.log('WebSocketMessage', action, state);
  switch (action?.payload?.event) {
    case 'approved-bet':
      break;
      default:
      break;
  }
}

export default BetSaga;
