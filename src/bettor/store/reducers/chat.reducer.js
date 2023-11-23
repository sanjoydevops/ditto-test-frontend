import { ChatConstant } from '../constants';

const ChatReducer = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case ChatConstant.SET_CHAT_MESSAGES:
      return {
        ...state,
        messages: {
          ...state?.messages,
          [payload?.list]: [...payload?.messages || []].sort((a, b) => a.id - b.id),
        },
      };
    case ChatConstant.SET_CHAT_TEAM:
      return { ...state, team: payload?.team };
    case ChatConstant.SET_CHAT_USER:
      return { ...state, user: payload?.user };
    case ChatConstant.SET_CHAT_USERS:
      return {
        ...state,
        users: {
          ...state?.users,
          [payload?.list]: [...payload?.users || []].sort((a, b) => a.id - b.id),
        },
      };
    default:
      return state;
  }
};

export default ChatReducer;
