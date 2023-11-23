import {
  WEBSOCKET_LISTEN,
  WEBSOCKET_MESSAGE,
  WEBSOCKET_STOP_LISTENING,
} from '../constants/websocket.constant';

export const webSocketListen = (channel, event, type = 'private') => ({
  payload: { channel, event, type },
  type: WEBSOCKET_LISTEN,
});

export const webSocketMessage = (channel, event, payload) => ({
  payload: { ...payload, channel, event },
  type: WEBSOCKET_MESSAGE,
});

export const webSocketStopListening = (channel, event, type = 'private') => ({
  payload: { channel, event, type },
  type: WEBSOCKET_STOP_LISTENING,
});
