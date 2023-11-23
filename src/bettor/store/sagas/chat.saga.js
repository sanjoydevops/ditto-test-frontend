import { put, select, takeEvery } from 'redux-saga/effects';

import { ChatAction, ListAction } from '../actions';
import { ChatConstant, WebSocketConstant } from '../constants';

function* ChatSaga() {
  yield takeEvery(ChatConstant.SEND_CHAT_MESSAGE_SUCCESS, sendChatMessageSuccess);
  yield takeEvery(ChatConstant.STOP_VIEWING_CHAT, stopViewingChat);
  yield takeEvery(ChatConstant.VIEW_CHAT_SUCCESS, viewChatSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* sendChatMessageSuccess(action) {
  const state = yield select();
  const message = { ...action?.payload?.message };
  const list = `${message.messageable_type}.${message.messageable_id}`;
  const messages = [...state.chat.messages[list] || []];
  const isExist = messages.some(m => m.id === message.id);
  yield put(ChatAction.setChatMessages(list, [...messages, ...(isExist ? [] : [message])]));
}

function* stopViewingChat(action) {
  const list = `${action.payload.messageableType}.${action.payload.messageableId}`;
  yield put(ChatAction.setChatMessages(list, undefined));
  yield put(ChatAction.setChatTeam(undefined));
  yield put(ChatAction.setChatUser(undefined));
  yield put(ListAction.setList('user', 'chat', undefined));
}

function* viewChatSuccess(action) {
  const message = { ...action?.payload?.message };
  const list = `${message.messageable_type}.${message.messageable_id}`;
  yield put(ChatAction.setChatMessages(list, action?.payload?.messages));
  yield put(ChatAction.setChatTeam(action?.payload?.team));
  yield put(ChatAction.setChatUser(action?.payload?.user));
  yield put(ChatAction.setChatUsers(list, action?.payload?.users));
}

function* webSocketMessage(action) {
  const state = yield select();
  switch (action?.payload?.event) {
    case 'chat-message':
      const message = { ...action?.payload?.message };
      const messageableId = 'user' === message.messageable_type ? message.user_id : message.messageable_id;
      const list = `${message.messageable_type}.${messageableId}`;
      const messages = [...state.chat.messages[list] || []];
      const isExist = messages.some(m => m.id === message.id);
      yield put(ChatAction.setChatMessages(list, [...messages, ...(isExist ? [] : [message])]));
      break;
    default:
      break;
  }
}

export default ChatSaga;
