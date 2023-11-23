import { ChatConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const sendChatMessage = (messageableType, messageableId, data) =>
  request(ChatConstant.SEND_CHAT_MESSAGE, {
    data,
    form: true,
    method: 'post',
    url: `/send-chat-message/${messageableType}/${messageableId}`,
  });

export const setChatMessages = (list, messages) => ({
  payload: { list, messages },
  type: ChatConstant.SET_CHAT_MESSAGES,
});

export const setChatTeam = team => ({
  payload: { team },
  type: ChatConstant.SET_CHAT_TEAM,
});

export const setChatUser = user => ({
  payload: { user },
  type: ChatConstant.SET_CHAT_USER,
});

export const setChatUsers = (list, users) => ({
  payload: { list, users },
  type: ChatConstant.SET_CHAT_USERS,
});

export const stopViewingChat = (messageableType, messageableId) => ({
  payload: { messageableType, messageableId },
  type: ChatConstant.STOP_VIEWING_CHAT,
});

export const viewChat = (messageableType, messageableId) =>
  request(ChatConstant.VIEW_CHAT, {
    method: 'get',
    url: `/view-chat/${messageableType}/${messageableId}`,
  });
