import createSaga from 'redux-saga';
import { all } from 'redux-saga/effects';

import AboutUsSaga from './about-us.saga';
import AdminSaga from './admin.saga';
import AppSaga from './app.saga';
import AuthSaga from './auth.saga';
import BetSaga from './bet.saga';
import ChartSaga from './chart.saga';
import ContactUsSaga from './contact-us.saga';
import FileSaga from './file.saga';
import FrequentlyAskedQuestionSaga from './frequently-asked-question.saga';
import ReferralSaga from './referral.saga';
import ReportSaga from './report.saga';
import RequestSaga from './request.saga';
import RestrictedLocationSaga from './restricted-location.saga';
import RoleSaga from './role.saga';
import StatisticSaga from './statistic.saga';
import TeamSaga from './team.saga';
import TransactionSaga from './transaction.saga';
import UserSaga from './user.saga';
import VideoTutorialSaga from './video-tutorial.saga';
import WebSocketSaga from './websocket.saga';

export function* sagas() {
  yield all([
    AboutUsSaga(),
    AdminSaga(),
    AppSaga(),
    AuthSaga(),
    BetSaga(),
    ChartSaga(),
    ContactUsSaga(),
    FileSaga(),
    FrequentlyAskedQuestionSaga(),
    ReferralSaga(),
    ReportSaga(),
    RequestSaga(),
    RestrictedLocationSaga(),
    RoleSaga(),
    StatisticSaga(),
    TeamSaga(),
    TransactionSaga(),
    UserSaga(),
    VideoTutorialSaga(),
    WebSocketSaga(),
  ]);
}

const saga = createSaga();

export default saga;
