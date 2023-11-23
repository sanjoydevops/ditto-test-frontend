import { put, select, takeEvery } from 'redux-saga/effects';

import { AppAction, AuthAction, ListAction } from '../actions';
import { BetConstant, WebSocketConstant } from '../constants';

function* BetSaga() {
  yield takeEvery(BetConstant.ACCEPT_BET_ERROR, acceptBetError);
  yield takeEvery(BetConstant.ACCEPT_BET_SUCCESS, acceptBetSuccess);
  yield takeEvery(BetConstant.CANCEL_BET_ERROR, cancelBetError);
  yield takeEvery(BetConstant.CANCEL_BET_SUCCESS, cancelBetSuccess);
  yield takeEvery(BetConstant.COMPLETE_BET_SUCCESS, completeBetSuccess);
  yield takeEvery(BetConstant.DECLINE_BET_ERROR, declineBetError);
  yield takeEvery(BetConstant.DECLINE_BET_SUCCESS, declineBetSuccess);
  yield takeEvery(BetConstant.IS_BET_IN_DISPUTE_SUCCESS, isBetInDisputeSuccess);
  yield takeEvery(BetConstant.LIST_ACTIVE_BETS_SUCCESS, listActiveBetsSuccess);
  yield takeEvery(BetConstant.LIST_BET_FILTER_OPTIONS_SUCCESS, listBetFilterOptionsSuccess);
  yield takeEvery(BetConstant.LIST_BET_PREFERENCE_OPTIONS_SUCCESS, listBetPreferenceOptionsSuccess);
  yield takeEvery(BetConstant.LIST_BET_RANGE_OPTIONS_SUCCESS, listBetRangeOptionsSuccess);
  yield takeEvery(BetConstant.LIST_COMPLETED_BETS_SUCCESS, listCompletedBetsSuccess);
  yield takeEvery(BetConstant.LIST_INVITED_BETS_SUCCESS, listInvitedBetsSuccess);
  yield takeEvery(BetConstant.LIST_OFFER_BETS_SUCCESS, listOfferBetsSuccess);
  yield takeEvery(BetConstant.LIST_OPEN_BETS_SUCCESS, listOpenBetsSuccess);
  yield takeEvery(BetConstant.PLACE_BET_ERROR, placeBetError);
  yield takeEvery(BetConstant.PLACE_BET_SUCCESS, placeBetSuccess);
  yield takeEvery(BetConstant.REVISE_BET_RESULT_ERROR, reviseBetResultError);
  yield takeEvery(BetConstant.REVISE_BET_RESULT_SUCCESS, reviseBetResultSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* acceptBetError(action) {
  if (['bet_expired', 'bet_completed'].includes(action?.payload?.error?.type)) {
    yield put(ListAction.setList('bet', 'invited', [], 'remove', action, yield select()));
    yield put(ListAction.setList('bet', 'offer', [], 'remove', action, yield select()));
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  } else if ('bet_amount' === action?.payload?.error?.type) {
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* acceptBetSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('bet', 'invited', [], 'remove', action, state));
  yield put(ListAction.setList('bet', 'offer', [], 'remove', action, state));
  yield put(ListAction.setList('bet', 'active', [], 'add', action, state));
  yield put(AuthAction.me());
}

function* cancelBetError(action) {
  if ('bet_expired' === action?.payload?.error?.type) {
    yield put(ListAction.setList('bet', 'open', [], 'remove', action, yield select()));
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* cancelBetSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('bet', 'open', [], 'remove', action, state));
  yield put(AuthAction.me());
}

function* completeBetSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('bet', 'active', [], 'remove', action, state));
  yield put(ListAction.setList('bet', 'completed', [], 'add', action, state));
  yield put(AuthAction.me());
}

function* declineBetError(action) {
  if ('bet_expired' === action?.payload?.error?.type) {
    yield put(ListAction.setList('bet', 'invited', [], 'remove', action, yield select()));
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* declineBetSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('bet', 'invited', [], 'remove', action, state));
}

function* isBetInDisputeSuccess(action) {
  const bet = { ...action?.payload?.bet };
  yield put(AppAction.toggle({ key: 'completeBetModal', value: bet }));
  if (bet.dispute_exist) {
    yield put(AppAction.toggle({ key: 'confirmBetDisputeModal', value: bet }));
  }
}

function* listActiveBetsSuccess(action) {
  yield put(ListAction.setList('bet', 'active', [...action?.payload?.bets]));
}

function* listBetFilterOptionsSuccess(action) {
  yield put(ListAction.setList('betFilterOption', 'all', [...action?.payload?.betFilterOptions]));
}

function* listBetPreferenceOptionsSuccess(action) {
  yield put(ListAction.setList('betPreferenceOption', 'all', [...action?.payload?.betPreferenceOptions]));
}

function* listBetRangeOptionsSuccess(action) {
  yield put(ListAction.setList('betRangeOption', 'all', [...action?.payload?.betRangeOptions]));
}

function* listCompletedBetsSuccess(action) {
  yield put(ListAction.setList('bet', 'completed', [...action?.payload?.bets]));
}

function* listInvitedBetsSuccess(action) {
  yield put(ListAction.setList('bet', 'invited', [...action?.payload?.bets]));
}

function* listOfferBetsSuccess(action) {
  yield put(ListAction.setList('bet', 'offer', [...action?.payload?.bets]));
}

function* listOpenBetsSuccess(action) {
  yield put(ListAction.setList('bet', 'open', [...action?.payload?.bets]));
}

function* placeBetError(action) {
  if ('bet_active' === action?.payload?.error?.type) {
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* placeBetSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('bet', 'open', [], 'add', action, state));
  yield put(AuthAction.me());
}

function* reviseBetResultError(action) {
  if ('bet_disputed' === action?.payload?.error?.type) {
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* reviseBetResultSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('bet', 'completed', [], 'update', action, state));
  yield put(AuthAction.me());
}

function* webSocketMessage(action) {
  const state = yield select();
  switch (action?.payload?.event) {
    case 'accepted-bet':
      yield put(ListAction.setList('bet', 'open', [], 'remove', action, state));
      yield put(ListAction.setList('bet', 'active', [], 'update', action, state));
      if (state.app?.toggle?.viewJoinedBetMembersModal) {
        yield put(AppAction.toggle({ key: 'viewJoinedBetMembersModal', value: { ...action?.payload?.bet } }));
      }
      break;
    case 'cancelled-bet':
      yield put(ListAction.setList('bet', 'invited', [], 'remove', action, state));
      yield put(ListAction.setList('bet', 'offer', [], 'remove', action, state));
      break;
    case 'completed-bet':
      if (!!action?.payload?.bet?.users?.find?.(user => user?.id === state?.auth?.user?.id)?.user_has_bet?.completed_at) {
        yield put(ListAction.setList('bet', 'completed', [], 'update', action, state));
      }
      yield put(AuthAction.me());
      break;
    case 'invited-to-bet':
      yield put(ListAction.setList('bet', 'invited', [], 'add', action, state));
      break;
    case 'placed-bet':
      if (3 === action?.payload?.bet?.type) {
        yield put(ListAction.setList('bet', 'offer', [], 'add', action, state));
      }
      break;
    case 'revised-bet-result':
      yield put(ListAction.setList('bet', 'completed', [], 'update', action, state));
      yield put(AuthAction.me());
      break;
    case 'settled-dispute-bet':
      yield put(ListAction.setList('bet', 'completed', [], 'update', action, state));
      yield put(AuthAction.me());
      break;
    default:
      break;
  }
}

export default BetSaga;
