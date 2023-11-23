import { put, /* select, */ takeEvery } from 'redux-saga/effects';

import { ListAction, NotificationAction } from '../actions';
import { NotificationConstant, WebSocketConstant } from '../constants';

function* listRecentNotificationsSuccess(action) {
  yield put(ListAction.setList('notification', 'recent', [...action?.payload?.notifications]));
}

function* readNotificationSuccess() {
  yield put(NotificationAction.listRecentNotifications());
}

function* webSocketMessage(action) {
  // const state = yield select();
  switch (action?.payload?.event) {
    case 'notification':
      // yield put(ListAction.setList('notification', 'recent', [], { action: 'unshift', name: 'add' }, action, state));
      yield put(NotificationAction.listRecentNotifications());
      break;
    default:
      break;
  }
}

function* NotificationSaga() {
  yield takeEvery(NotificationConstant.LIST_RECENT_NOTIFICATIONS_SUCCESS, listRecentNotificationsSuccess);
  yield takeEvery(NotificationConstant.READ_NOTIFICATION_SUCCESS, readNotificationSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

export default NotificationSaga;
