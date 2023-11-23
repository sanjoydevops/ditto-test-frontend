import Echo from 'laravel-echo';
import { eventChannel } from 'redux-saga';
import { call, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';

import { webSocketListen, webSocketMessage } from '../actions/websocket.action';
import { SET_AUTH } from '../constants/auth.constant';
import { WEBSOCKET_LISTEN, WEBSOCKET_STOP_LISTENING } from '../constants/websocket.constant';

window.axios = require('axios');
window.Pusher = require('pusher-js');

function* registerListeners(user) {
  const listeners = [
    [
      'private',
      [
        [
          `admin.${user.id}`,
          [
            'created-admin',
          ],
        ],
        [
          'app',
          [
            'added-payment-card',
            'added-transaction',
            'cancelled-bet',
            'created-admin',
            'created-role',
            'created-team',
            'declined-bet',
            'placed-bet',
            'referred-user',
            'removed-admin',
            'removed-role',
            'removed-payment-card',
            'toggled-access-admin',
            'updated-admin',
            'updated-role',
          ],
        ],
        [
          `user.${user.id}`,
          [
            'accepted-bet',
            'completed-bet',
            'invited-to-bet',
            'invited-to-team',
            'joined-team',
            'left-team',
            'logged-out',
            'notification',
            'removed-team-member',
            'revised-bet-result',
            'settled-dispute-bet',
            'toggled-access-user',
            'toggled-team-access',
            'updated-coin-balance',
            'updated-team',
          ],
        ],
      ],
    ],
    [
      'public',
      [
        [
          'app',
          [
            'created-about-us',
            'created-frequently-asked-question',
            'created-video-tutorial',
            'updated-leader-board',
            'removed-about-us',
            'removed-frequently-asked-question',
            'removed-video-tutorial',
            'toggled-visibility-about-us',
            'toggled-visibility-frequently-asked-question',
            'toggled-visibility-video-tutorial',
            'updated-about-us',
            'updated-frequently-asked-question',
            'updated-video-tutorial',
          ],
        ],
      ],
    ],
  ];

  for (const [type, channels] of listeners) {
    for (const [channel, events] of channels) {
      for (const event of events) {
        switch (type) {
          case 'private':
            if (user.is_logged_in) {
              yield put(webSocketListen(channel, event, type));
            }
            break;
          default:
            yield put(webSocketListen(channel, event, type));
            break;
        }
      }
    }
  }
}

function* initializeWebSocket(action) {
  const state = yield select();

  const auth = { ...(action?.payload || state.auth) };

  window.echo = new Echo({
    auth: { headers: { Accept: 'application/json', Authorization: `Bearer ${auth.token}` } },
    authEndpoint: process.env.REACT_APP_API_URL + '/broadcasting/auth',
    broadcaster: 'pusher',
    disableStats: true,
    enabledTransports: ['ws'],
    forceTLS: false,
    key: 'bK3gEQvrvZ',
    wsHost: process.env.REACT_APP_WS_HOST || window.location.hostname,
    wsPort: process.env.REACT_APP_WS_PORT,
  });

  window.echo.registerAxiosRequestInterceptor();

  window.echo.listeners = [];

  yield call(registerListeners, { ...auth.user });
}

function createWebSocketEventChannel(channelName, eventName, type) {
  return eventChannel(emit => {
    let channel;
    if ('private' === type) {
      channel = window.echo.private(channelName);
    } else {
      channel = window.echo.channel(channelName);
    }
    channel.listen(`.${eventName}`, payload => emit(webSocketMessage(channelName, eventName, payload)));
    return () => channel.stopListening(eventName);
  });
}

function* listenWebSocket(webSocketListenAction) {
  const { channel, event, type } = webSocketListenAction.payload;
  const isRegistered = window.echo.listeners.some(
    listener => listener.channel === channel && listener.event === event && listener.type === type,
  );
  if (!isRegistered) {
    window.echo.listeners.push({ channel, event, type });
    const webSocketEventChannel = yield call(createWebSocketEventChannel, channel, event, type);
    yield takeEvery(webSocketEventChannel, function* (webSocketMessageAction) {
      yield put(webSocketMessageAction);
    });
    const webSocketStopListeningAction = yield take(WEBSOCKET_STOP_LISTENING);
    const webSocketListenPayload = JSON.stringify(webSocketListenAction.payload);
    const webSocketStopListeningPayload = JSON.stringify(webSocketStopListeningAction.payload);
    if (webSocketListenPayload === webSocketStopListeningPayload) {
      window.echo.listeners.splice(
        window.echo.listeners
          .map(listener => JSON.stringify(listener))
          .indexOf(webSocketStopListeningPayload),
        1,
      );
      webSocketEventChannel.close();
    }
  }
}

function* WebSocketSaga() {
  yield fork(initializeWebSocket);
  yield takeLatest(SET_AUTH, initializeWebSocket);
  yield takeEvery(WEBSOCKET_LISTEN, listenWebSocket);
}

export default WebSocketSaga;
