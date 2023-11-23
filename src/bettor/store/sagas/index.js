import createSaga from 'redux-saga';
import { all } from 'redux-saga/effects';

import AppSaga from './app.saga';
import AuthSaga from './auth.saga';
import BetSaga from './bet.saga';
import ChatSaga from './chat.saga';
import FileSaga from './file.saga';
import NotificationSaga from './notification.saga';
import PaymentSaga from './payment.saga';
import ProfileSaga from './profile.saga';
import RequestSaga from './request.saga';
import TeamSaga from './team.saga';
import TransactionSaga from './transaction.saga';
import UserSaga from './user.saga';
import WebSocketSaga from './websocket.saga';

export function* sagas() {
  yield all([
    AppSaga(),
    AuthSaga(),
    BetSaga(),
    ChatSaga(),
    FileSaga(),
    NotificationSaga(),
    PaymentSaga(),
    ProfileSaga(),
    RequestSaga(),
    TeamSaga(),
    TransactionSaga(),
    UserSaga(),
    WebSocketSaga(),
  ]);
}

const saga = createSaga();

export default saga;
